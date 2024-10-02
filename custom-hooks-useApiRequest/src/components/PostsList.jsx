import useGetPosts from "../hooks/PostsHook/useGetPosts";
import "./post.css";

const PostsList = () => {
  const { data } = useGetPosts();

  return (
    <div>
      {data?.data.map((post) => (
        <div className="post" key={post.id}>
          <div className="title">
            <div>Title:</div>
            <div>{post.title}</div>
          </div>
          <div className="description">
            <div>description:</div>
            <div>{post.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
