import { useState,ReactNode } from "react";
import { createContext } from "react";

//create a context that stores id 
export const UserIdContext = createContext<{ data?: any[] } | null>(null);

interface UserIdProviderProps 
{
    children: ReactNode;
}

function UserIdProvider ({ children }:UserIdProviderProps)
{
    const [userId, setUserId] = useState();
  
    return (
      <UserIdContext.Provider value={{ userId, setUserId }}>
        {children}
      </UserIdContext.Provider>
    );
}

export default UserIdProvider;