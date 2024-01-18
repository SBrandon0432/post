import { useState } from "react";
import { useGetListOfPosts } from "../../Apis/utils";
import "./HomeS.scss";

export const Home = () => {
    const [posts, setPosts] = useState([]);
    Promise.resolve(useGetListOfPosts()).then(({ data }) => {
        setPosts(data?.listPostDataModelTestings.items);
    });

    return (
        <div className="Home">
            <h1>home</h1>
        </div>
    );
};
