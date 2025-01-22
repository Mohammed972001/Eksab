import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { SlLocationPin } from 'react-icons/sl';

interface CompetitionCardProps {
  id: string;
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
  id,
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
    <Link href={`/competitions/competitiondetails/${id}`} passHref>
      <div className="flex gap-4 items-center p-4 rounded-lg bg-white shadow-card-shadow cursor-pointer hover:shadow-lg transition-shadow duration-300">
        {/* Image Container */}
        <div className="flex justify-center items-center border-[2px] border-[#EBEDF0] rounded-2xl w-[168px] h-[176px]">
          <Image
            src={imageSrc}
            alt={title}
            width={50}
            height={50}
            priority // Optimize loading for above-the-fold images
          />
        </div>

        {/* Card Content */}
        <div className="flex flex-col justify-start items-start gap-4">
          {/* Card Header */}
          <div className="flex flex-col justify-start items-start">
            {/* Status Badge */}
            <div
              className={`rounded-lg px-2 py-1 flex justify-center items-center w-fit text-nowrap ${statusColor}`}
            >
              <p className="text-sm text-[#331C0D]">{status}</p>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-shadeBlack max-w-[324px]">
              {title}
            </h3>

            {/* Location */}
            <div className="flex justify-center items-center gap-2 text-primary mt-1">
              <SlLocationPin size={20} aria-label="Location" />
              <p className="text-sm font-medium">{location}</p>
            </div>
          </div>

          {/* Card Details */}
          <div className="flex flex-col justify-start items-start gap-2">
            {/* Competitors and Time Left */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/dashboard/competitions/users.svg"
                  alt="Competitors"
                  width={16}
                  height={16}
                  loading="lazy"
                />
                <p className="text-shadeGray text-sm font-medium">
                  {competitors} مشترك
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/dashboard/competitions/clock.svg"
                  alt="Time Left"
                  width={16}
                  height={16}
                  loading="lazy"
                />
                <p className="text-shadeGray text-sm font-medium">
                  {timeLeft} يوما
                </p>
              </div>
            </div>

            {/* Date Range */}
            <div className="flex items-center gap-[10px]">
              <Image
                src="/dashboard/competitions/calendar.svg"
                alt="Date Range"
                width={16}
                height={16}
                loading="lazy"
              />
              <p className="text-shadeGray font-medium text-sm">{dateRange}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompetitionCard;