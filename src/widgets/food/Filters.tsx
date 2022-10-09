import { FC } from 'react';

const Filters: FC = (): JSX.Element => {
    return (
        <ul className="food-filters">
            <li className="food-filters__item selected">Все</li>
            <li className="food-filters__item">Навынос</li>
            <li className="food-filters__item">Топ</li>
            <li className="food-filters__item">Китайская</li>
            <li className="food-filters__item">Суши</li>
            <li className="food-filters__item">Бургеры</li>
            <li className="food-filters__item">Пицца</li>
            <li className="food-filters__item">Десерты</li>
            <li className="food-filters__item">Грузия</li>
            <li className="food-filters__item next">Еще</li>
        </ul>
    );
}

export default Filters;