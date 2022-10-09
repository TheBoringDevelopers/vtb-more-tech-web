type ReactionProps = { reaction: string; count: number };

export function Reaction({ reaction, count }: ReactionProps) {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <span>{reaction}</span>
      <span className="leading-130 text-[#919191] font-semibold">{count}</span>
    </div>
  );
}
