"use client";
import ThemeWrapper from "../ThemeWrapper";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className="antialiased bg-gray-100 flex items-center justify-center h-screen">
        <ThemeWrapper>
          <main className="w-full h-screen flex justify-center items-center bg-gridMdBackground bg-center bg-cover bg-no-repeat px-4 md:px-0">
            {children}
          </main>
        </ThemeWrapper>
      </body>
    </html>
  );
}
