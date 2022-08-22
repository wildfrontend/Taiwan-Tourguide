import React from "react";
import iconMap from "../assets/icons/map_1.svg";

export const ActivityCard: React.FC<{
  image: string;
  title: string;
  description: string;
  location: string;
}> = ({ image, title, description, location }) => {
  return (
    <div className="w-full min-h-[120px] shadow-md">
      <div className="grid grid-cols-[3fr,7fr] gap-4 p-2">
        <div>
          <img className="w-full h-full" src={image} alt="fire" />
        </div>
        <div className="grid grid-rows-[auto,21px]">
          <p className="text-[#0D0B0C]">{title}</p>
          <div className="flex items-center ">
            <span>
              <img className="w-4 h-5" src={iconMap} alt="map" />
            </span>
            <span className="pl-2">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card: React.FC<{ image: string;location:string }> = ({ image,location }) => {
  return (
    <div className="w-full min-h-[188px] shadow-md p-2">
      <div className="w-full min-h-[96px]">
        <img className="w-full" src={image} />
      </div>
      <div className="py-1 h-12 text-[14px]">正濱漁港懷舊碼頭</div>
      <div className="flex items-center ">
        <span>
          <img className="w-4 h-5" src={iconMap} alt="map" />
        </span>
        <span className="pl-1 text-[12px]">{location}</span>
      </div>
    </div>
  );
};
