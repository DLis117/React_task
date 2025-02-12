import { useParams,useLocation,useNavigate } from "react-router";
import { useQuery } from '@tanstack/react-query';
function SinglePost() {

  const location = useLocation();
  const navigate = useNavigate();
  const { postId } = useParams();

  const {data, error, isPending,isFetching } = useQuery({
    queryKey: ['repoData2'],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((res) => res.json()),
  });



  const fromPage = location.state?.from || '/';

  const handleGoBack = () => 
  {
    navigate(fromPage);
  };

  if (isPending||isFetching) return <h1 className="text-3xl">Loading...</h1>;
  if (error) return <h1>{`An error has occurred: ${error.message}`}</h1>;
  return (
    <>
      <button onClick={handleGoBack} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Back</button>
      
          {data.map((x,y)=>
          <div key={y} className="mb-5">
              <p>comment id: {x.id}</p>
              <p>post id: {x.postId}</p>
              <p>email: {x.email}</p>
              <p>name: {x.name}</p>
              <p>body: {x.body}</p>
          </div>)}
    </>
  );
}

export default SinglePost;
