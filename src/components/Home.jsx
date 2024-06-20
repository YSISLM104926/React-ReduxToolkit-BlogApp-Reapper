import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteBlogIn } from '../features/BlogsSlice';

const Home = () => {
    const { blogs } = useSelector(state => state.blogsRe);
    console.log(blogs)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        dispatch(DeleteBlogIn({id}));
    }
    return (
        <div>
            <h1 className='text-center font-bold mb-6 mt-6'>Table CRUD using Redux-Toolkit</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Blog</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map(blog => (
                                <tr key={blog.id}>
                                    <td>{blog.id}</td>
                                    <td>{blog.author}</td>
                                    <td>{blog.Title}</td>
                                    <td>{blog.Blog}</td>
                                    <td><button className="btn btn-success">
                                        <Link
                                            to='/update-blog' state={{id:blog.id, author:blog.author, Title:blog.Title,Blog:blog.Blog}}
                                        >
                                            Update
                                        </Link>
                                    </button></td>
                                    <td><button onClick={() => handleDelete(blog.id)} className="btn btn-error">delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home