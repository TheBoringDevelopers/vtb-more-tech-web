import { FC } from 'react';
import SideBarTop from '../SideBarTop';
import ServicesItem from './ServicesItem';

const Services: FC = (): JSX.Element => {
    return (
        <div className="sidebar__item sidebar__services">
            <SideBarTop type="count" title="Сервисы" count={23} link="#" />
            <ul className="sidebar__services-list">
                <ServicesItem 
                    icon="/img/global/layout/sidebar/services/plane-icon.svg" 
                    title="Хочу в отпуск" 
                    description="Вам доступно 20 дней" 
                />
                <ServicesItem 
                    icon="/img/global/layout/sidebar/services/empty-blank-icon.svg" 
                    title="Анкета конфликта интересов"
                />
                <ServicesItem 
                    icon="/img/global/layout/sidebar/services/blank-icon.svg" 
                    title="Корпоративные политики"
                />
                <ServicesItem 
                    icon="/img/global/layout/sidebar/services/incident-icon.svg" 
                    title="Сообщить о проишествии"
                />
            </ul>
        </div>
    );
}

export default Services;