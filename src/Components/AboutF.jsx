export default function AboutF() {
  return (
    <>
    <div className="m-10">
      <div className="grid grid-cols-1 items-center lg:flex lg:justify-between lg:items-center">
            <section>
                  <p className="text-[#FFFFFF] text-[15px]">Hi I am</p>
                  <p className="text-[#FD6F00] text-[19px]">Muhammad Umair</p>
                  <h1 className="text-[62px] text-[#FFFFFF] font-bold -mt-[18px] -mb-[22px]">UI & UX</h1>
                  <h1 className="text-[62px] text-[#FFFFFF] font-bold ml- lg:ml-[100px] [140px]">Designer</h1>
                  <p className="text-[#FFFFFF] mt-1 mb-3">
                  Lorem ipsum dolor sit amet consectetur. Tristique amet sed  <br /> massa nibh lectus netus in. Aliquet donec morbi convallis <br /> pretium. Turpis tempus pharetra
                  </p>
                  <div className=" bg-[#FD6F00] p-1 rounded-sm w-[75px] cursor-pointer">
    <a className="text-[#FFFFFF]">Hire Me</a>
  </div>
            </section>
            <section>
                  <img className="size-[350px]" src="/photo-1.png" alt="photo.." />
                  <img className="absolute top-[540px] lg:top-[180px] h-[60px] w-[300px]" src="/rectangle.png" alt="" />
            </section>
      </div>
      </div>
    </>
  )
}
