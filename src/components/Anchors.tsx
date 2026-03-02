interface AnchorProps {
  description: string;
}

export default function Anchors({ description }: AnchorProps) {
  return (
    <>
      <a
        href="#"
        className=" relative group flex items-center text-2xxs gap-2s font-bold border-b  "
      >
        <span className="text-black z-10 ">→</span>
        <span className=" text-black z-10 ">{description}</span>
        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-[#E2F35E] z-0 group-hover:h-full"></span>
      </a>
    </>
  );
}
