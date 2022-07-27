import Link from "next/link";
import Image from "next/image";
import classes from "./Nav.module.scss";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const router = useRouter();
  return (
    <div className={classes.styledNav}>
      <div className={classes.content}>
        <Logo style={{ color: "white" }} />
        <div>
          {router.pathname !== "/upload" && (
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
          )}
        </div>
        <div>
          {router.pathname !== "/upload" && (
            <Link href="/upload">
              <button className={classes.uploadBtn}>
                <a href="">upload </a>
              </button>
            </Link>
          )}

          <Link href="/joinUs">
            <button className={classes.joinBtn}>
              <FontAwesomeIcon icon={faUser} />
              <a href=""> join</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
