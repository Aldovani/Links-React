import Particles from "react-tsparticles";
import { Container, ParticulesContainer } from "./styles";
import { Links } from "../../components/Link";
import { Header } from "../../components/Header";
import Circle from "../../components/Circle";
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

function App() {
  return (
    <>
      <Header />

      <Container>
        {redes.map((rede, key) => (
          <Links {...rede} key={key} />
        ))}
      </Container>
      <Particless />
      <Circle />
    </>
  );
}

function Particless() {
  return (
    <ParticulesContainer>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 120,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              // onHover: {
              //   enable: true,
              //   mode: "bubble",
              // },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 50,
                duration: 5,
                opacity: 0.2,
                size: 45,
              },
              push: {
                quantity: 10,
              },
              repulse: {
                distance: 100,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },

            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              limit: 200,
              value: 100,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
    </ParticulesContainer>
  );
}

export default App;
