import { useGate, useStore } from 'effector-react';
import { WalletModel } from 'src/widgets/layout/SideBar/Wallet/wallet-model';
import SideBarTop from 'src/widgets/layout/SideBar/SideBarTop';
import Balance from 'src/widgets/layout/SideBar/Wallet/Balance';
import Button from 'src/widgets/layout/SideBar/Wallet/Button';
import { SendCoinDialog } from 'src/features/send-coins/SendCoinDialog';
import { SendCoinModel } from 'src/features/send-coins/send-coin-model';

export const Wallet = () => {
  useGate(WalletModel.gate);
  const data = useStore(WalletModel.state$);

  return (
    <div className="sidebar__item sidebar__wallet">
      <SideBarTop type="icon" title="Кошелек"/>
      <div className="sidebar__balance-wrapper">
        <Balance icon="/img/global/layout/sidebar/wallet/balance/matic-icon.svg" sum={`${data.maticAmount} MATIC`} link="#"/>
        <Balance icon="/img/global/layout/sidebar/wallet/balance/rub-icon.svg" sum={`${data.coinsAmount} ₽`} link="#"/>
      </div>
      <ul className="sidebar__buttons">
        <Button icon="/img/global/layout/sidebar/wallet/buttons/top-up-icon.svg" text="Пополнить"/>
        <Button
          icon="/img/global/layout/sidebar/wallet/buttons/send-icon.svg"
          text="Отправить"
          onClick={() => SendCoinModel.clickedOpen()}
        />
        <Button icon="/img/global/layout/sidebar/wallet/buttons/exchange-icon.svg" text="Обменять"/>
        <Button icon="/img/global/layout/sidebar/wallet/buttons/withdraw-icon.svg" text="Вывести"/>
      </ul>

      <SendCoinDialog />
    </div>
  );
}
