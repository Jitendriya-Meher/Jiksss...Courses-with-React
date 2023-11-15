import React from "react";
import {filterData,apiUrl} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";

const App = () => {

  let [courses,setCourses] = useState([]);
  let [loading,setLoading] = useState(true);
  let [category,setCategory] = useState(filterData[0].title);

  async function fetchApi(){
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      // output
      setCourses(output.data);
      console.log(output.data);
    }
    catch(error){
      toast.error("network Fails");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchApi();
  },[])

  return(
    <div className="min-h-screen flex flex-col">

      <div className="">
        <Navbar></Navbar>
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter 
          filterData={filterData}
          category = {category}
          setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
          mx-auto flex flex-wrap justify-center items-start min-h-[100vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>

    </div>
  );
};

export default App;
