import styles from "../style";

const Button = () => (
  <button className={`bg-[#2B2E35] drop-shadow-[1px_5px_10px_rgba(0,0,0,0.3)] lg:w-[200px] w-[150px] lg:h-[70px] h-[60px] rounded-[10px] text-white font-hanken font-bold lg:text-[24px] text-[18px] ${styles.flexCenter} `}>
    Get Started
  </button>
);

export default Button;
