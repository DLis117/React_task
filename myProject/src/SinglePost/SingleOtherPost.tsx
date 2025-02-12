import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    useQuery,
  } from '@tanstack/react-query'

function SingleOtherPost()
{
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
            res.json(),
            ),
    })

    if (isPending) return <h1>'Loading...'</h1>

    if (error) return <h1>{`An error has occurred: ${error.message}`}</h1>


    //params are those after ':' in path in  App.tsx
    const params = useParams();

    function filterPost()
    {
        let newData =  data.filter(x=>x.id==params.postId)
        return (<>
                    <p>id: {newData[0].id}</p>
                    <p>user id: {newData[0].userId}</p>
                    <p>title: {newData[0].title}</p>
                    <p>body: {newData[0].body}</p>
                </>)
    }
    
    return (<>
                <Link to={'/OtherPosts'}><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >{'<-'}</button></Link>
                {filterPost()}
            </>)
}
export default SingleOtherPost;