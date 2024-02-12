import { useState } from "react";

import { useGetListOfPosts } from "../../Apis/useGetListOfPosts";
import "./HomeS.scss";

export const Home = () => {
    const [posts, setPosts] = useState([]);
    Promise.resolve(useGetListOfPosts()).then(({ data }) => {
        setPosts(data?.listPosts.items);
    });
    console.log(posts);
    return (
        <div className="Home">
            <h1>home</h1>
        </div>
    );
};
