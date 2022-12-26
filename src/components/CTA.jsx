import Button from "./Button";
import styles from "../style";

const CTA = () => (
  <div className={`bg-secondary w-full md:h-[261px] p-10 rounded-[50px] ${styles.flexCenter}`}>
    <div className="flex max-md:flex-col justify-evenly md:items-center items-start w-full">
      <div>
        <h1 className="text-white font-hanken font-extrabold md:text-[48px] text-[36px] max-md:leading-[40px] max-md:mb-5">Lets try our service now!</h1>
        <p className="text-white font-semibold sm:text-[24px] text-[18px] max-md:mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <Button />
    </div>
  </div>
);

export default CTA;
