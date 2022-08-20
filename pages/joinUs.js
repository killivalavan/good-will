import styles from "../styles/join.module.scss";
import Logo from "../Components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const JoinPage = () => {
  const router = useRouter();

  return (
    <div className={styles.background}>
      <nav>
        <div className={styles.back}>
          <Link href={"/"}>
            <a href="">
              <FontAwesomeIcon
                onClick={() => router.back()}
                size="2x"
                icon={faArrowLeft}
              />
            </a>
          </Link>
        </div>
        <div className={styles.login}>
          <p>Already have an account?</p>
          <Link href="/login">
            <button>
              <FontAwesomeIcon icon={faUser} />
              <a href="">Login</a>
            </button>
          </Link>
        </div>
      </nav>
      <div className={styles.card}>
        <div className={styles.leftDiv}>
          <div className={styles.logo}>
            <Logo style={{ color: "black" }} />
          </div>
          <div className={styles.image}>
            <img src="/Images/signupImage.png" alt="" />
          </div>
          <p>
            Create your free account and start sharing your favourite Seller,
            Farmer, Store, Hotel, or Bazaar, Lets take this to everyones eye!
          </p>
        </div>
        <div className={styles.rightDiv}>
          <h1>Create your free account</h1>
          <form action="">
            <div className={styles.name}>
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div className={styles.userId}>
              <label htmlFor="userid">User id</label>
              <input id="userid" type="text" placeholder="Example_123" />
            </div>
            <div className={styles.email}>
              <label htmlFor="email">Email address</label>
              <input id="email" type="mail" placeholder="example@gmail.com" />
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="enter password"
              />
            </div>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
