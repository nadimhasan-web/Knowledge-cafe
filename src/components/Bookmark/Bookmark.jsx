
const Bookmark = ({bookmark }) => {
    const {title} = bookmark;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;