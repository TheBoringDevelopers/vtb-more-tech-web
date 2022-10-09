import { FC } from 'react';
type Props = {time: string, title: string, hotText?: string}

const PlanningItem: FC<Props> = ({time, title, hotText = ''}): JSX.Element => {
    return (
        <li className="sidebar__planning-item">
            <p className="sidebar__planning-time">{time}</p>
            <div className="sidebar__planning-info">
                <h4 className="sidebar__planning-title">{title}</h4>
                {hotText ? <span className="sidebar__planning-hot">{hotText}</span> : ''}
            </div>
        </li>
    );
}

export default PlanningItem;