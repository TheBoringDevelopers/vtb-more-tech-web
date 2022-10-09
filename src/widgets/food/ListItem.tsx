import { FC } from 'react';
type Props = {img: string, title: string, description: string};

const ListItem: FC<Props> = ({img, title, description}): JSX.Element => {
    return (
        <li className="food-list__item">
            <img src="/img/food/list/first-img.jpg" alt="Image" className="food-list__img" />
            <div className="food-list__info">
                <h4 className="food-list__title">Frankie Brooklyn Pizza</h4>
                <p className="food-list__desc">4.8 Рекомендуем</p>
            </div>
        </li>
    );
}

export default ListItem;