import styles from "./AuthorComponent.module.css";
import { Link } from "react-router-dom";

function AuthorComponent() {
  return (
    <section className={styles.authorSection}>
      <div className={styles.authorContentWrapper}>
        <div className={styles.authorContent}>
          <dir>
            <p className={styles.attentionAuthors}>Attention</p>
          </dir>
          <h3>Want to be an author in this blog?</h3>
          <p
            data-testid="authorInformation"
            className={styles.authorInformation}
          >
            Check out your own{" "}
            <Link className={styles.authorAnchor} to="/home/create">
              author suite!
            </Link>{" "}
            This suite allows you to create, edit, and preview posts in this
            blog!
          </p>
          <div>
            <Link className={styles.authorLink} to="/home/create">
              Go to link
            </Link>
          </div>
        </div>
        <div className={styles.authorSectionImgContainer}>
          <img
            className={styles.authorSectionImg}
            src="/author-girl.jpeg"
            alt="author girl managing the blog"
          />
        </div>
      </div>
    </section>
  );
}

export default AuthorComponent;
