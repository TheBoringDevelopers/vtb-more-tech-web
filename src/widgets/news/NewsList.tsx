import { UserChip } from 'src/entities/user';
import { H2 } from 'src/shared/ui/typography';
import { Button, Reaction, SmallChip, Tag } from 'src/shared/ui';
import { BookmarkIcon, CommentIcon, HeartSolidIcon, MenuIcon } from 'src/shared/icons';


export const News = () => {
  return (
    <div className="py-[40px] px-[50px] bg-[#F9F9F9] rounded-[10px]">
      {/*Header*/}
      <div className="flex justify-between border-b border-b-[#DEDEDE] pb-[25px] mb-[30px]">
        <UserChip name="Андрей Леонидович!" time={23}/>
        <div className="flex gap-4 items-start">
          <Button>Интересно!</Button>
          <BookmarkIcon />
          <MenuIcon />
        </div>
      </div>
      {/*End Header*/}

      {/*Body*/}
      <div className="mb-4">
        <H2 className="mb-[14px]">ВТБ проведет хакатон для ИТ-специалистов с призовым фондом более 1 млн рублей</H2>
        <p className="mb-[24px]">
          ВТБ открыл прием заявок от молодых ИТ-специалистов на участие в онлайн-хакатоне ВТБ More.Tech,
          регистрация продлится до 3 октября включительно. Четвертый ежегодный хакатон состоится 7-9 октября.
        </p>

        <div className="flex flex-wrap gap-[10px] mb-[38px]">
          <Tag name="Удаленка"/>
          <Tag name="Офис"/>
          <Tag name="Фото"/>
        </div>

        <div className="grid grid-cols-3 gap-[14px]">
          {
            Array
              .from({ length: 3 }, (i, idx) => idx + 1)
              .map((idx) => <img key={idx} className="" src={`images/post-${idx}.png`} alt="post"/>)
          }
        </div>

      </div>
      {/*End Body*/}

      {/*Footer*/}
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-4">
          <Reaction reaction="👍" count={12} />
          <Reaction reaction="😃" count={12} />
          <Reaction reaction="😍" count={12} />
          <Reaction reaction="😱" count={12} />
        </div>
        <div className="flex gap-3">
          <SmallChip className="bg-[#F5F5F5]">
            <CommentIcon width={16} height={16} />
            <span className="text-[13px] leading-[110%] font-bold">235</span>
          </SmallChip>

          <SmallChip className="bg-[#F5F5F5]">
            <HeartSolidIcon width={16} height={16} />
            <span className="text-[13px] leading-[110%] font-bold">235</span>
          </SmallChip>
        </div>
      </div>
      {/*End Footer*/}

    </div>
  )
}

export const NewsList = () => {
  return (
    <div className="flex flex-col gap-10">
      <News/>
      <News/>
    </div>
  )
}
