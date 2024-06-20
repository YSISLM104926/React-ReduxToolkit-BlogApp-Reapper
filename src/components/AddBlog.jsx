import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddBlogIn } from '../features/BlogsSlice';

const AddBlog = () => {
    const { blogs:SeeAllBlogs } = useSelector(state => state.blogsRe);
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [blog, setBlog] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blogs = {
            id: SeeAllBlogs.length + 1,
            author:author,
            Title: title,
            Blog: blog
        }
        console.log(blogs);
        dispatch(AddBlogIn(blogs));
        navigate('/');
    }
    return (
        <div>
            <div>
                <h1 className='font-bold text-xl mt-12'>Update Blog</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-2 mt-4'>
                            <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" className="input input-bordered w-full" />
                            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="input input-bordered w-full" />
                        </div>
                        <div className='block'>
                            <textarea onChange={(e) => setBlog(e.target.value)} type="text" placeholder="Blog" className="textarea textarea-bordered w-full mt-2" />
                            <button className='w-full btn btn-warning mt-2' type="submit">update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlog