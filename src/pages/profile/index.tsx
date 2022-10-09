import { AboutUser, MainInfo, NftEvents } from 'src/widgets';
import { Tab, TabContent, Tabs } from 'src/shared/ui';
import { AchievementList } from 'src/widgets/profile/AchievementList';
import { Link, useParams } from 'react-router-dom';

export const ProfilePage = () => {
  const { tab } = useParams();

  const tabValue = tab ?? 'profile';

  console.log(tabValue);
  return (
    <Tabs defaultValue="profile" value={tabValue}  trigger={
      <>
        <Tab value="profile">
          <Link to={'/profile'}>Профиль</Link>
        </Tab>
        <Tab value="achievements">
          <Link to={'/profile/achievements'}>Испытания</Link>
        </Tab>
        <Tab value="nft_event">
          <Link to={'/profile/nft_event'}>NFT События</Link>
        </Tab>
        <Tab value="my_shop">Мои товары</Tab>
        <Tab value="posts">Посты</Tab>
        <Tab value="food">Еда</Tab>
      </>
    }>
      <TabContent value="profile">
        <div className="grid gap-4 grid-cols-[450px,_1fr]">
          <div>
            <MainInfo />
          </div>
          <AboutUser />
        </div>
      </TabContent>
      <TabContent value="achievements">
        <AchievementList />
      </TabContent>

      <TabContent value="nft_event">
        <NftEvents />
      </TabContent>
    </Tabs>


  )
}
