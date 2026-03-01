interface AnchorProps {
  description: string;
}

export default function Anchors({ description }: AnchorProps) {
  return (
    <>
      <a
        href="#"
        className="flex items-center text-2xs gap-2s font-bold border-b-2 border-black pb-1 transition-all hover:gap-4"
      >
        <span className="text-black">→</span>
        <span className=" text-black">{description}</span>
      </a>
    </>
  );
}
