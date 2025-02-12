import { Link } from 'react-router';
import { useContext } from 'react';
import { UserIdContext } from '../UserIdProvider';
import { DataContext } from '../DataProvider';



function HomePage()
{
    const context = useContext(UserIdContext);
    const DataCntx = useContext(DataContext);
    

    function handleLogIn()
    {
        //setting value to context
        context.setUserId(Math.floor(Math.random() * 10) + 1);
    }

    return (<>
                <Link to={`/posts`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleLogIn}>Log In</button>
                </Link>
            </>)
}
export default HomePage;