import styles from "./Footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default Footer;
