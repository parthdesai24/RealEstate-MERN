import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners"
import Item from "../components/Item";
const Listing = () => {
  const [filter, setFilter] = useState("");
  const { data, isError, isLoading } = useProperties();
  // console.log(data)
  if(isError){
    return(
      <div>
        <span>Error while fetching data</span>
      </div>
    )
  }
  if(isLoading){
    return(
      <div className="h-64 flexCenter">
        <PuffLoader  height="80" width="80" radius={1} color="#555" aria-label="puff-loading"/>
      </div>
    )
  }
  return (
    <main className="my-24">
      <div className="max-padd-container py-10 bg-gradient-to-r from-primary via-white to-white">
        <div>
          <Searchbar filter={filter} setFilter={setFilter} />
          {/* CONTAINER */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10"> 
            {data.filter((property)=> 
            property.title.toLowerCase().includes(filter.toLowerCase()) || property.city.toLowerCase().includes(filter.toLowerCase()) || property.country.toLowerCase().includes(filter.toLowerCase()) 
            ).map((property)=> (
              <Item key={property.title} property={property}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Listing;
