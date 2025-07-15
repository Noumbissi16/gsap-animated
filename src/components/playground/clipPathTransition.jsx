import { useGSAP } from "@gsap/react";
import "../../css/clipPathTransition.css";
import gsap from "gsap";
import { useRef } from "react";

const ClipPathTransition = () => {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.to(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.5,
      ease: "power1.inOut",
    });
    tl.to(
      containerRef.current,
      {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 0.5,
        ease: "power1.inOut",
      },
      "+=0.5"
    );
    tl.to(".containerg2 h1", {
      color: "yellow",
    });
    tl.to(".containerg2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.5,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="relative w-full h-screen" id="clipPathTransition">
      <div className="containerg absolute" ref={containerRef}>
        <div className="content absolute z-10 grid place-items-center h-full w-full text-white">
          <h1 className="text-5xl font-bold">Testing my own out</h1>
        </div>
        <div className="img"></div>
      </div>
      <div className="containerg2 absolute z-[-1]" ref={containerRef2}>
        <div className="content absolute z-0 grid place-items-center h-full w-full text-white">
          <h1 className="text-5xl font-bold">Testing my own out</h1>
        </div>
        <div className="img"></div>
      </div>
    </div>
  );
};

export default ClipPathTransition;
