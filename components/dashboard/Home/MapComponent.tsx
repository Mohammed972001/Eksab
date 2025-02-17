"use client";
import { useState } from "react";
import FilterButton from "@/components/SharedComponents/FilterButton";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

interface GeoGeography {
  properties: {
    name: string;
  };
}

const geoUrl = "/sa.json";

const MapComponent = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  
  const getColor = (geo: GeoGeography) => {
    const regionName = geo.properties.name;
    
    if (regionName === selectedCity) return "#FF5A00"; 
    if (regionName === hoveredCity) return "#FF8C1A"; 
    return "#FF5A00"; 
  };


const legendData = [
  { color: "#FFE5B4", label: "0 - 1,000" },
  { color: "#FFC680", label: "1,000 - 10,000," },
  { color: "#FFA64D", label: "10,000 - 100,000" },
  { color: "#FF8C1A", label: "100,000 - 100,000,000" },
  { color: "#FF5A00", label: "1000,000 - 200,000" },
];


  return (
    <div
      className="border rounded-lg shadow w-full  h-[600px] relative"

    >
      <div className=" flex">
        <div className="w-[48%] m-6 flex flex-col ">

          <FilterButton
            buttonText="كل المسابقات"
            continerclassname="justify-between w-[400px]"
          />

          <div className="mt-56">
            <h2 className="text-4xl font-bold">مدينة الرياض</h2>
            <div className="flex items-center mt-5 gap-4">
              <svg
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8.5C0 4.08172 3.58172 0.5 8 0.5H52C56.4183 0.5 60 4.08172 60 8.5V52.5C60 56.9183 56.4183 60.5 52 60.5H8C3.58172 60.5 0 56.9183 0 52.5V8.5Z"
                  fill="#D9E1F9"
                />
                <path
                  d="M18 41.1667C21.1144 37.8634 25.3427 35.8333 30 35.8333C34.6573 35.8333 38.8856 37.8634 42 41.1667M36 24.5C36 27.8137 33.3137 30.5 30 30.5C26.6863 30.5 24 27.8137 24 24.5C24 21.1863 26.6863 18.5 30 18.5C33.3137 18.5 36 21.1863 36 24.5Z"
                  stroke="#0D152D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h1 className="text-lg mt">عدد المشاركات</h1>
                <div className="flex text-4xl items-center gap-2 mt-1">
                  <span className="w-4 h-4 bg-[#FF5A00] rounded-md"></span>
                  <p className="font-bold ml-2">145,508,367</p>
                  <p className="text-xl"> (جيدة جدا) </p>
                </div>
              </div>
            </div>
          </div>

     
        </div>

        <div className="w[516px] h-[416px] mt-40 ">
        <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [45, 24],
          scale: 1900,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cityName = (geo as unknown as GeoGeography).properties.name;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getColor({ properties: { name: cityName } })}
                  stroke={cityName === selectedCity ? "#33FF57" : "#FFF"}
                  strokeWidth={1.5}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  onClick={() => setSelectedCity(cityName)}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#EEE", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>


       

        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex gap-4 p-4 rounded-t-md">
          {legendData.map((item) => (
            <div key={item.label} className="flex items-center gap-1">
              <span
                className="inline-block w-2 h-2 rounded-sm"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
    </div>
  );
};

export default MapComponent;
