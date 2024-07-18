import classes from "./Post.module.css";
interface PostProps {
  author: string;
  body: string;
}

export default function Post(props: PostProps) {
  const { author, body } = props;
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
}
