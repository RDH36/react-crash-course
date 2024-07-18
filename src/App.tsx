import PostList from "./components/PostList";
const postList = [
  {
    author: "Raymond",
    body: "React is Awesome !",
  },
  {
    author: "James",
    body: "Vue is Awesome !",
  },
];
function App() {
  return <PostList postList={postList} />;
}

export default App;
