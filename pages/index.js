import Head from "next/head";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { useState } from "react";
import FilterBar from "@/components/FilterBar/FilterBar";

const MapWithNoSSR = dynamic(() => import("@/components/Map/Map.js"), {
  ssr: false,
});

export default function Home() {
  const [filterType, setFilterType] = useState("");
  const [isAnimalFriendly, setIsAnimalFriendly] = useState("");
  const [isChildFriendly, setIsChildFriendly] = useState("");

  const params = new URLSearchParams();

  if (filterType) params.append("type", filterType);
  if (isAnimalFriendly) params.append("animalFriendly", "true");
  if (isChildFriendly) params.append("childFriendly", "true");

  const queryString = params.toString()
  console.log(queryString)

  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}?${queryString}` 
  );

  if (isLoading) return <h1>Loading...</h1>;

  if (!data) {
    return <h1>No data available</h1>;
  }

  function handleFilterChange(e) {
    setFilterType(e.target.value);
  }
  function handleAnimalChange(e) {
    setIsAnimalFriendly(e.target.checked);
  }

  function handleChildChange(e) {
    setIsChildFriendly(e.target.checked);
  }

  return (
    <>
      <Head>
        <title>Gourmet Berlin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <FilterBar
          type={filterType}
          onChange={handleFilterChange}
          animal={isAnimalFriendly}
          child={isChildFriendly}
          onAnimalChange={handleAnimalChange}
          onChildChange={handleChildChange}
        /> 
        <MapWithNoSSR restaurants={data} />
      </main>
    </>
  );
}
