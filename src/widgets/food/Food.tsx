import Message from 'src/widgets/food//Message';
import Filters from 'src/widgets/food/Filters';
import List from 'src/widgets/food/List';


export const Food = () => {
    return (
        <section className="section-food" id="section-food">
            <div className="container">
                <Message text="Получай донат едой, дари еду друзьям и коллегам, разыгрывай еду!" />
                <Filters />
                <List />
            </div>
        </section>
    )
}

export default Food;