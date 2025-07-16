import PropTypes from "prop-types";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          scrub: false,
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)",
        stagger: 0.02,
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

AnimatedTitle.propTypes = {
  title: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
};

export default AnimatedTitle;
