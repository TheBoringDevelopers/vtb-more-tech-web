type Props = {
  title: string
};

export const Collection = ({ title }: Props) => {
  return (
    <div className="rounded-[10px] px-[16px] py-[20px] pb-[126px] bg-contain bg-no-repeat bg-right-bottom border border-[#EAEAEA] rounded-[10px]" style={{ backgroundImage: 'url(images/collection.png)' }}>
      <span className="font-bold leading-130 block w-[100px]">{title}</span>
    </div>
  );
};
