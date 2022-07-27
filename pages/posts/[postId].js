import { useRouter } from "next/router";
import PostDetails from "../../Components/PostDetails";

const postDetails = () => {
  const router = useRouter();
  const { postId } = router.query;

  return <>{postId && <PostDetails id={postId} />}</>;
};

export default postDetails;
