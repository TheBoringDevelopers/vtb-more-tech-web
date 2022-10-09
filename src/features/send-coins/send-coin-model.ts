import { combine, createEffect, createEvent, createStore, merge, sample, split } from 'effector';
import { FormModel } from 'src/features/send-coins/form-model';
import { transferMatic, transferRuble } from 'src/shared/api/wallet';
import { toast } from 'react-toastify';

const options = ['ruble', 'matic'];

const clickedClose = createEvent();
const clickedOkay = createEvent();
const clickedOpen = createEvent();

const sendMoney = createEvent<'ruble' | 'matic'>();

const openModal$ = createStore(false);
const mode$ = createStore('');

const sendRubleFx =
  createEffect((payload: { userId: string; amount: string }) => transferRuble(payload.userId, payload.amount))
const sendMaticFx =
  createEffect((payload: { userId: string; amount: string }) => transferMatic(payload.userId, payload.amount))

const successSendMoney = merge([sendRubleFx.done, sendMaticFx.done]);
const loading$ = combine(sendRubleFx.pending, sendMaticFx.pending, (...pending) => pending.some(v => v));
const failSendMoney = merge([sendRubleFx.fail, sendMaticFx.fail])

openModal$
  .on(clickedOpen, () => true)
  .on([clickedClose, successSendMoney], () => false)

mode$
  .on(sendMoney, (_, opt) => options.find(item => item === opt))
  .reset(clickedOpen)
FormModel.state$.reset(clickedOpen);

sample({
  clock: clickedOkay,
  source: FormModel.state$,
  filter: (source) => {
    return Object.values(source).every(value => !!value);
  },
  fn: (source) => source.type,
  target: sendMoney,
})

split({
  clock: sendMoney,
  source: FormModel.state$,
  match: mode$,
  cases: {
    ruble: sendRubleFx,
    matic: sendMaticFx,
  }
})

successSendMoney.watch(() => {
  toast('Вы успешно отправили деньги', { type: 'success' })
})

failSendMoney.watch(() => {

  toast('Что-то пошло не так', { type: 'error' })
})

export const SendCoinModel = {
  openModal$,
  loading$,
  clickedClose,
  clickedOkay,
  clickedOpen,
}
