import Banner from "@/components/Banner";
import Consult from "@/components/Consult";
import ShowGoals from "@/components/ShowGoals";

export default function Home() {
  return (
    <div className="min-h-screen pb-10">
      <Banner />
      <ShowGoals />
      <Consult />
    </div>
  );
}
