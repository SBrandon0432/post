import { useState } from "react";

import "./HomeS.scss";
import { useGetListOfPosts } from "../../Apis/useGetListOfPosts";

export const Home = () => {
    const [posts, setPosts] = useState([]);
    Promise.resolve(useGetListOfPosts()).then(({ data }) => {
        setPosts(data?.listPostTableApi_01_23_24s.items);
    });
    console.log(posts);
    return (
        <div className="Home">
            <h1>home</h1>
        </div>
    );
};
