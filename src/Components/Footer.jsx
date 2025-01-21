import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <div className="flex gap-x-4 items-center">
      <img className="size-[54px]" src="/logo.png" alt="mumair" />
      <p className="text-[#ffffff] text-[28px] tracking-wide">
            <span className="text-bold text-[32px]">M</span>umair
      </p>
    </div>
  <nav>
    <div className="grid grid-flow-col gap-4">
    <nav className="grid grid-flow-col gap-4">
    <a className=" link-hover cursor-pointer">Home</a>
    <a className="link link-hover cursor-pointer">About Me</a>
    <a className="link link-hover cursor-pointer">Services</a>
    <a className="link link-hover cursor-pointer">Projects</a>
    <a className="link link-hover cursor-pointer">Testimonials</a>
    <a className="link link-hover cursor-pointer">Contact</a>
  </nav>
    </div>
  </nav>
  <aside className="grid grid-flow-col gap-4">
    <a>
        <FaFacebook className="size-[25px] text-[#FFFFFF]"/>
    </a>
    <a>  
         <FaTwitter className="size-[25px] text-[#FFFFFF]"/>
    </a>
    <a>
    <FaSquareInstagram className="size-[25px] text-[#FFFFFF]"/>
    </a>
    <a>
    <FaLinkedin className="size-[25px] text-[#FFFFFF]"/>
    </a>
  </aside>
</footer>
    </div>
  )
}
