import { Card, H2, H4, H5, TabContent, WhiteCard } from 'src/shared/ui';
import { BlueTabs } from 'src/shared/ui/tabs/Tabs';
import { BlueTab } from 'src/shared/ui/tabs/Tab';
import { Achievement } from 'src/shared/ui/achivment';

type Props = {

};
export const AchievementList = (props: Props) => {
  return (
    <Card>
      <H2 className="mb-1.5">Испытания</H2>
      <H4 className="mb-6 text-slate-400 font-[500]">Матрица компетенций</H4>

      <WhiteCard>
        <BlueTabs defaultValue="soft" trigger={
          <>
            <BlueTab value="soft">Soft Skills</BlueTab>
            <BlueTab value="hard">Hard Skills</BlueTab>
            <BlueTab value="manager">Manager Skills</BlueTab>
          </>
        }>
          <TabContent value="soft">
            <div className="grid grid-cols-4 gap-y-10 gap-x-4 pt-6">
              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Коммуникации </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Эффективная коммуникация</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Управление проектами</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Введение в проектное управление</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Oneboarding</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">
                  Необходимая информация в первые дни
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Охрана труда </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Основные принципы</p>
              </div>

              {/*2*/}
              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Oneboarding</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">О нас</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Коммуникации </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Деловая переписка</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Управление проектами</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Система Waterfall</p>
              </div>


              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Охрана труда </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Законодательство</p>
              </div>

              {/*end 2*/}
            </div>
          </TabContent>

          <TabContent value="hard">
            <div className="grid grid-cols-4 gap-y-10 gap-x-4 pt-6">
              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Коммуникации </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Эффективная коммуникация</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Управление проектами</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Введение в проектное управление</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Oneboarding</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">
                  Необходимая информация в первые дни
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Охрана труда </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Основные принципы</p>
              </div>

              {/*2*/}
              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Oneboarding</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">О нас</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Коммуникации </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Деловая переписка</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Управление проектами</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Система Waterfall</p>
              </div>


              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Охрана труда </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Законодательство</p>
              </div>

              {/*end 2*/}
            </div>
          </TabContent>

          <TabContent value="manager">
            <div className="grid grid-cols-4 gap-y-10 gap-x-4 pt-6">
              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Коммуникации </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Эффективная коммуникация</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Управление проектами</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Введение в проектное управление</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Oneboarding</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">
                  Необходимая информация в первые дни
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable />
                <H5 className="mb-1 mt-2 text-center">Охрана труда </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Основные принципы</p>
              </div>

              {/*2*/}
              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Oneboarding</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">О нас</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Коммуникации </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Деловая переписка</p>
              </div>

              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Управление проектами</H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Система Waterfall</p>
              </div>


              <div className="flex flex-col items-center">
                <Achievement src="/achiv/ach-1.png" badge="1/1" isAvailable={false} />
                <H5 className="mb-1 mt-2 text-center">Охрана труда </H5>
                <p className="text-center font-semibold text-sm  text-slate-400">Законодательство</p>
              </div>

              {/*end 2*/}
            </div>
          </TabContent>
        </BlueTabs>
      </WhiteCard>
    </Card>
  );
};
