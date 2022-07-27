import Nav from "./Nav";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      {(pathname === "/" ||
        pathname === "/posts" ||
        pathname === "/upload") && <Nav />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
