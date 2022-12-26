import styles from "./style";
import { Hero, About, Course, Testimony, Nav, CTA, Footer, Stats } from "./components";

const App = () => (
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
  </div>
);

export default App;
