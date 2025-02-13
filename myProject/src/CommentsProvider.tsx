import { createContext,useState,ReactNode } from "react";
export const CommentsContext = createContext<{ data?: any[] } | null>(null);

interface CommentsProviderProps
{
    children: ReactNode;
}

function CommentsProvider({children}:CommentsProviderProps)
{
    const [comments,setComments] = useState();

    return (
        <CommentsContext.Provider value={{comments,setComments}}>
            {children}
        </CommentsContext.Provider>
    )
}
export default CommentsProvider;