"use client";

import Footer from "@/components/Footer/Footer";
import ThemeWrapper from "../ThemeWrapper";
import Sidebar from "@/components/NavigationComponents/Sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>
      {/* Dashboard-specific layout components*/}
      <main className="w-full min-h-screen flex bg-[#F9F9FA]">
        <Sidebar/>
        {children}
        <div className="self-end w-full"><Footer /></div>
      </main>
    </ThemeWrapper>
  );
}
