// import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "@/app/_lib/services/data-service";
import CabinCard from "@/app/_components/CabinCard";

async function CabinList() {
  // EXPL: Enables partial pre-rendering when wrapped in suspense component
  // noStore();

  const cabins = await getCabins();

  if (!cabins.length) {
    return null;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
