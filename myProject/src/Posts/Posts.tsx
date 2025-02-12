import {
    useQuery,
  } from '@tanstack/react-query'
import { useContext } from 'react';
import { UserIdContext } from '../UserIdProvider';
import { Link } from 'react-router-dom'
function Posts() 
{
    let context = useContext(UserIdContext);

    const { isPending, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
          res.json(),
        ),
    })
  
    if (isPending) return <h1>'Loading...'</h1>
  
    if (error) return <h1>{`An error has occurred: ${error.message}`}</h1>
  
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
                    <p style={x.userId===context.userId?{color: "blue",fontWeight:`bold`}:null}>{x.title}</p>
                </Link>)
                }
            </>
    )
}

  export default Posts;