import styles from "../style";
import { navFooter, socialMedia } from "../constant";

const Footer = () => (
  <section className={`md:h-[385px] h-fit max-md:py-9 flex justify-evenly items-center max-md:flex-col-reverse`}>
    <div className="text-white max-md:mt-5">
      <h1 className="font-hanken font-bold text-[36px] mb-2">tutorbang.</h1>
      <p className="font-hanken font-regular text-[20px]">
        tutorbang@gmail.com
        <br /> +6285142555814
      </p>
      <div className="flex gap-5 mt-5">
        {socialMedia.map((social) => (
          <div key={social.id}>
            <img src={social.icon} alt="media" className="h-[36px] w-[36px]" />
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-white mt-10 py-2">
        <p className="font-hanken font-light md:text-[18px] text-[15px]">created by hmdnubaidllah @Allrights deserved.</p>
      </div>
    </div>
    <div className="max-md:w-full">
      <div className="flex md:gap-20 gap-5 max-md:flex-row flex-wrap max-md:justify-between">
        {navFooter.map((nav) => (
          <div key={nav.id} className="max-md:w-[40%]">
            <p className="text-white font-poppins font-semibold md:text-[20px] text-[18px]">{nav.name}</p>
            <ul className="mt-1">
              {nav.links.map((link, index) => (
                <li key={link.id} className={`font-hanken text-grey font-regular md:text-[20px] text-[18px] ${index === nav.links.length - 1 ? "pb-0" : "pb-1"}`}>
                  <a href={link.id} rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
