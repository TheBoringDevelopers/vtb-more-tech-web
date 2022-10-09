import { FC } from 'react';
type Props = {icon: string, sum: string, link: string};

const Balance: FC<Props> = ({icon, sum, link}): JSX.Element => {
    return (
        <a href={link} className="sidebar__balance">
            <div className="sidebar__balance-content">
                <img src={icon} alt="Icon" className="sidebar__balance-icon" />
                <div className="sidebar__balance-info">
                    <p className="sidebar__balance-text">Баланс</p>
                    <h3 className="sidebar__balance-sum">{sum}</h3>
                </div>
            </div>
        </a>
    );
}

export default Balance;