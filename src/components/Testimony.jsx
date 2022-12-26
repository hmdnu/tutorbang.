import { testimonials } from "../constant";
import styles from "../style";
const Testimony = () => (
  <section id="testimonials">
    <div className={`flex-col ${styles.flexCenter}`}>
      <h1 className={`${styles.heading1} text-center max-md:leading-[40px] max-md:mb-4`}>What people are think about us?</h1>
      <h2 className="text-grey font-hanken font-semibold text-[24px]">100% real testimony</h2>
    </div>

    <div className="flex max-md:flex-col justify-evenly gap-5 items-center md:mt-10 mt-5">
      {testimonials.map((testi, index) => (
        <div
          className={`
        ${index === 0 ? "bg-[#ffa653]" : ""} 
        ${index === 1 ? "bg-[#FFCF53]" : ""} 
        ${index === 2 ? "bg-[#F7B39C]" : ""} 
        md:w-[380px] w-[330px] md:h-[335px] h-[330px] rounded-[50px] flex flex-col justify-between py-14 px-8 ${index === testimonials.length - 1 ? "mb-0" : "max-md:mb-5"} `}
        >
          <h1 className={`${styles.feedbackComment} `}>{testi.comment}</h1>
          <div className="flex items-center md:gap-5 gap-3 mt-5">
            <img src={testi.img} alt="" />
            <div>
              <h3 className={`font-hanken font-semibold text-primary md:text-[24px] text-[20px] mb-[-5px]`}>{testi.name}</h3>
              <p className="text-[#5C5C5C] md:text-[20px] text-[17px] font-hanken font-semibold">{testi.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimony;
