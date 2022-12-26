import styles from "./style";
import { Hero, About, Course, Testimony, Nav, CTA, Footer, Stats } from "./components";
import { arrowUp } from "./assets";
import { useState } from "react";

const App = () => {
  const [isArrowHidden, setIsArrowHidden] = useState(false);

  const setArrowHidden = () => {
    if (window.scrollY >= 30) {
      setIsArrowHidden(true);
    } else {
      setIsArrowHidden(false);
    }
  };
  window.addEventListener("scroll", setArrowHidden);

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter} border-b-[1px] border-[#C6C6C6] z-[1] `}>
        <div className="w-[95%]">
          <Nav />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-[100px]`}>
        <div className="w-[95%]">
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-[115px]`}>
        <div className="w-[95%]">
          <Stats />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-[150px]`}>
        <div className="w-[95%]">
          <About />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-[150px]`}>
        <div className="w-[95%]">
          <Course />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-[150px]`}>
        <div className="w-[95%]">
          <Testimony />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-[150px]`}>
        <div className="w-[95%]">
          <CTA />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-[150px] bg-primary`}>
        <div className="w-[95%]">
          <Footer />
        </div>
      </div>

      <div className={`bg-[#FF9557] rounded-full fixed bottom-5 right-5 p-2 cursor-pointer ${isArrowHidden ? "block" : "hidden"}`}>
        <img src={arrowUp} alt="arrow" className="h-[40px] w-[40px]" onClick={goTop} />
      </div>
    </div>
  );
};

export default App;
