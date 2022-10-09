import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { BuyNftButton } from 'src/features/market';
import { ProductModel } from 'src/entities/product';

const ProductInfo = () => {
  const info = useStore(ProductModel.store$);

  return (
    <div className={style.containerGen}>
      <div className={style.item1}>
        <div className={style.container}>
          <div className={style.block1}>
            {/* @ts-ignore*/}
            <Link to={-1} className={style.textOne}>Назад</Link><br/>
            <hr className={style.line}/>
          </div>
          <div className={style.block3}>
            <img
              src={info?.imageUrl}
              alt="Продукт"
              className={style.imgOne}
            />
          </div>
          <div className={style.block4}>
            <div className={style.infoOne}>
              {info?.uri}
            </div>
            <div className={style.infoTwo}>
              {info?.name ?? 'Нет такого товара'}
            </div>
            <div className={style.infoThree}>
              Современная куртка представлена в единном экземпляре,<br/>
              вещь будет произведена после сжигания токена, под ваши<br/>
              размеры и пожелания
            </div>
            <div className={style.infoThree}>
              <p className={style.textPrice}>{info?.rublePrice} P</p>
            </div>
            <div className={style.infoFour}>
              <BuyNftButton info={info!}/>
              <button className={style.btnK}>
                Подарить
              </button>
            </div>
            <hr className={style.lineFour}/>
            <div className={style.infoFive}>
              <p className={style.textTwo}>О товаре</p>
            </div>
            <div className={style.infoSex}>
              <div className={style.podBlockOne}>
                <p className={style.textParam}>Вес:</p>
                <p className={style.textParam}>Размер:</p>
                <p className={style.textParam}>Цвет:</p>
                <p className={style.textParam}>Материал:</p>
                <p className={style.textParam}>Тираж:</p>
                <p className={style.textParam}>Номер вещи в тираже:</p>
              </div>
              <div className={style.podBlockTwo}>
                <p className={style.textParams}>1 кг.</p>
                <p className={style.textParams}>XS (Либо свой размер)</p>
                <p className={style.textParams}>Белый, зелёный</p>
                <p className={style.textParams}>Пластик, Ткань</p>
                <p className={style.textParams}>10 штук</p>
                <p className={style.textParams}>1 из 10</p>
              </div>
            </div>
            <div className={style.infoSeven}>
              <p className={style.dopInfoOne}>Дополнительная информация</p>
              <p className={style.dopInfoTwo}>Компания партнер произведет только одну куртку по вашему запросу, о
                компании: Благодаря развитию digital-коммуникаций и переводу части
                показов в онлайн дизайнеры перешли на новые способы коммуникации
                с клиентами, включая принцип see now buy now, когда люксовые бренды предлагают
                пользователям социальных сетей первыми купить модели из
                новой коллекции. То, что вчера показали на подиумах, сегодня – уже на
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;
