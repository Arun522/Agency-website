import React from 'react'

const Blog = () => {
    const blogs = [
        {id:1, title: "Creating Steamlined Safeguarding Process with OneRen", image: "/src/assets/img22.jpeg"},
        {id:2, title: "What are your Safeguarading responsibilities and how can you manage them?", image: "/src/assets/img111.jpeg"},
        {id:3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/img33.jpeg"}
    ]
  return (
    <div  className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id="faq">
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new Marketing</h2>
            <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>The Nexcent blog is the bast place to 
            read about the latest Membership insights, trends and more. See who is joining the community, read 
            about how are community is increasing the Membership income and lots more</p>
        </div>
    
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map( blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={blog.image} className='rounded-lg hover:scale-95 transition-all duration-300'/>
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute 
                    left-0 right-0 -bottom-12'>
                        <h3  className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                            <div className='flex items-center gap-8 justify-center'>
                                <a href='/' className='font-bold text-brandPrimary  hover:text-neutral-700'>
                                 Read more --></a>
                            </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Blog