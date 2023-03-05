import Link from "next/link";
import style from "./Header.module.scss";
import type { Url } from "next/dist/shared/lib/router/router";
import clsx from "clsx";
import { CSSProperties, useState } from "react";

const mapNavbar: IButton[] = [
  { text: "首页", link: "/" },
  { text: "程序", link: "/code" },
  { text: "文艺", link: "/poem" },
  { text: "设计", link: "/design" },
  { text: "关于我", link: "/me" },
];

export default function Header() {
  const [curNav, setCurNav] = useState<Url>("/");

  const NavbarButton = ({ text, link }: IButton) => {
    return (
      <div
        className={clsx({
          [style.button_wrapper]: true,
          [style.active]: curNav === link,
        })}
        onClick={() => {
          setCurNav(link);
        }}
      >
        <Link className={style.text} href={link}>
          {text}
        </Link>
        <div className={style.bottom_line} />
      </div>
    );
  };

  return (
    <div className={style.headerWrapper}>
      <div className={style.leftPanel}>
        {mapNavbar.map((item, index) => {
          return (
            <NavbarButton
              key={index}
              text={item.text}
              link={item.link}
            ></NavbarButton>
          );
        })}
      </div>
      <div className={style.rightPanel}>
        <div className={style.icon}>W</div>
      </div>
    </div>
  );
}

interface IButton {
  text: String;
  link: Url;
}
