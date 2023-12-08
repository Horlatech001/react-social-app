import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);

    const { currentUser } = useContext(AuthContext);

    // TEMPORARY
    const liked = false;

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={currentUser.profilePic} alt={post.name} />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className="name">{currentUser.name}</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt={post.name} />
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon /> }
                        12 Likes
                    </div>
                    <div className="item" onClick={()=> setCommentOpen(!commentOpen)} >
                        <TextsmsOutlinedIcon />
                        12 Comments
                    </div>
                    <div className="item">
                       <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                { commentOpen && <Comments />}
            </div>
        </div>
    )
}

export default Post