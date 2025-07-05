import reactSvg from "../assets/react.svg";
import typescriptSvg from "../assets/typescript.svg";
import tailwindcssSvg from "../assets/tailwindcss.svg";
import prettierSvg from "../assets/prettier-1.svg";
import viteSvg from "../assets/vitejs.svg";

export default function WelcomeComponent() {
  const notes: string[] = [
    "check index.css, some starter styles are applied",
    "unused components / vars will show warnings not errors",
  ];
  const iconLinks: { href: string; imgSrc: string; altText: string }[] = [
    {
      href: "https://vite.dev/guide/#scaffolding-your-first-vite-project",
      imgSrc: viteSvg,
      altText: "vite-icon",
    },
    {
      href: "https://react.dev/learn",
      imgSrc: reactSvg,
      altText: "react-icon",
    },
    {
      href: "https://www.typescriptlang.org/docs/handbook/jsx.html",
      imgSrc: typescriptSvg,
      altText: "typescript-icon",
    },
    {
      href: "https://tailwindcss.com/docs/installation/using-vite",
      imgSrc: tailwindcssSvg,
      altText: "tailwind-icon",
    },
    {
      href: "https://tailwindcss.com/blog/automatic-class-sorting-with-prettier",
      imgSrc: prettierSvg,
      altText: "prettier-icon",
    },
  ];

  return (
    <div className="flex min-h-screen justify-center bg-gray-900">
      <div className="flex translate-y-[-10%] flex-col items-center justify-center">
        <h1 className="p-4 text-5xl font-bold text-white">Fresh Project</h1>
        <h2 className="p-4 text-2xl text-blue-400">
          Vite React.Ts 19 + TailwindCss v4 (& Prettier)
        </h2>
        <div className="flex items-center gap-5">
          <IconsLinks iconLinks={iconLinks} />
        </div>
        <ul className="absolute bottom-0 w-fit justify-center overflow-auto p-2 px-4">
          {notes.map((note, i) => (
            <li
              key={i}
              className={`w-max px-2 text-sm whitespace-nowrap text-gray-500`}
            >
              - {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface IconLinkProps {
  href: string;
  imgSrc: string;
  altText: string;
}

interface IconsLinksProps {
  iconLinks: IconLinkProps[];
}

function IconsLinks({ iconLinks }: IconsLinksProps) {
  return iconLinks.map((icon: IconLinkProps, i: number) => (
    <IconLink
      key={i}
      href={icon.href}
      imgSrc={icon.imgSrc}
      altText={icon.altText}
    />
  ));
}

function IconLink({ href, imgSrc, altText }: IconLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={altText} className="w-[50px]" />
    </a>
  );
}
