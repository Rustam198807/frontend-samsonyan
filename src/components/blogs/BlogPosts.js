import BlogPostItem from "./BlogPostItem";
import PostInfoPopUp from "../post-info-popUp/PostInfoPopUp";
import styles from "./BlogPost.module.css";
import { useProps } from "../../context/MainProvider";

export default function BlogPosts() {
  const { posts, openedPost } = useProps();
  return (
    <>
      <div className={styles.blogs}>
        {posts.map((post) => (
          <BlogPostItem post={post} key={post.title} />
        ))}
      </div>
      {openedPost ? <PostInfoPopUp /> : null}
    </>
  );
}
