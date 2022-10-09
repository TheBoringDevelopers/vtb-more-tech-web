import { Tab, TabContent, Tabs } from 'src/shared/ui/tabs';
import { Card, Chip } from 'src/shared/ui';
import cn from 'classnames';
import { H2, H3, Link } from 'src/shared/ui/typography';
import { Like } from 'src/features/like';
import { NewsList } from 'src/widgets/news';
import { ArticleList } from 'src/widgets';
import { Collection } from 'src/widgets/collection';

const DigitalChip = ({ ruble, className }: any) => (
  <Chip className={cn(className, 'w-fit text-[12px] leading-[130%]')}>
    <span className="font-semibold text-[#2F2F2F] mr-[6px]">+{ruble}</span><span className="text-[#2F2F2F]">Digital Ruble</span>
  </Chip>
)

export const MainPage = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-9">Лента</h1>
      <Tabs defaultValue="articles" trigger={
        <>
          <Tab value="event">События</Tab>
          <Tab value="articles">Статьи</Tab>
          <Tab value="growth">Развитие</Tab>
          <Tab value="contest">Конкурсы</Tab>
          <Tab value="posts">Посты</Tab>
        </>
      }>
        <TabContent value="event">
          <div className="grid grid-cols-2 gap-4 mb-[32px]">
            <Card className="bg-contain bg-no-repeat bg-right-bottom bg-[url('/images/event.png')]">
              <div className="flex flex-col h-full">
                <H2 className="w-[200px] mb-[22px]">Семинар о<br /> коллективной<br /> работе</H2>
                <DigitalChip ruble={34} />
                <div className="mt-auto w-full flex items-center justify-between">
                  <Link to="/">
                    Подробнее
                  </Link>
                  <Like count={420} isLiked={false} />
                </div>
              </div>
            </Card>

            <Card className="bg-contain bg-no-repeat bg-right-bottom bg-[url('images/event-2.png')]">
              <div className="flex flex-col h-full">
                <H2 className="w-[225px] mb-[53px]">Порядок выполнения работ и внедрения программных продуктов</H2>
                <DigitalChip ruble={34} />
                <div className="mt-auto w-full flex items-center justify-between">
                  <Link to="/">
                    Подробнее
                  </Link>
                  <Like count={420} isLiked={false} />
                </div>
              </div>
            </Card>

            <div className="bg-[#0050FA] rounded-[10px] col-span-2 py-[25px] px-[42px] bg-contain bg-no-repeat bg-right-bottom bg-[url('images/event-3.png')]">
              <H3 className="text-white mb-[11px]">Система поощрения Digital Ruble</H3>
              <p className="text-white mb-[24px] w-[500px] opacity-70">Чем активнее вы участвуете, тем болшье вы получаете вознаграждений в виде Digital Ruble и NFT подарков.
                Вы можете копить электронные рубли, дарить их коллегам или тратить на понравившиеся товары в магазине</p>
              <Link color="white" to="/">Подробнее</Link>
            </div>
          </div>

          <NewsList />
        </TabContent>
        <TabContent value="articles">
          <div className="mb-6">
            <ArticleList />
          </div>


          <NewsList />
        </TabContent>
        <TabContent value="growth">
          <div className="grid grid-cols-2 gap-4 mb-[36px]">
            <Card className="bg-contain bg-no-repeat bg-right-bottom bg-[url('/images/event.png')]">
              <div className="flex flex-col h-full">
                <H2 className="w-[200px] mb-[22px]">Семинар о<br /> коллективной<br /> работе</H2>
                <DigitalChip ruble={34} />
                <div className="mt-auto w-full flex items-center justify-between">
                  <Link color="gray" to="/">
                    Подробнее
                  </Link>
                  <Like count={420} isLiked={false} />
                </div>
              </div>
            </Card>

            <Card className="bg-contain bg-no-repeat bg-right-bottom bg-[url('/images/event.png')]">
              <div className="flex flex-col h-full">
                <H2 className="w-[200px] mb-[22px]">Семинар о<br /> коллективной<br /> работе</H2>
                <DigitalChip ruble={34} />
                <div className="mt-auto w-full flex items-center justify-between">
                  <Link color="gray" to="/">
                    Подробнее
                  </Link>
                  <Like count={420} isLiked={false} />
                </div>
              </div>
            </Card>
          </div>

          <H3 className="mb-6">Подборка</H3>

          <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(166px,_1fr))] gap-[14px]">
            <Collection title="Все онлайн курсы" />
            <Collection title="Лекторий" />
            <Collection title="Дизайн системы" />
            <Collection title="Гибрид нашего времени" />
            <Collection title="Все треннинги" />
            <Collection title="Введение в IT" />
          </div>
        </TabContent>
        <TabContent value="contest">//Событие</TabContent>
        <TabContent value="posts">
          <div className="mb-6">
            // editor
          </div>


          <NewsList />
        </TabContent>

      </Tabs>
    </div>
  )
}
