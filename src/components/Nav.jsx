import styles from "../style";
import { menu } from "../assets";
import { navLinks } from "../constant";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center sm:py-6 py-3 z-10 ">
      <h1 className="font-hanken sm:text-[35px] text-[28px] font-extrabold text-primary">tutorbang.</h1>
      <ul className={`list-none lg:flex hidden gap-6 text-[18px] ${styles.poppinsMedium}text-grey`}>
        {navLinks.map((link) => (
          <li className="hover:text-primary cursor-pointer transition-all duration-300 liHover relative " key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="lg:flex hidden">
        <button className={`mr-5 border-[2px] border-primary w-[110px] h-[50px] text-[18px] rounded-[10px] ${styles.poppinsMedium} text-primary active:translate-y-[-4px] transition-all duration-100`}>Log in</button>
        <button className={`bg-[#FF9557] w-[110px] h-[50px] text-[18px] rounded-[10px] ${styles.poppinsMedium} text-white active:translate-y-[-4px] transition-all duration-100`}>Sign up</button>
      </div>
      {/* hamburg menu */}
      <div className="px-3 py-2 rounded-[5px] lg:hidden block">
        <img src={menu} alt="menu" className="sm:w-[35px] sm:h-[35px] w-[30px] h-[30px]" onClick={() => setToggle(!toggle)} />
      </div>

      {/* mobile/tablet   */}
      <div className={`${styles.flexStart} lg:hidden flex-1 flex-col py-5 sm:px-24 px-12 h-fit bg-primary absolute ${!toggle ? "left-[-1500px]" : "left-[0]"} sm:top-[100px] top-[70px] w-[100%] transition-all duration-500 ease-in-out`}>
        <ul className={`list-none flex flex-col gap-7 text-[18px] ${styles.poppinsMedium} text-white mb-3`}>
          {navLinks.map((link) => (
            <li className="cursor-pointer transition-all duration-300 liHover relative " key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex flex-row gap-5 items-center bottom-0">
          <button className={`border-[2px] border-white w-[100px] h-[50px] text-[18px] rounded-[10px] ${styles.poppinsMedium} text-white`}>Log in</button>
          <button className={`bg-[#FF9557] w-[100px] h-[50px] text-[18px] rounded-[10px] ${styles.poppinsMedium} text-white`}>Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
