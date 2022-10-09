import { FC } from 'react';

const Drum: FC = (): JSX.Element => {
    return (
        <div className="sidebar__item sidebar__drum">
            <div className="sidebar__drum-content">
                <img src="/img/global/layout/sidebar/drum/gift-icon.svg" alt="Gift" className="sidebar__drum-icon" />
                <div className="sidebar__drum-info">
                    <p className="sidebar__drum-desc">Испытай удачу!</p>
                    <h3 className="sidebar__drum-title">Крути барабан</h3>
                </div>
            </div>
            <button type="button" className="sidebar__drum-btn blue-btn">Крутить</button>
        </div>
    );
}

export default Drum;