import Link from "next/link";

const MenuItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link className="px-5 py-5 text-white" href={link}>
      {title}
    </Link>
  );
};

export const Menu = () => {
  return (
    <div className="h-[110px] w-full bg-[#1a2026] flex items-end justify-center space-x-10 uppercase font-semibold">
      <MenuItem title="Главная" link="/" />
      <MenuItem title="о нас" link="/about" />
      <MenuItem title="щенки" link="/puppies" />
      <MenuItem title="собаки" link="/dogs" />
      <MenuItem title="нашли дом" link="/home" />
      <MenuItem title="поддержка" link="/support" />
      <MenuItem title="контакты" link="/contact" />
    </div>
  );
};
