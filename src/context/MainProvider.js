import { createContext, useState, useEffect, useRef, useContext } from "react";

export const PostsProvider = createContext();

function MainProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [openedPost, setOpenedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const mainHeader = useRef(null);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  const handleOpenPopUp = (postTitle) => {
    setOpenedPost(posts.filter((e) => e.title === postTitle)[0]);
  };

  const handleClosePopUp = () => {
    setOpenedPost(null);
  };

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    async function getBlogPosts() {
      try {
        const res = await fetch(
          "https://cloud.codesupply.co/endpoint/react/data.json"
        );
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getBlogPosts();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <PostsProvider.Provider
      value={{
        posts,
        openedPost,
        searchQuery,
        mainHeader,
        scrollYPosition,
        screenWidth,
        isMobileMenuOpen,
        setSearchQuery,
        handleOpenPopUp,
        handleClosePopUp,
        handleOpenMobileMenu,
        handleCloseMobileMenu,
      }}
    >
      {children}
    </PostsProvider.Provider>
  );
}

function useProps() {
  const props = useContext(PostsProvider);
  return props;
}

export { MainProvider, useProps };
