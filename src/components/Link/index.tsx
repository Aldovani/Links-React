import { Link, Container } from "./styles";
const redes = [
  {
    title: "GitHub",
    icon: "/github.svg",
    url: "https://github.com/Aldovani",
    className: "github ",
  },
  {
    title: "Linkedin",
    icon: "/linkedin.svg",
    url: "https://www.linkedin.com/in/aldovani-henrique-da-costa-2a460b21a/",
    className: "linkedin ",
  },
  {
    title: "instagram",
    icon: "/instagram.svg",
    url: "https://www.instagram.com/aldovaniH/",
    className: "instagram ",
  },
  {
    title: "Twitter",
    icon: "/twitter.svg",
    url: "https://twitter.com/aldovaniH",
    className: "twitter ",
  },
  {
    title: "Portfolio",
    icon: "/smile.svg",
    url: "https://aldovani.vercel.app",
    className: "disable portfolio ",
  },
  {
    title: "Email",
    icon: "/mail.svg",
    url: "mailto:aldovaniHcosta@gmail.com",
    className: "email ",
  },
];

const Links = () => {
  return (
    <Container>
      {redes.map((att) => {
        return (
          <Link href={att.url} className={att.className} target={"_blank"}>
            <img title={`Icon ${att.title}`} src={att.icon} alt={att.title} />
            {att.title}
          </Link>
        );
      })}
    </Container>
  );
};

export { Links };
