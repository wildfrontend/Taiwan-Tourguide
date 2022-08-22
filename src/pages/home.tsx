import React from "react";
import iconLogo from "../assets/icons/logo.svg";
import iconMapW from "../assets/icons/map_m.svg";
import iconH01 from "../assets/icons/title_1.svg";
import iconH02 from "../assets/icons/title_2.svg";

import demoSlider01 from "../assets/demo/taipai.png";
import demoFireFollwer from "../assets/demo/firefollwer.png";
import demoFood from "../assets/demo/food.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ActivityCard, Card } from "../components/card";
import { Title } from "../components/header";
import { Footer } from "../components/layout";

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
        <Title icon={iconH01} title="熱門城市" />

        <div>
          <Swiper slidesPerView={2}>
            {[1, 2, 3].map((_, i) => {
              return (
                <SwiperSlide>
                  <div className="shadow-md p-2 bg-white w-[160px] h-[192px]">
                    <div className="relative">
                      <img className="w-full" src={demoSlider01} alt="01" />
                      <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center ">
                          <img className="w-8 h-12" src={iconMapW} />
                          <span className="text-white text-sm">台北市</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="h-4 w-full"></div>
        <Title icon={iconH01} title="熱門活動" />
        <div>
          {[1, 2, 3].map((_, i) => {
            return (
              <ActivityCard
                image={demoFireFollwer}
                title="合歡山國際暗空公園-星空清境跨年活動"
                description="南投縣與各單位多年於合歡山舉辦清境高山跨年晚會活動，今年將活動主軸由傳統跨年晚會轉化成為台灣高山星空遊程之體驗活動，以剛通過美國IDA認證的華語區第一座國際暗空公園作為宣傳主題，在擁有東南的的..."
                location="南投縣 仁愛鄉"
              />
            );
          })}
        </div>
        <div className="h-4 w-full"></div>
        <Title icon={iconH02} title="熱門餐飲" />
        <div className="grid grid-cols-2">
          {[1, 2, 3, 4].map((_, i) => {
            return <Card image={demoFood} location="基隆市中正區"/>;
          })}
        </div>
      </div>
      <div className="h-4 w-full"></div>
      <Footer/>
    </>
  );
};

export default PageHome;
