import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { UserIdContext } from '../UserIdProvider';

function MyPosts() {
  const context = useContext(UserIdContext);

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
      ),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  function filterData() {
    let newData = data.filter((x) => x.userId !== context.userId);

    return newData.map((x, y) => (
      <Link
        key={y}
        to={`/post/${x.id}`} state={{ from: '/OtherPosts' }}>
        <p>{x.title}</p>
      </Link>
    ));
  }

  return (
    <>
      <Link to={`/posts`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          {'<-'}
        </button>
      </Link>
      {data?.length > 0 && filterData()}
    </>
  );
}

export default MyPosts;
