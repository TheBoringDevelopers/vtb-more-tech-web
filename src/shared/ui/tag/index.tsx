type TagProps = {
  name: string;
};

export function Tag({ name }: TagProps) {
  return (
    <div
      className="rounded-[6px] border border-[#ADADAD] py-[7px] px-[13px] font-[13px] font-semibold text-[#ADADAD] leading-130">{name}</div>
  );
}
