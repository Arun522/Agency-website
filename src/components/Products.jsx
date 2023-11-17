import React from 'react'
import img1 from '../assets/pana.png'
import img2 from '../assets/img123.jpeg'

const Products = () => {
  return (
    <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id="product">
            <div className='md:w-11/12 mx auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={img1} />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like 
                    we did</h2>
                    <p className='md:2-3/4 text-sm text-neutralGrey mb-8'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>
            </div>
        </div>

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/3'>
                    <img src={img2} />
                </div>

                {/* Stats */}
                <div className='md:2/3 mx-auto'>
                    <div>
                        <p className='md:4/5 text-sm text-neutralGrey mb-8 leading-7'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book.
                        </p>
                        <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                        <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Association</p>
                        <div>
                            <div className='flex items-center gap-8 flex-wrap'>
                                <img src='/src/assets/logo1.png' className='cursor-pointer' />
                                <img src='/src/assets/logo2.png' className='cursor-pointer' />
                                <img src='/src/assets/logo3.png' className='cursor-pointer' />
                                <img src='/src/assets/logo4.png' className='cursor-pointer' />
                                <img src='/src/assets/logo5.png' className='cursor-pointer' />
                                <img src='/src/assets/logo6.png' className='cursor-pointer' />
                                <img src='/src/assets/logo7.png' className='cursor-pointer' />

                                <div className='flex items-center gap-8'>
                                    <a href='/' className='font-bold text-brandPrimary  hover:text-neutral-700'>
                                    Meet All Customer -></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Products