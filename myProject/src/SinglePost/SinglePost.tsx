import { useParams } from 'react-router-dom';
import { useLocation, Link } from "react-router";
import { useNavigate } from 'react-router-dom';

import {
    useQuery,
  } from '@tanstack/react-query'

function SinglePost()
{
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const source = location.state?.from;
    console.log(source)
    const handleNavigate = () => {
        // Navigate to the 'About' page
        
        navigate('/posts');
      };

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
                <button onClick={handleNavigate}  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >{'<-'}</button>
                {filterPost()}
            </>)
}
export default SinglePost;