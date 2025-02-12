

import {
    useQuery,
  } from '@tanstack/react-query'
import { useContext } from 'react';
import { UserIdContext } from '../UserIdProvider';
import { Link } from 'react-router';
function MyPosts() 
{
    let context = useContext(UserIdContext);

    const { isPending, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
          res.json(),
        ),
    })
  
    if (isPending) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message

  function filterData()
  {
    let newData = data.filter(x=>x.userId===context.userId);

    return newData.map((x,y)=><Link key={y} to={`/MyPost/${x.id}`}> <p>{x.title}</p></Link>)
  }
    return (
            <>
                <Link to={`/posts`}><button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >{'<-'}</button></Link>
                {data?.length>0&&filterData()}
            </>
    )
}

  export default MyPosts;