// components/Header.tsx
import React from "react";
import { Typography } from "@mui/material";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <div className="flex flex-col justify-center items-center gap-3">
    <Typography variant="h4" component="h1" align="center" className="text-shadeBlack text-2xl md:text-[32px]" fontWeight={700}>
      {title}
    </Typography>
    <Typography variant="body1" component="p" align="center" className="text-shadeGray font-normal">
      {subtitle}
    </Typography>
  </div>
);

export default Header;
