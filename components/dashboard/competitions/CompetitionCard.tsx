import React from 'react';
import Image from 'next/image';
import { SlLocationPin } from 'react-icons/sl';

// Define the interface for the props
interface CompetitionCardProps {
  status: string;
  statusColor: string;
  title: string;
  location: string;
  competitors: number;
  timeLeft: number;
  dateRange: string;
  imageSrc: string;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  status,
  statusColor,
  title,
  location,
  competitors,
  timeLeft,
  dateRange,
  imageSrc,
}) => {
  return (
    <div className="flex gap-4 items-center p-4 rounded-lg bg-white shadow-card-shadow">
      <div className="flex justify-center items-center border-[2px] border-[#EBEDF0] rounded-2xl w-[168px] h-[176px]">
        <Image src={imageSrc} alt="placeholder" width={50} height={50} />
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        {/* card header */}
        <div className="flex flex-col justify-start items-start">
          {/* status */}
          <div
            className={`rounded-lg px-2 py-1 flex justify-center items-center w-fit text-nowrap ${statusColor}`}
          >
            <p className="text-sm text-[#331C0D]">{status}</p>
          </div>
          {/* card title */}
          <h3 className="text-base font-semibold text-shadeBlack max-w-[324px]">
            {title}
          </h3>
          {/* location */}
          <div className="flex justify-center items-center gap-2 text-primary mt-1">
            <SlLocationPin size={20} />
            <p className="text-sm font-medium">{location}</p>
          </div>
        </div>

        {/* information */}
        <div className="flex flex-col justify-start items-start gap-2">
          {/* competitors and time */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/dashboard/competitions/users.svg"}
                alt="users"
                width={16}
                height={16}
              />
              <p className="text-shadeGray text-sm font-medium">{competitors} مشترك</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"/dashboard/competitions/clock.svg"}
                alt="clock"
                width={16}
                height={16}
              />
              <p className="text-shadeGray text-sm font-medium">{timeLeft} يوما</p>
            </div>
          </div>
          {/* date */}
          <div className="flex items-center gap-[10px]">
            <Image
              src={"/dashboard/competitions/calendar.svg"}
              alt="calendar"
              width={16}
              height={16}
            />
            <p className="text-shadeGray font-medium text-sm">
              {dateRange}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
