import PropTypes from 'prop-types';

const ReadingTime = ({markAsRead}) => {
    return (
        <div className="p-6 bg-indigo-100 rounded-lg border border-indigo-600 mb-6 text-2xl font-bold text-indigo-500">
            <h2>Spent time on read : {markAsRead} min</h2>
        </div>
    );
};

ReadingTime.propTypes = {
    markAsRead: PropTypes.number
}

export default ReadingTime;