import { createEvent, createStore } from 'effector';

export type FormState = {
  type: 'ruble' | 'matic',
  userId: string;
  amount: string;
}

const changeType = createEvent<'ruble' | 'matic'>();
const changeUserId = createEvent<string>();
const changeAmount = createEvent<string>();
const state$ = createStore({
  type: '' as any,
  userId: '',
  amount: '',
} as FormState)

state$
  .on(changeType, (state, payload) => ({ ...state, type: payload }))
  .on(changeUserId, (state, payload) => ({ ...state, userId: payload  }))
  .on(changeAmount, (state, payload) => ({ ...state, amount: payload }))

export const FormModel = {
  changeType,
  changeUserId,
  changeAmount,
  state$,
}
