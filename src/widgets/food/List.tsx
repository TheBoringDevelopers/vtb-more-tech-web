import { FC } from 'react';
import ListItem from './ListItem';

const List: FC = (): JSX.Element => {
    return (
        <ul className="food-list">
            <ListItem 
                img="dist/images/food/list/first-img.jpg"
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="dist/images/food/list/second-img.jpg"
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="dist/images/food/list/third-img.jpg"
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="dist/images/food/list/fourth-img.jpg"
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="dist/images/food/list/fifth-img.jpg"
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="dist/images/food/list/sixth-img.jpg"
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="dist/images/food/list/seventh-img.jpg"
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="dist/images/food/list/eighth-img.jpg"
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />
        </ul>
    );
}

export default List;