import styles from "./BlogPostItem.module.css";
import { useProps } from "../../context/MainProvider";

export default function BlogPostItem({ post }) {
  const { img, img_2x, tags, title, autor: author, date, views, text } = post;
  const { handleOpenPopUp, searchQuery } = useProps();

  return (
    <div
      onClick={() => handleOpenPopUp(title)}
      className={`${styles.blog_post} ${
        searchQuery &&
        !title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !text.toLowerCase().includes(searchQuery.toLowerCase())
          ? styles.hidden
          : ""
      }`}
    >
      <div className={styles.post_featured_image}>
        <img src={img} srcSet={img_2x} alt="test" />
      </div>
      <div className="post_body">
        <p className={styles.post_tags}>{tags}</p>
        <h2 className={styles.post_title}>{title}</h2>
        <div className={styles.post_meta}>
          <span className={styles.post_author}>{author}</span>
          <span className="post_date">{date}</span>
          <span className="post_views">{`${views} Views`}</span>
        </div>
        <p className={styles.post_content}>{text}</p>
      </div>
    </div>
  );
}
