import {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import { gsap } from "gsap";

import { Container } from "./styles";


const Circlemy = forwardRef(({ size, delay }: any, ref) => {
  const el = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x: number, y: number) {
          if (el != null) {
            gsap.to(el.current, { x, y, delay });
          }
        },
      };
    },
    [delay]
  );

  return <Container className={`circle ${size}`} ref={el}></Container>;
});

export default function Circle() {
  const circleRefs = useRef([]);
  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    
    circleRefs.current.forEach((ref: any) =>
      // eslint-disable-next-line no-restricted-globals
      ref.moveTo(innerWidth / 2, innerHeight / 2)
    );

    const onMove = ({ clientX, clientY }: any) => {
      circleRefs.current.forEach((ref: any) => ref.moveTo(clientX, clientY));
    };
    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

 
  const addCircleRef = (ref: null) => {
    if (ref != null) {
      circleRefs.current.push(ref);
    }
  };

  return <Circlemy size="sm" ref={addCircleRef} delay={0} />;
}
