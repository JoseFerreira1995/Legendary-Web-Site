interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <button
      className="
      
  relative p-10 flex items-center justify-center
  [mask-image:url('/assets/Cloud.png')] 
  mask-contain 
  mask-no-repeat 
  mask-center
  transition-all duration-300 ease-out
  hover:scale-105 active:scale-95
  hover:brightness-125
  drop-shadow-xl
  
"
    >
      <span className=" px-16 py-10 text-[#d9ff00] font-bold text-3xl  tracking-tighter">
        {title}
      </span>
    </button>
  );
}
