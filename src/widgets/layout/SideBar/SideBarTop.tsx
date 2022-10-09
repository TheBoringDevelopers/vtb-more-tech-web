import { FC } from 'react';

type Props = {type: 'icon' | 'count', title: string, link?: string, count?: number}

const SideBarTop: FC<Props> = ({type, title, link = '#', count = 0}): JSX.Element => {
    return (
        <>
            {type === 'count' ?
                <div className="sidebar__item-top">
                    <span className="sidebar__item-span">
                        <h4 className="sidebar__item-title">{title}</h4>
                        <p className="sidebar__item-count">{count}</p>
                    </span>
                    <a href={link} className="sidebar__item-link">Все</a>
                </div>
                :
                <h4 className="sidebar__item-top icon">{title}</h4>
            }
        </>
    );
}

export default SideBarTop;