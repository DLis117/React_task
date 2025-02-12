import {
    useQuery,
  } from '@tanstack/react-query'
import { useContext } from 'react';
import { UserIdContext } from '../UserIdProvider';
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider';
function Posts() 
{
    let context = useContext(UserIdContext);
    let dataCntx = useContext(DataContext);

    const data = dataCntx.data;

    if (!data) {
      return <h1>Loading...</h1>;
    }
  
    return (
            <>
                <Link to={`/`}><button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >{'<-'}</button></Link>
                <Link to={`/MyPosts`} ><button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >show only my posts</button></Link>
                <Link to={`/OtherPosts`}><button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >show only other's posts</button></Link>

                {data?.length>0&&data.map((x,y)=>                   //to know from which page it was clicked
                <Link
                to={`/post/${x.id}`} state={{ from: '/posts' }} // Directly pass the state here
                key={x.id}
              >
                    <p className={x.userId===context.userId?"text-blue-700 font-bold":null}>{x.title}</p>
                </Link>)
                }
            </>
    )
}

  export default Posts;