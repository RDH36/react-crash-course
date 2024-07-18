interface PostProps {
  name: string;
  post: string;
}

export default function Post(props: PostProps) {
  const { name, post } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{post}</p>
    </div>
  );
}
