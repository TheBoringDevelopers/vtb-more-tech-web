import { Card, CardHeader, H2, H4, WhiteCard } from 'src/shared/ui';

type Props = {};

export const AboutUser = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <H2 className="flex justify-between items-center mb-6">
          Благодарности и достижения <a className="text-base text-slate-400 ml-auto">Все</a>
        </H2>

        <div className="flex gap-6">

          <div className="relative w-16">
            <img src="/achiv/ach-1.png"/>
            <div className="absolute right-0 bottom-0 bg-black text-white font-sm font-bold py-1 px-1.5 rounded-lg leading-130">12</div>
          </div>
          <div className="relative w-16">
            <img src="/achiv/ach-2.png"/>
            <div className="absolute right-0 bottom-0 bg-black text-white font-sm font-bold py-1 px-1.5 rounded-lg leading-130">12</div>
          </div>
          <div className="relative w-16">
            <img src="/achiv/ach-3.png"/>
            <div className="absolute right-0 bottom-0 bg-black text-white font-sm font-bold py-1 px-1.5 rounded-lg leading-130">12</div>
          </div>
          <div className="relative w-16">
            <img src="/achiv/ach-4.png"/>
            <div className="absolute right-0 bottom-0 bg-black text-white font-sm font-bold py-1 px-1.5 rounded-lg leading-130">12</div>
          </div>
          <div className="relative w-16">
            <img src="/achiv/ach-5.png"/>
            <div className="absolute right-0 bottom-0 bg-black text-white font-sm font-bold py-1 px-1.5 rounded-lg leading-130">12</div>
          </div>
          <div className="relative w-16">
            <img src="/achiv/ach-6.png"/>
            <div className="absolute right-0 bottom-0 bg-black text-white font-sm font-bold py-1 px-1.5 rounded-lg leading-130">12</div>
          </div>

        </div>
      </Card>

      <Card>
        <H2 className="mb-4">
          Обязательное обучение
        </H2>

        <div className="bg-white rounded-lg flex justify-between py-4 px-6">
          <div className="flex flex-col">
            <span className="font-[700] leading-130 mb-1.5 text-blue-600">Персональные данные в VTB</span>
            <span className="font-semibold text-sm text-slate-400">до 12.03.2023</span>
          </div>

          <button className="bg-blue-700 hover:bg-blue-900 text-sm font-bold text-white leading-130 px-5 py-3 rounded-md">
            Начать
          </button>

        </div>
      </Card>

      <Card>
        <H2 className="mb-4">
          Обязательное обучение
        </H2>

        <div className="bg-white rounded-lg flex justify-between py-4 px-6">
          <div className="flex flex-col">
            <span className="font-[700] leading-130 mb-1.5 text-blue-600">Персональные данные в VTB</span>
            <span className="font-semibold text-sm text-slate-400">до 12.03.2023</span>
          </div>

          <button className="bg-blue-700 hover:bg-blue-900 text-sm font-bold text-white leading-130 px-5 py-3 rounded-md">
            Начать
          </button>

        </div>
      </Card>

      <Card>
        <H2 className="mb-4">Информация</H2>

        <div className="space-y-4">
          <WhiteCard>
            <CardHeader>
              <H4>О работе</H4>
            </CardHeader>

            <div className="grid grid-cols-[160px,1fr] gap-x-10 gap-y-4 font-semibold">
              <span className="text-slate-400">Дата начала работы</span>
              <span>01.02.2021 <span className="text-slate-400">1 год</span></span>
              <span className="text-slate-400">Дней в офисе</span>
              <span>443</span>
              <span className="text-slate-400">Руководитель</span>
              <span className="text-blue-500">Алексей Сергеев</span>
              <span className="text-slate-400">Проект</span>
              <span className="text-blue-500">iOs/Android - разработка</span>
              <span className="text-slate-400">Режим работы</span>
              <span>Комбинированный</span>
            </div>


          </WhiteCard>

          <WhiteCard>
            <CardHeader className="flex justify-between">
              <H4>Чем я занимаюсь в VTB</H4>
              <button className="text-slate-400 text-sm font-semibold">Редактировать</button>
            </CardHeader>

            <div className="grid grid-cols-[160px,1fr] gap-x-10 gap-y-4 font-semibold">
              <span className="text-slate-400">Должность</span>
              <span>Продуктовый дизайнер</span>

              <span className="text-slate-400">Отдел</span>
              <span>Группа разработки интерфейсов</span>

              <span className="text-slate-400">Чем я занимаюсь</span>
              <span>Проектирую интерфейсы, внешние и внутринние сервисы</span>
            </div>


          </WhiteCard>

          <WhiteCard>
            <CardHeader className="flex justify-between">
              <H4>О себе</H4>
              <button className="text-slate-400 text-sm font-semibold">Редактировать</button>
            </CardHeader>

            <div className="grid grid-cols-[160px,1fr] gap-x-10 gap-y-4 font-semibold">
              <span className="text-slate-400">День рождения</span>
              <span>12.03.2011 <span className="text-slate-400">25 лет</span></span>

              <span className="text-slate-400">Размер футболки</span>
              <span>M</span>

              <span className="text-slate-400">Хобби</span>
              <span>Музыка, спорт, автомобили</span>

              <span className="text-slate-400">Учебное заведение</span>
              <span>Продуктовый дизайнер</span>

              <span className="text-slate-400">МГТУ Станкин</span>
              <span>Продуктовый дизайнер</span>

              <span className="text-slate-400">Языки</span>
              <span>Английский на уровне Pre-intermediate</span>

              <span className="text-slate-400">Родился</span>
              <span>Хабаровск</span>

              <span className="text-slate-400">Проживаю</span>
              <span>Москва</span>

              <span className="text-slate-400">Метро</span>
              <span>Бауманская</span>
            </div>


          </WhiteCard>

          <WhiteCard>
            <CardHeader className="flex justify-between mb-0 pb-0 border-b-0 ">
              <H4>Навыки</H4>
              <button className="text-slate-400 text-sm font-semibold">+Добавить</button>
            </CardHeader>
          </WhiteCard>

          <WhiteCard>
            <CardHeader className="flex justify-between mb-0 pb-0 border-b-0 ">
              <H4>Хочу научиться</H4>
              <button className="text-slate-400 text-sm font-semibold">+Добавить</button>
            </CardHeader>
          </WhiteCard>
        </div>
      </Card>


    </div>
  );
};
