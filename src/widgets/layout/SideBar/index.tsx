import Drum from './Drum';
import Trainings from './Trainings';
import Planning from './Planning';
import Services from './Services';
import { Wallet } from './Wallet';

const SideBar = () => {
    return (
        <aside className="sidebar">
            <Wallet />
            <Drum />
            <Trainings />
            <Planning />
            <Services />
        </aside>
    );
}

export default SideBar;
