import styles from "./AuthorComponent.module.css";

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
            <a className={styles.authorAnchor} href="">
              author suite!
            </a>{" "}
            This suite allows you to create, edit, and preview posts in this
            blog!
          </p>
          <div>
            <a className={styles.authorLink} href="">
              Go to link
            </a>
          </div>
        </div>
        <div className={styles.authorSectionImgContainer}>
          <img
            className={styles.authorSectionImg}
            src="/author-girl.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default AuthorComponent;
