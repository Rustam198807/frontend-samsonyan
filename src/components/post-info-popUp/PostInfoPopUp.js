import styles from "./PostInfoPopUp.module.css";
import { useProps } from "../../context/MainProvider";

export default function PostInfoPopUp() {
  const { handleClosePopUp, openedPost } = useProps();
  return (
    <>
      <div className={styles.popup}>
        <button onClick={handleClosePopUp} className={styles.close_popup}>
          &times;
        </button>
        <h1>{openedPost.title}</h1>
        <p>{openedPost.text}</p>
      </div>
      <div onClick={handleClosePopUp} className={styles.overlay}></div>
    </>
  );
}
