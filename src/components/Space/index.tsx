import Particles from "react-tsparticles";
import { ParticlesContainer } from "./styles";
export function Space() {
  return (
    <ParticlesContainer>
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
    </ParticlesContainer>
  );
}
