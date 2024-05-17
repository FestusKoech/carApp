import { SearchBar, CustomFilter } from "@/components";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
            <p>Explore</p>
            <div className="home__filters">
              <SearchBar />
              <div className="home__filter__container"
              >
                <CustomFilter title='fuel'/>

                <CustomFilter title='year'/>
                


              </div>
            </div>

          </h1>
        </div>

      </div>
      
    </main>
  );
}
