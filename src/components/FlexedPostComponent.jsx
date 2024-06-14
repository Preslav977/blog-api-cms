import styles from "./FlexedPostComponent.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

function FlexedPostComponent({
  postImgPathId,
  postImgSrc,
  postImgAlt,
  postCategoryPathId,
  postCategory,
  postTitlePathId,
  postTitle,
  postBodyPathId,
  postBody,
}) {
  const sanitizedHTMLContent = DOMPurify.sanitize(postBody);

  return (
    <>
      <article className={styles.mainPageFlexedPostContainer}>
        <Link to={postImgPathId}>
          <img
            data-testid="postImg"
            className={styles.mainPageFlexedPostImg}
            src={postImgSrc}
            alt={postImgAlt}
          />
        </Link>
        <div className={styles.mainPageFlexedPostInformation}>
          <div>
            <Link
              to={postCategoryPathId}
              data-testid="postCategory"
              className={styles.mainPageFlexCategory}
            >
              {postCategory}
            </Link>
          </div>
          <Link to={postTitlePathId}>
            <h2>{postTitle}</h2>
          </Link>
          <div className={styles.mainPageFlexedPostBody}>
            <Link to={postBodyPathId}>
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedHTMLContent }}
                data-testid="postBody"
                className={styles.postFlexedDescription}
              ></div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

FlexedPostComponent.propTypes = {
  postImgPathId: PropTypes.string,
  postImgSrc: PropTypes.string,
  postImgAlt: PropTypes.string,
  postCategoryPathId: PropTypes.string,
  postCategory: PropTypes.string,
  postTitlePathId: PropTypes.string,
  postTitle: PropTypes.string,
  postBodyPathId: PropTypes.string,
  postBody: PropTypes.string,
};

export default FlexedPostComponent;
