import { imgCourse } from "../assets";
import styles from "../style";

const Course = () => (
  <section id="courses">
    <div className={`${styles.flexCenter} max-md:flex-col`}>
      <div className="max-md:mb-5">
        <h1 className={`${styles.heading1} md:leading-[70px] leading-[40px] mb-5`}>
          You can find many of <br className="md:block hidden" /> trendy nowadays skills.
        </h1>
        <p className={`${styles.paragraph}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. <br className="sm:block hidden" /> Class aptent taciti sociosqu ad litora torquent per conubia <br />
          nostra, per inceptos himenaeos.
        </p>
      </div>
      <img src={imgCourse} alt="write" />
    </div>
  </section>
);

export default Course;
