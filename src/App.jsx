import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const LoadedCoffees = useLoaderData();
  const[coffees,setCoffees]=useState(LoadedCoffees)

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center  text-3xl font-bold mt-14">
        Coffee store {coffees.length}
      </h1>

      <div className="grid mt-14 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
          coffees={coffees}
          setCoffees={setCoffees}
          key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
