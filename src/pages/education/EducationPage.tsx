import { H3, Tab, TabContent, Tabs } from 'src/shared/ui';
import YouTube from 'react-youtube';

type EducationPageProps = {

};
export const EducationPage = (props: EducationPageProps) => {
  return (
    <Tabs defaultValue="library" trigger={
      <>
        <Tab value="library">Библиотека</Tab>
        <Tab value="video">Видео</Tab>
        <Tab value="seminars">Тренинги и семинары</Tab>
      </>
    }>
      <TabContent value="library">
        <img src="/dummy/books.svg" />
      </TabContent>
      <TabContent value="video">
        <div className="mb-4">
          <YouTube
            videoId={'dQw4w9WgXcQ'}
            opts={{
              width: '100%',
              height: '400px'
            }}
            title={'Дизайн'}
          />
        </div>

        <H3 className="mb-4">Graphic Design</H3>
        <p className="w-[280px] mb-6 text-slate-400 text-xs">Логотипы, брендинг, плакаты, дизайн изданий и упаковок, а также и многое другое.</p>

        <div className="grid grid-cols-4 gap-4">
          <img className="cursor-pointer" src="/dummy/video/1.svg" alt=""/>
          <img className="cursor-pointer" src="/dummy/video/2.svg" alt=""/>
          <img className="cursor-pointer" src="/dummy/video/3.svg" alt=""/>
          <img className="cursor-pointer" src="/dummy/video/4.svg" alt=""/>
        </div>
      </TabContent>

      <TabContent value="seminars">
        <div className="mb-4">
          <YouTube
            videoId={'dQw4w9WgXcQ'}
            opts={{
              width: '100%',
              height: '400px'
            }}
            title={'Дизайн'}
          />
        </div>

        <H3 className="mb-4">Graphic Design</H3>
        <p className="w-[280px] mb-6 text-slate-400 text-xs">Логотипы, брендинг, плакаты, дизайн изданий и упаковок, а также и многое другое.</p>

        <div className="grid grid-cols-4 gap-4">
          <img className="cursor-pointer" src="/dummy/podcast/1.png" alt=""/>
          <img className="cursor-pointer" src="/dummy/podcast/2.png" alt=""/>
          <img className="cursor-pointer" src="/dummy/podcast/3.png" alt=""/>
          <img className="cursor-pointer" src="/dummy/podcast/4.png" alt=""/>
        </div>
      </TabContent>
    </Tabs>
  );
};
