import { FC } from "react";
// Main login screen logo icon
const LoginLogo: FC = () => (
  <div className="bg-miniGrid size-12 rounded-xl shadow-icon-shadow">
  <div className="size-12 border-[0.3px] border-borderColor rounded-xl flex justify-center items-center mb-3 shadow-icon-shadow relative">
    <div className="size-6 rounded-full bg-violet-gradient shadow-icon-shadow" />
    <div className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-xl bg-blurColor backdrop-blur-[7.5px] shadow-icon-shadow" />
  </div>
</div>
);

export default LoginLogo;
