import styles from "../styles/login.module.scss";
import Link from "next/link";
import Logo from "../Components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const login = () => {
  return (
    <>
      <div className={styles.backgroundBlur}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.join}>
              <p>Don&apos;t have an account?</p>
              <Link href="/joinUs">
                <button className={styles.joinBtn}>
                  {/* <img src="/Images/user.png" alt="" /> */}
                  <FontAwesomeIcon icon={faUser} />
                  <a href=""> join</a>
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <form className={styles.cardBody}>
              <h1>Hello! Welcome back.</h1>
              <div className={styles.email}>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="mail" />
              </div>
              <div className={styles.password}>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
              </div>
              <button type="submit">Login</button>
              <Link href={"/passwordReset"} passHref={true}>
                <small>Forgot your password ?</small>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
