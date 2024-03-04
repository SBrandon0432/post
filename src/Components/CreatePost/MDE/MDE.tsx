import { useState } from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

import Showdown from "showdown";
import { postsProps } from "../../../Types/types";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
});

interface Props {
    newPost: postsProps;
    setNewPost: (newPost: postsProps) => void;
}

export const MDE = ({ newPost, setNewPost }: Props) => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "write",
    );
    return (
        <label>
            <h2>body</h2>
            <ReactMde
                value={newPost.content}
                onChange={(string) => {
                    setNewPost({
                        ...newPost,
                        content: string,
                    });
                }}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />
        </label>
    );
};
