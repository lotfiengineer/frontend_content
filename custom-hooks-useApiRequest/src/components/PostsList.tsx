import useGetPosts from "../hooks/PostsHook/useGetPosts";

const PostsList = () => {
  const data = useGetPosts();
  console.log(data);
  
  return <div>PostsList</div>;
};

export default PostsList;
