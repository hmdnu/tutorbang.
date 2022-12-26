import styles from "../style";
import { imgAbout } from "../assets";
import Button from "./Button";

const About = () => (
  <section id="about-us">
    <div className="flex items-center gap-5 max-md:flex-col">
      <img src={imgAbout} alt="image" />
      <div>
        <h1 className={`${styles.heading1} md:leading-[70px] leading-[40px] mb-5`}>
          The best online course, <br className="md:block hidden" /> we will help you to achieve <br /> your dreams.
        </h1>
        <p className={`${styles.paragraph} md:mb-10 mb-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br className="md:block hidden" /> Nunc vulputate libero et velit interdum, ac aliquet odio
          <br className="md:block hidden" /> mattis. Class aptent taciti sociosqu ad litora torquent per
          <br className="md:block hidden" /> conubia nostra, per inceptos himenaeos.
        </p>
        <Button />
      </div>
    </div>
  </section>
);

export default About;
