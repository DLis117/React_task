import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

function SinglePost() {
  const location = useLocation();
  const navigate = useNavigate();
  const { postId } = useParams();

  // Access the state passed from Link
  const fromPage = location.state?.from || '/'; // Fallback to '/' if no state is found

  // Query to fetch post data
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>{`An error has occurred: ${error.message}`}</h1>;

  // Find the specific post based on the ID
  const post = data?.find((x) => x.id == postId);

  // Handle "Back" button navigation
  const handleGoBack = () => {
    navigate(fromPage);
  };

  return (
    <>
      <button onClick={handleGoBack} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Back</button>
      {post && (
        <>
          <p>id: {post.id}</p>
          <p>user id: {post.userId}</p>
          <p>title: {post.title}</p>
          <p>body: {post.body}</p>
        </>
      )}
    </>
  );
}

export default SinglePost;
