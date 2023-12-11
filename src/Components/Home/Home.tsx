import { generateClient } from "aws-amplify/api";
import { useState } from "react";
import { listPostDataModelTestings } from "../../graphql/queries";
import "./HomeS.scss";

export const Home = () => {
    const [posts, setPosts] = useState<any>([]);
    const client = generateClient();

    async function fetchPosts() {
        await client
            .graphql({
                query: listPostDataModelTestings,
            })
            .then((data) => {
                setPosts(data);
                console.log(posts, data);
            })
            .catch((err) => console.error(err));
        const list = await client.graphql({ query: listPostDataModelTestings });
        console.log(posts);
    }
    // fetchPosts();

    return (
        <div className="Home">
            <h1>home</h1>
        </div>
    );
};
