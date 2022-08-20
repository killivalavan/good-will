import { useRouter } from "next/router";
import PostDetails from "../../Components/PostDetails";

const PostDetail = ({ data }) => {
  const router = useRouter();
  const { postId } = router.query;

  console.log(data);
  return <>{postId && <PostDetails id={data} />}</>;
};

export async function getStaticProps({ params }) {
  const id = params.postId;

  return {
    props: {
      data: id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: "1" } }],
    fallback: true,
  };
}
export default PostDetail;
