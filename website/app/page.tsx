import { SearchBar, CustomFilter, CarCard } from "@/components";
import Hero from "@/components/Hero";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {

  const allCars = await fetchCars();
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        
              <SearchBar />
              <div className="home__filter__container">
                <CustomFilter title='make'/>

                <CustomFilter title='year'/>   
        </div>

        {!isDataEmpty ? (
          <section>
           <div className="home__cars-wrapper">

            {allCars?.map ((car) => (
            <CarCard car = {car} />
            
            ))}


           </div>
          </section>
        )
      :
      <div className="home__error-container">
        <h3 className="text-black font-bold">Oops! No result...</h3>
        <p>{allCars?.message}</p>
        </div>
      }


      </div>
      
    </main>
  );
}
