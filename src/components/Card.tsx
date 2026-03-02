import Anchors from "./Anchors";

interface CardProps {
  imageSrc?: string;
  title: string;
}

export default function Card({ imageSrc, title }: CardProps) {
  return (
    <div className="group cursor-pointer flex flex-col items-center  rounded-[40px] p-12 w-full z-50 max-w-100 transition-all duration-300 hover:shadow-xl">
      {imageSrc ? (
        <div className="w-full aspect-square flex items-center justify-center mb-12">
          <img
            src={imageSrc}
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 hover:rotate-2"
          />
        </div>
      ) : (
        <div className="w-full aspect-square flex items-center justify-center mb-12"></div>
      )}

      <div className="text-center flex flex-col items-center">
        <h3 className="text-[42px] font-black leading-[0.9] tracking-tighter mb-8 font-nohemi whitespace-pre-line">
          {title}
        </h3>
        <Anchors description="Learn More"></Anchors>
      </div>
    </div>
  );
}
