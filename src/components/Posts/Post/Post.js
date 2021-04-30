import React, { useContext } from "react";
import { postsContext } from "../../../postsContext.js";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./style.js";
import moment from "moment";
import "moment/locale/fr"; // without this line it didn't work

export default function Post({ post }) {
  const classes = useStyles();
  const [posts, setPosts] = useContext(postsContext);
  const deletePost = async (id) => {
    try {
      fetch("http://localhost:5000/posts/" + id, {
        method: "DELETE",
      });
      const results = await post.json();
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (id) => {
    deletePost(id);
    setPosts(posts.filter((post) => post._id !== id));
  };
  return (
    <Grid item sm={3}>
      {post !== undefined && (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="user" className={classes.avatar}>
                !
              </Avatar>
            }
            title={post.importance}
            subheader={moment(post.date).fromNow()}
          />

          <CardContent>
            <div className={classes.content}>
              <h2> {post.title}</h2>
              <p>{post.note}</p>

              <DeleteIcon
                color="action"
                onClick={() => handleDelete(post._id)}
                fontSize="small"
                className={classes.delete}
              />
            </div>
          </CardContent>
        </Card>
      )}
    </Grid>
  );
}
{
  /* <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="user" className={classes.avatar}>
                !
              </Avatar>
            }
            title={post.title}
            subheader={moment(post.date).fromNow()}
            //subheader={post.createdAt}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.note}
            </Typography>
            <Typography>{post.importance}</Typography>

            <DeleteIcon
              onClick={() => handleDelete(post._id)}
              fontSize="small"
            />
          </CardContent>
        </Card> */
}
