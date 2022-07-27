import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = ({ style }) => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a href="">
          <div className="logo-img">
            <img src="/Images/logo.png" alt="logo" />
          </div>
          <h4 style={style}>
            Good <br></br> will
          </h4>
        </a>
      </Link>
      <style jsx>{``}</style>
    </div>
  );
};

export default Logo;
