import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { UpdateBlogIn } from '../features/BlogsSlice';
import { useDispatch } from 'react-redux';

const UpdateBlog = () => {
    const location = useLocation();
    const [id, setId] = useState(location.state.id);
    const [author, setAuthor] = useState(location.state.author);
    const [title, setTitle] = useState(location.state.Title);
    const [blog, setBlog] = useState(location.state.Blog);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blogs = {
            id: id,
            author: author,
            Title: title,
            Blog: blog
        }
        dispatch(UpdateBlogIn(blogs));
        navigate('/');
    }
    return (
        <div>
            <div>
                <h1 className='font-bold text-xl mt-12'>Update Blog</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-3 gap-2 mt-4'>
                            <input type="text" placeholder={id} className="input input-bordered w-full" disabled/>
                            <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder={author} className="input input-bordered w-full" />
                            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder={title} className="input input-bordered w-full" />
                        </div>
                        <div className='block'>
                            <textarea onChange={(e) => setBlog(e.target.value)} type="text" placeholder={blog} className="textarea textarea-bordered w-full mt-2" />
                            <button className='w-full btn btn-warning mt-2' type="submit">update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateBlog