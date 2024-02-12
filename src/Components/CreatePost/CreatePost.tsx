import { useState } from "react";
import { createUUID } from "../../Apis/AuthUtils";
import { postsProps } from "../../Types/types";
import "./CreatePostS.scss";
import { MDE } from "./MDE/MDE";
import { PostTitle } from "./PostTitle/PostTitle";

export const CreatePost = () => {
    const defaultNewPost: postsProps = {
        content: "",
        coverImage: "",
        id: createUUID(),
        title: "",
        username: "",
        __typename: "",
    };
    const [post, setPost] = useState<postsProps>(defaultNewPost);

    return (
        <div className="CreatePost">
            <form>
                <PostTitle
                    updateTitle={(title: string) => {
                        setPost({
                            ...post,
                            title: title,
                        });
                    }}
                />
                <MDE newPost={post} setNewPost={setPost} />
            </form>
        </div>
    );
};
