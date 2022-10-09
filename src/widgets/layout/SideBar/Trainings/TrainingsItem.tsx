import { FC } from 'react';
type Props = {date: string, names: string[]}

const TrainingsItem: FC<Props> = ({date, names}): JSX.Element => {
    return (
        <li className="sidebar__trainings-item">
            <p className="sidebar__trainings-date">{date}</p>
            <div className="sidebar__trainings-names">
                {names.map((name, index) => (
                    <p className="sidebar__trainings-title" key={index}>{name}</p>
                ))}
            </div>
        </li>
    );
}

export default TrainingsItem;