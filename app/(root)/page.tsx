import Hero from "@/components/shared/Hero";
import Mission from "@/components/shared/Mission";
import Services from "@/components/shared/Services";
import Standards from "@/components/shared/Standards";

function page() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Standards />
      <Services />
      <Mission />
    </div>
  );
}

export default page;
