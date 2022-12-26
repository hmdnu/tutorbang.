import styles from "../style";
import { stats } from "../constant";
const Stats = () => (
  <section className={`${styles.flexCenter} bg-secondary rounded-[50px] md:h-[195px] h-[600px] py-5`}>
    <div className="flex md:flex-row flex-col max-md:gap-5">
      {stats.map((stat, index) => {
        return (
          <div key={stat.id} className={`${index === stats.length - 1 ? "border-none" : "md:border-r-[3px] max-md:border-b-[3px]"} md:px-20 px-0 md:py-0 py-5`}>
            <div className={`text-center`}>
              <p className={`font-hanken font-extrabold text-white max-md:text-[36px] text-[40px] mb-[-10px]`}>{stat.value}</p>
            </div>
            <div className="text-center">
              <p className={`font-hanken font-semibold text-white  max-md:text-[20px] text-[24px]`}>{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Stats;
