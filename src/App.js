import React, { useEffect, useState } from "react";
import Imagecard from "./component/imagecard";
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAPI } from './actions/index'
import Searchinput from "./component/searchinput";

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const dispatch = useDispatch()
  const storeData = useSelector((store) => store);
  let apiPage=1;
  
  // search input by name 
  const searchByName = () => {
    const searchresult = storeData?.data?.page?.['contentitems'].content?.filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()));
    setData(searchresult);
  }

  // reset by back button 
  const resetByBackbutton = () => {
    setData(storeData?.data?.page?.['contentitems'].content);
  }
  // on page load api call using useEffect hook
  useEffect(() => {
    if(storeData.data===null){
      dispatch(fetchDataAPI(apiPage));

    }
    //console.log(storeData?.data?.page);

    setData(storeData?.data?.page?.['contentitems'].content);
  }, [storeData])

// infinite scroll get extraa data from api call page1->page2 smooth svrolling enable 
  window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("bottom scrolled here",apiPage);
     // apiPage=apiPage+1;
      if(apiPage<=2){
        apiPage++
        dispatch(fetchDataAPI(apiPage));
      }
    }
  };


  return (<>
    <Searchinput 
    serach={search} 
    setSearch={setSearch} 
    searchByName={searchByName} 
    resetByBackbutton={resetByBackbutton}
     />
    <div className=" mx-auto main">
      {data?.map((el, index) => {
        return <Imagecard key={index} poster={el} />
      })}
    </div>
  </>
  );
}



