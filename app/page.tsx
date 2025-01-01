import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-screen">
      <Typography variant="h2" gutterBottom>
        Welcome to Eksab
      </Typography>
      <Link href={"/login"} className="mt-4 bg-blue-500 text-white rounded-full py-2 px-4">
        Get Started
      </Link>
    </div>
  );
}
