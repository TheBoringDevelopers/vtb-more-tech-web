import React, { useState } from 'react';
import s from './Sidebar.module.scss'
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    title: 'Навигатор',
    link: '/',
    active: true,
    img: '/icons/document-info.svg',
    notifications: null,
  },
  {
    title: 'Обучение',
    active: false,
    img: '/icons/target.svg',
    notifications: null,
    link: '/t'
  },
  {
    title: 'Проверка знаний',
    active: false,
    img: '/icons/users-alt.svg',
    notifications: null,
    link: '/t'
  },
  {
    title: 'Маркет',
    active: false,
    img: '/icons/shopping-bag.svg',
    notifications: null,
    link: '/market'
  },
  {
    title: 'Вебинары',
    active: false,
    img: '/icons/notes.svg',
    notifications: null,
    link: '/t'
  },
  {
    title: 'Обучение',
    active: false,
    img: '/icons/headphones.svg',
    notifications: null,
    link: '/education'
  },
  {
    title: 'Финансы',
    active: false,
    img: '/icons/suitcase.svg',
    notifications: null,
    link: '/t'
  },
  {
    title: 'Документы',
    active: false,
    img: '/icons/lightning.svg',
    notifications: null,
    link: '/t'
  },
  {
    title: 'Идеи',
    active: false,
    img: '/icons/star.svg',
    notifications: null,
    link: '/t'
  },
  {
    title: 'Объявления',
    active: false,
    img: '/icons/ads.svg',
    notifications: null,
    link: '/t'
  },
  {
    title: 'Еще',
    active: false,
    img: '/icons/subject.svg',
    notifications: null,
    link: '/t'
  },
  {
    title: 'Автоматизация',
    active: false,
    img: '/icons/suitcase.svg',
    notifications: null,
    link: '/t'
  },
]


export const SidebarLeft = () => {
  const [active, setActive] = useState(false)

  return (
    <div
      className={cn(s.Sidebar, { [s.Sidebar_hidden]: active })}
      onMouseEnter={() => setActive(false)}
      onMouseLeave={() => setActive(true)}
    >
      <div className={s.Sidebar_top}>
        <img alt="logo" src="/icons/logo.svg" className={s.logo}/>
        <ul className={s.Sidebar_menu}>
          {menuItems.map((e, index) => (
            <NavLink end to={e.link} key={index} className={({ isActive }) => cn(s.link, { [s.active]: isActive })}>
              <img src={`${e.img}`} alt="icon"/>
              <p>{e.title}</p>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className={s.Sidebar_bottom}>
        <a className={cn(s.link, s.notification)}>
          <img src="/icons/bell.svg" alt="icon"/>
          <p>Уведомления</p>
        </a>
        <NavLink to="/profile" className={({ isActive }) => cn(s.user, { [s.active]: isActive, [s.user__active]: isActive })}>
          <img className="rounded-full" src="/icons/acc.svg"/>
          <div className={s.text}>
            <h3>Станислав. И</h3>
            <p>UI/UX Designer</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
