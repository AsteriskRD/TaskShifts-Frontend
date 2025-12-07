import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


const SideBarNav = ({ link }) => {
  return (
    <Link  href={link} className={` ${poppins.className} text-[#5C5C66] font-medium flex gap-5 items-center  `} >
      <div>{link.icons}</div>
      <h1>{link.name}</h1>
    </Link>
  );
};

export default SideBarNav;
