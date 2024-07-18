import Post from "./Post";
import classes from "./PostList.module.css";

interface PostListProps {
  postList: Array<{
    author: string;
    body: string;
  }>;
}
export default function PostList(props: PostListProps) {
  const { postList } = props;
  return (
    <ul className={classes.posts}>
      {postList.map((post, index) => (
        <li key={index}>
          <Post author={post.author} body={post.body} />
        </li>
      ))}
    </ul>
  );
}
