
export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Home</li></a>
        <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">About Me</li></a>
        <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Services</li></a>
        <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Projects</li></a>
        <a href=""> <li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Testimonials</li></a>
        <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Contact</li></a>
      </ul>
    </div>
    <div className="flex gap-x-4 items-center">
      <img className="size-[54px]" src="/logo.png" alt="mumair" />
      <p className="text-[#ffffff] text-[28px] tracking-wide">
            <span className="text-bold text-[32px]">M</span>umair
      </p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Home</li></a>
        <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">About Me</li></a>
        <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Services</li></a>
        <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Projects</li></a>
        <a href=""> <li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Testimonials</li></a>
        <a href=""><li className="ml-5 cursor-pointer text-[#FFFFFF] text-[16px] hover:text-orange-500">Contact</li></a>
    </ul>
  </div>
  <div className="ml-8 bg-[#FD6F00] p-1 rounded-sm">
    <a className="text-[#FFFFFF] ">Download CV</a>
  </div>
</div>
    </div>
  )
}
