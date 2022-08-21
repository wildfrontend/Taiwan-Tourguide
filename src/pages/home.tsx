import React from "react";
import iconLogo from "../assets/icons/logo.svg";
import iconMap from "../assets/icons/map_m.svg";
import iconH01 from "../assets/icons/title_1.svg";
import demoSlider01 from "../assets/demo/taipai.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PageHome: React.FC = () => {
  return (
    <>
      {/* Mobile */}
      <header className="p-4 pb-6 shadow-lg">
        <div className="w-full flex justify-center">
          <img className="h-[52px] w-[90px]" src={iconLogo} alt="logo" />
        </div>
        <div className="h-3 w-full "></div>
        <div className="shadow-md rounded-md">
          <ul className="flex justify-evenly">
            <li className="py-2 text-[#FF1D6C]">景點活動</li>
            <li className="py-2 text-[#ACACAC]">美食住宿</li>
            <li className="py-2 text-[#ACACAC]">景點交通</li>
          </ul>
        </div>
        <div className="h-3 w-full "></div>
        <div className="grid grid-cols-[1fr,1fr,40px] gap-2">
          <select className="select">
            <option>類別</option>
          </select>
          <select className="select">
            <option>不分縣市</option>
          </select>
          <button className="bg-[#FF1D6C] rounded-md text-white text-sm">
            送出
          </button>
        </div>
      </header>
      {/* Content */}
      <div className="px-4">
        <div className="h-12 w-full"></div>
        <h2 className="text-[#0D0B0C] text-sm flex items-center my-2">
          <span>
            <img className="w-6 h-4" src={iconH01} alt="iconh1" />
          </span>
          <span className="pl-1">熱門城市</span>
        </h2>
        <div>
          <Swiper slidesPerView={2}>
            <SwiperSlide>
              <div className="shadow-md p-2 bg-white w-[160px] h-[192px]">
                <div className="relative">
                  <img className="w-full" src={demoSlider01} alt="01" />
                  <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center ">
                      <img className="w-8 h-12" src={iconMap} />
                      <span className="text-white text-sm">台北市</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shadow-md p-2 bg-white w-[160px] h-[192px]">
                <div className="relative">
                  <img className="w-full" src={demoSlider01} alt="01" />
                  <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center ">
                      <img className="w-8 h-12" src={iconMap} />
                      <span className="text-white text-sm">台北市</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shadow-md p-2 bg-white w-[160px] h-[192px]">
                <div className="relative">
                  <img className="w-full" src={demoSlider01} alt="01" />
                  <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center ">
                      <img className="w-8 h-12" src={iconMap} />
                      <span className="text-white text-sm">台北市</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PageHome;
