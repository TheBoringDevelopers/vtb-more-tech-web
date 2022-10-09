import { FC } from 'react';
import SideBarTop from '../SideBarTop';
import TrainingsItem from './TrainingsItem';

const Trainings: FC = (): JSX.Element => {
    return (
        <div className="sidebar__item sidebar__trainings">
            <SideBarTop type="count" title="Тренинги" count={1} link="#" />
            <ul className="sidebar__trainings-list">
                <TrainingsItem date="8 декабря" names={['Welcome - тренинг']} />
            </ul>
        </div>
    );
}

export default Trainings;