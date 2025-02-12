import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserIdContext } from '../UserIdProvider';
import { DataContext } from '../DataProvider';

function MyPosts() {
  const context = useContext(UserIdContext);

  let dataCntx = useContext(DataContext);
  
      const data = dataCntx.data;
  
      if (!data) {
        return <h1 className="text-3xl">Loading...</h1>;
      }


  function filterData() 
  {
      let newData = data.filter((x) => x.userId === context.userId);

      return newData.map((x, y) => 
      (
        <Link
          key={y}
          to={`/post/${x.id}`} state={{ from: '/MyPosts' }}>
          <p>{x.title}</p>
        </Link>
      ));
  }

  return (
    <>
      <Link to={`/posts`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">{'<-'}</button>
      </Link>
      {data?.length > 0 && filterData()}
    </>
  );
}

export default MyPosts;
