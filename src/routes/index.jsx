import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import AddBlog from '../components/AddBlog'
import UpdateBlog from '../components/UpdateBlog'

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-blog' element={<AddBlog/>} />
                <Route path='/update-blog' element={<UpdateBlog/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index