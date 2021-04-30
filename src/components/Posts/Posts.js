import React, { useContext } from "react";
import { postsContext } from "../../postsContext.js";
import Post from "./Post/Post.js";
import Grid from "@material-ui/core/Grid";

export default function Posts() {
  const [posts, setPosts] = useContext(postsContext);
  return (
    <Grid container alignItems={"stretch"} spacing={3}>
      {posts.length > 0 &&
        posts.map((post, idx) => (
          <Post post={post} setPosts={setPosts} posts={posts} key={idx} />
        ))}
      <Post />
    </Grid>
  );
}
