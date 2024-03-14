
const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 bg-slate-100 m-12 rounded-xl p-8 text-left my-6'>
            <h2 className="font-bold text-2xl">Bookmarked Blogs: {bookmarks.length}</h2>
        </div>
    );
};

export default Bookmarks;