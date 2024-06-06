import styles from "./FooterComponent.module.css";

function FooterComponent() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <h4>Improve your skills</h4>
          <h5>Get in the KNOW</h5>
          <p className={styles.footerInformation}>
            We at Bulgarian community have the utmost passion for preserving our
            traditions and customs and passing it to the next generations.
          </p>
        </div>
        <div className={styles.footerRightSide}>
          <div className={styles.footerColumnOne}>
            <h4>About Bulgarian</h4>
            <h5>About Us</h5>
            <h5>Our Vision</h5>
          </div>
          <div className={styles.footerColumnTwo}>
            <h4>Contact Us</h4>
            <h5>Advertise</h5>
            <h5>Editors Column</h5>
            <h5>Email</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
