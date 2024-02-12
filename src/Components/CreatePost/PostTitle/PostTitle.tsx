interface Props {
    updateTitle: (title: string) => void;
}

export const PostTitle = ({ updateTitle }: Props) => {
    return (
        <label>
            <h2>Title</h2>
            <input
                placeholder="Title"
                onChange={(e) => {
                    updateTitle(e.target.value);
                }}
            />
        </label>
    );
};
