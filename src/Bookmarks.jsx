import Bookmark from "./componant/bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='bg-slate-100 rounded-xl p-7 text-left space-y-4'>
            <h2 className="font-bold text-2xl">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.any
}

export default Bookmarks;