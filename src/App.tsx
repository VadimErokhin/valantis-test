import { useEffect, useState } from "react";
import "./App.css";
import CardsWrapper from "./components/CradsWrapper";
import { useLoadCards } from "./hooks/use-load-cards-hook";
import { usePagedData } from "./hooks/use-paged-data";
import config from "./config";
import FiltersWrapper from "./components/FiltersWrapper";
import {Actions, FiltersParams} from "./services/api/types"

function App() {
  const {data, isLoading, getData} = useLoadCards();
  const pagedData = usePagedData({limit: config.pageLimit, initialPage: 1});
  const[isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    getData(pagedData.params)
  },[pagedData.params.offset]);

  function submitFilters(params:FiltersParams) {
    getData(params, Actions.Filter);
    setIsFilterActive(true);
  }

  function resetFilters() {
    setIsFilterActive(false);
    if(pagedData.page === 1) {
      getData(pagedData.params);
      return
    }
    pagedData.setPage(1);
  }

  return (
      <main className="main">
        <div className="container">
          <FiltersWrapper resetFilters={resetFilters} submitFilters={submitFilters}/>
          <CardsWrapper 
          data={data} 
          isLoading={isLoading} 
          page={pagedData.page}
          setPage={pagedData.setPage}
          isButtonsVisible={!isFilterActive}
          />
        </div>
      </main>
  );
}

export default App;
