import BlogPosts from "./components/blogs/BlogPosts";
import Header from "./components/header/Header";
import { MainProvider } from "./context/MainProvider";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <Header />
        <BlogPosts />
      </MainProvider>
    </div>
  );
}

export default App;
