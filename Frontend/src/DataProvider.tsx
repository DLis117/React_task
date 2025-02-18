import { createContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

//create a context that stores id 
export const DataContext  = createContext<{ data?: any[] } | null>(null);

interface DataProviderProps 
{
    children: ReactNode;
}

function DataProvider({ children }: DataProviderProps)
{
  
    const { data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
      });
    

    return (
      <DataContext.Provider value={{ data }}>
        {children}
      </DataContext.Provider>
    );
}
export default DataProvider;