export const UserChip = ({ time, name, img = 'images/grandfather.png' }: any) => {
  return (
    <div className="grid grid-flow-col gap-x-[13px] gap-y-[3px] grid-auto-rows">
      <img className="row-span-2 self-center" src={img} alt="grandfather"/>
      <span className="col-span-2 font-bold font-[18px] text-[#061134] leading-130">{name}</span>
      <span className="col-span-2 text-black/20 font-[500] font-[14px] leading-130">{time} минуты назад</span>
    </div>
  )
}
