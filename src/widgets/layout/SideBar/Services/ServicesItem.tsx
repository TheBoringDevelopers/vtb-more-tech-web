import { FC } from 'react';
type Props = {icon: string, title: string, description?: string}

const ServicesItem: FC<Props> = ({icon, title, description = ''}): JSX.Element => {
    return (
        <li className="sidebar__services-item">
            <div className="sidebar__services-icon">
                <img src={icon} alt="Service Icon" />
            </div>
            <div className="sidebar__services-info">
                <h4 className="sidebar__services-title">{title}</h4>
                {description ? <p className="sidebar__services-desc">{description}</p> : ''}
            </div>
        </li>
    );
}

export default ServicesItem;