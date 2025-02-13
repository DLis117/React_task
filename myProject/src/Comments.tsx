import { CommentsContext } from './CommentsProvider';
import { useContext } from 'react';
import { useNavigate,useLocation,useParams } from 'react-router-dom';

function Comments()
{
    const location = useLocation();
    const navigate = useNavigate();
    const { commentId } = useParams();

    const fromPage = location.state?.from || '/';

    const handleGoBack = () => 
    {
        navigate(fromPage);
    };

    let commentsCntx =useContext(CommentsContext);
    const comments = commentsCntx?.comments;

    if (!comments) {
      return <h1 className="text-3xl">Loading...</h1>;
    }

    return (
                <>
                    <button onClick={handleGoBack} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">{'<-'}</button>

                    {comments?.length>0&&comments.map((x)=>
                        <div  className={commentId===x.id?"mb-5":""}>
                        <p>comment id: {x.id}</p>
                        <p>post id: {x.postId}</p>
                        <p>email: {x.email}</p>
                        <p>name: {x.name}</p>
                        <p>body: {x.body}</p>
                    </div>)
                    }
                </>
            )
}
export default Comments;