import Navbar from "@/components/landingPage_components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-12">
        <div className="col-span-full">
          <Navbar />
        </div>
      </div>
    </main>
  );
}
