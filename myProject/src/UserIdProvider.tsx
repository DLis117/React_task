import { useState } from "react";
import { createContext } from "react";

//create a context that stores id 
export const UserIdContext = createContext(null);
function UserIdProvider (props)
{
    const [userId, setUserId] = useState();
  
    return (
      <UserIdContext.Provider value={{ userId, setUserId }}>
        {props.children}
      </UserIdContext.Provider>
    );
}

export default UserIdProvider;