interface NavItems {
  label: string;
}

interface HeaderProps {
  menuItem: NavItems[];
}

export default function Header({ menuItem }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#E2F35E] backdrop-blur-sm px-8">
      <div className="flex bg-gap-12 items-center justify-between ">
        <div>
          <img src="/assets/flower.png" className="w-10"></img>
        </div>
        <div className="flex items-center gap-10 ">
          {menuItem.map((item, index) => (
            <p key={index} className="relative text-black group ">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-950 transition-all group-hover:w-full"></span>
            </p>
          ))}
        </div>
        <div className="m-4">
          <h3 className="text-black font-extrabold">Logo</h3>
        </div>
      </div>
    </header>
  );
}
