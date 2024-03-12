
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const{title, cover_img,author, author_img, post_date, reading_time_min, hashtags} = blog;
    return (
        <div className='mb-10 p-5'>
            <img src={cover_img} alt="cover image" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="author image" />
                    <div className='ml-5'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time_min}: min read</span>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a href=""></a> #{hash}</span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
}
export default Blog;