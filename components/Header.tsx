import Link from "next/link";
import style from "./Header.module.scss";
import type { Url } from "next/dist/shared/lib/router/router";
import clsx from "clsx";
import { CSSProperties, useEffect, useState } from "react";
import { useRouter } from "next/router";

const mapNavbar: IButton[] = [
  { text: "首页", link: "/" },
  //   { text: "程序", link: "/code" },
  { text: "文艺", link: "/poem" },
  //   { text: "设计", link: "/design" },
  { text: "关于我", link: "/me" },
];

export default function Header({ Poem }: { Poem?: boolean }) {
  const [curNav, setCurNav] = useState<Url>("/");
  const location = useRouter();

  const NavbarButton = ({ text, link }: IButton) => {
    useEffect(() => {
      if (location.route === link) {
        setCurNav(link);
      }
    });

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
      <div
        className={clsx({
          [style.leftPanel]: true,
          [style.bottomLine]: Poem,
        })}
      >
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
