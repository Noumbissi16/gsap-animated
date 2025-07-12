import gsap from "gsap";

const App = () => {
  gsap.from("#App", {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.to("#App", {
    opacity: 1,
    duration: 1,
    ease: "power4.out",
  });

  return (
    <div>
      <div className="text-lg text-green-900" id="App">
        App
        <p>jhkjhkjhjk</p>
        <h1>good morning</h1>
        <s>saosaoisa</s>
        <h2>dsskljdls</h2>
      </div>
    </div>
  );
};

export default App;
