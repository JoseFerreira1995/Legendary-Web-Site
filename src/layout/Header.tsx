interface NavItems {
  label: string;
}

interface HeaderProps {
  menuItem: NavItems[];
}

export default function Header({ menuItem }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="flex bg-yellow-200 gap-12 items-center justify-between ">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex items-center gap-10">
          {menuItem.map((item, index) => (
            <p key={index} className="text-black">
              {item.label}
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
