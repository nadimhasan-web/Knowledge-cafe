import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({blog, addToBookmarks, markReadingTime}) => {
    const{id,title, cover_img,author, author_img, post_date, reading_time_min, hashtags} = blog;
    return (
        <div className='mb-14'>
            <img className='rounded-lg w-full mb-6' src={cover_img} alt="cover image" />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="author image" />
                    <div className='ml-5'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time_min}: min read</span>
                    <button onClick={()=>addToBookmarks(blog)}>
                        <CiBookmark></CiBookmark> 
                        </button>
                </div>
            </div>
            <h2 className='text-4xl font-bold text-[#111111]'>{title}</h2>
            <p className='text-[rgba(17,17,17,0.60)] mt-4'>
                {
                    hashtags.map((hash, index) => <span key={index}><a href=""></a> #{hash}</span>)
                }
            </p>
            <button onClick={()=>markReadingTime(id,reading_time_min)} className="font-bold text-purple-800 underline">Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    addToBookmarks: PropTypes.func.isRequired,
    markReadingTime: PropTypes.func.isRequired,
}
export default Blog;