import { FC } from 'react';
import SideBarTop from '../SideBarTop';
import PlanningItem from './PlanningItem';

const Planning: FC = (): JSX.Element => {
    return (
        <div className="sidebar__item sidebar__planning">
            <SideBarTop type="count" title="Планирование" count={2} link="#" />
            <ul className="sidebar__planning-list">
                <PlanningItem time="12:40" title="Командный созвон, планерка, планирование на неделю" hotText="Через 20 мин" />
                <PlanningItem time="15:00" title="One 2 One" />
            </ul>
        </div>
    );
}

export default Planning;