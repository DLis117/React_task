import { useState } from "react";
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

//create a context that stores id 
export const DataContext = createContext(null);
function DataProvider(props)
{
  
    const { data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
      });
    

    return (
      <DataContext.Provider value={{ data }}>
        {props.children}
      </DataContext.Provider>
    );
}
export default DataProvider;