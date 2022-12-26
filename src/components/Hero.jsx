import styles from "../style";
import { imgHero } from "../assets";

import Button from "./Button";

const Hero = () => (
  <section id="home">
    <div className="flex justify-between items-center lg:flex-row flex-col">
      <div>
        <h2 className={`w-fit bg-secondary font-hanken font-bold lg:text-[24px] text-[18px] px-6 py-1 rounded-[10px] text-white`}>40% Discount for new member</h2>
        <h1 className={`${styles.headingHero} lg:leading-[80px] leading-[70px] py-2`}>
          Learn new skill for <br />
          better future.
        </h1>
        <p className={`${styles.paragraph} `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Maxime incidunt ullam accusamus tempore aliquid itaque <br />
          sed quisquam omnis aliquam odio!
        </p>
        <div className="mt-10 flex gap-5">
          <Button />
          <button className="border-[#2B2E35] border-[3px] lg:w-[200px] w-[150px] lg:h-[70px] h-[60px] rounded-[10px] text-primary font-hanken font-extrabold lg:text-[24px] text-[18px] drop-shadow-[1px_5px_10px_rgba(0,0,0,0.3)]">
            Learn More
          </button>
        </div>
      </div>
      <div className="lg:mt-0 mt-10">
        <img src={imgHero} alt="image" />
      </div>
    </div>
  </section>
);

export default Hero;
