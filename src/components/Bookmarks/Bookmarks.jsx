import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3 bg-gray-300 p-4 ml-4">
            <h2 className='text-2xl'>Reading Time:{readingTime}</h2>
            <h2 className="text-2xl">Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks?.map((bookmark, idx) =><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number,
}
export default Bookmarks;