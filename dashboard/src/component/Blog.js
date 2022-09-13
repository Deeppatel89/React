import React from 'react'
import './Blog.css'
const blog = [
    {
        number: 103,
        blogname: 'Campaign',
        icon: <i class="fa-solid fa-tag" id='blog_icon'></i>,
        color:"orange"
    },
    {
        number: 230,
        blogname: 'Customers',
        icon: <i class="fa-solid fa-tag" id='blog_icon'></i>,
        color:"yellow"
    },
    {
        number: 323,
        blogname: 'Queries',
        icon: <i class="fa-solid fa-tag" id='blog_icon'></i>,
        color:"red"
    },
    {
        number: 870,
        blogname: 'Opens',
        icon: <i class="fa-solid fa-tag" id='blog_icon'></i>,
        color:"indigo"
    }
]

const Blog = () => {
    return (
        <div className='blog-main-container'>
            {blog.map((e) => {
                return (
                    <div className="blog-container" >
                        <div className="blog-name">
                            <h2>{e.number}</h2>
                            <p>{e.blogname}</p>
                        </div>
                        <div className="blog-icon">
                            {e.icon}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Blog