import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    blogs: [{id:1, author:'Md. Likhon Mia', Title: 'LLMs', Blog:'LLMs are greate'}],
    length: 1
}

export const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        showBlogs: (state) => state,
        AddBlogIn: (state, action) => {
            state.blogs.push(action.payload);
            state.length = state.length + 1;
        },
        DeleteBlogIn: (state, action) => {
            const { id } = action.payload;
            console.log('payloadId', id);
            state.blogs = state.blogs.filter(blog => blog.id !== id);
            state.length = state.length - 1;
        },
        UpdateBlogIn: (state, action) => {
            const { id, author, Title, Blog } = action.payload;
            const updatedBlogs = state.blogs.map(blog => {
                if (blog.id === id) {
                    return {
                        ...blog,
                        author: author,
                        Title: Title,
                        Blog: Blog
                    };
                }
                return blog;
            });
            state.blogs = updatedBlogs;
        }
    }
})

export default blogsSlice.reducer;
export const { showBlogs, AddBlogIn, UpdateBlogIn, DeleteBlogIn } = blogsSlice.actions;
