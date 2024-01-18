import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { listPostDataModelTestings } from "../graphql/queries";

export const useGetListOfPosts = async () => {
    const [posts, setPosts] = useState<any>([]);
    const client = generateClient();

    useEffect(() => {
        async function fetchPosts() {
            const testing = await client
                .graphql({
                    query: listPostDataModelTestings,
                })
                .catch((err) => console.error(err, " err"));
            setPosts(testing);
        }
        fetchPosts();
    }, []);

    return posts;
};
