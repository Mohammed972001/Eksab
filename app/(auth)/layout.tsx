"use client";

import ThemeWrapper from "../ThemeWrapper";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>
      {/* Auth-specific layout components*/}
      <main className="w-full min-h-[90vh] flex justify-center items-center bg-gridMdBackground bg-center bg-cover bg-no-repeat px-4 md:px-0">
        {children}
      </main>
    </ThemeWrapper>
  );
}
