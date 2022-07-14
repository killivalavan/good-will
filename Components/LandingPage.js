import Image from "next/image";
import Link from "next/link";
import classes from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.layout}>
        <div>
          <h1>
            Find the best
            <br />
            one...
          </h1>
          <Link href="/findPage">
            <button>
              <a>Find Now </a>
            </button>
          </Link>
        </div>
        <div className={classes.heroImage}>
          {/* <Image src="/Images/boy.png" width={1000} height={1000} /> */}
          <img className={classes.boy} src="/Images/boy1.png" alt="" />
          <img className={classes.circle} src="/Images/circle.png" alt="" />
          <img
            className={classes.shadow}
            src="/Images/shadow.png"
            alt="shadow"
          />
        </div>
      </div>
      <div className={classes.wave}>
        <Image src="/Images/wave.svg" width={1000} height={300} />
      </div>
    </div>
  );
};

export default LandingPage;
