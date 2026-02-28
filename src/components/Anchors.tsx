interface AnchorProps {
  description: string;
}

export default function Anchors({ description }: AnchorProps) {
  return (
    <>
      <a
        href="#"
        className="flex items-center gap-2 text-2xs font-bold border-b-2 border-black pb-1 transition-all hover:gap-4"
      >
        <span>→</span>
        <span className="uppercase tracking-tight">{description}</span>
      </a>
    </>
  );
}
