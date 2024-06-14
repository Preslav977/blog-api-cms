import styles from "./PostComponent.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

function PostComponent({
  postImgPathId,
  postImgSrc,
  postImgAlt,
  postCategoryPathId,
  postCategory,
  postTitle,
  postBodyPathId,
  postBody,
}) {
  const sanitizedHTMLContent = DOMPurify.sanitize(postBody);

  return (
    <>
      <article className={styles.mainPagePostArticleContainer}>
        <Link to={postImgPathId}>
          <img
            data-testid="postImg"
            className={styles.mainPagePostImg}
            src={postImgSrc}
            alt={postImgAlt}
          />
        </Link>
        <div className={styles.mainPagePostCategoryContainer}>
          <Link
            data-testid="postCategory"
            className="postCategory"
            to={postCategoryPathId}
          >
            {postCategory}
          </Link>
        </div>
        <div className={styles.mainPagePostBody}>
          <Link to={postBodyPathId}>
            <h2 className={styles.mainPagePostHeader} data-testid="postTitle">
              {postTitle}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: sanitizedHTMLContent }}
              data-testid="postBody"
              className="postDescription"
            ></div>
          </Link>
        </div>
      </article>
    </>
  );
}

PostComponent.propTypes = {
  postImgPathId: PropTypes.string,
  postImgSrc: PropTypes.string,
  postImgAlt: PropTypes.string,
  postCategoryPathId: PropTypes.string,
  postCategory: PropTypes.string,
  postTitle: PropTypes.string,
  postBodyPathId: PropTypes.string,
  postBody: PropTypes.string,
};

export default PostComponent;
