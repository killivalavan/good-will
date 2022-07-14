import Link from "next/link";
import Image from "next/image";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={classes.styledNav}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <Link href="/">
            <a href="">
              <div className="logo-img">
                <img src="/Images/logo.png" alt="logo" />
              </div>
              <h4>
                Good <br></br> will
              </h4>
            </a>
          </Link>
        </div>
        <div>
          <ul className={classes.list}>
            <li>
              <div className={classes.img}>
                <Image
                  src="/Images/fast-forward.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <Link href="/">home</Link>
            </li>
            <li>
              <div className={classes.img}>
                <Image
                  src="/Images/fast-forward.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <Link href="/posts">find now</Link>
            </li>
            <li>
              <div className={classes.img}>
                <Image
                  src="/Images/fast-forward.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/upload">
            <button className={classes.uploadBtn}>
              <a href="">upload </a>
            </button>
          </Link>

          <Link href="/join">
            <button className={classes.joinBtn}>
              <img src="./Images/user.png" alt="" />
              <a href=""> join</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
