import { Link } from "react-router-dom";
import styles from "./FeaturedTagsComponent.module.css";

function FeaturedTagsComponent() {
  return (
    <section className={styles.featuredTagsContainer}>
      <h4>Featured Tags</h4>
      <div className={styles.featuredTags}>
        <Link to="/posts/tag/bulgaria">#Bulgaria</Link>
        <Link to="/posts/tag/folklore">#Folklore</Link>
        <Link to="/posts/tag/history">#History</Link>
        <Link to="/posts/tag/traditions">#Traditions</Link>
        <Link to="/posts/tag/customs">#Customs</Link>
      </div>
    </section>
  );
}

export default FeaturedTagsComponent;
