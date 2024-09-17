import React from 'react'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  return (
    <>
          {/* Testimonials Section */}
          <section className="testimonials dark:bg-slate-800 ">
        <h2 className='pb-[50px] text-2xl font-bold text-black dark:text-white'>Testimonials <span className='text-pink-500 font-semibold hover:text-pink-400'>&</span> Success <span className='text-pink-500 font-semibold hover:text-pink-400'>Stories</span></h2>

        <div className="testimonials-grid text-black dark:text-black">
          <div className="testimonial">
            {/* Use a valid image path or placeholder */}
            <img src="https://via.placeholder.com/50" alt="Innovator" />
            <blockquote>
              "This platform has been instrumental in scaling my startup and
              securing funding!"
            </blockquote>
            <p className='font-bold'>- Jane Doe, Startup Founder</p>
          </div>
          <div className="testimonial">
            {/* Use a valid image path or placeholder */}
            <img src="https://via.placeholder.com/50" alt="Researcher" />
            <blockquote>
              "Collaborating with other researchers has never been easier. A
              great tool for innovation."
            </blockquote>
            <p className='font-bold'>- John Smith, Researcher</p>
          </div>
         </div>
          <Link to=''><span className='pt-10 text-pink-500 cursor-pointer hover:underline'>see more</span></Link>
      </section>
    </>
  )
}

export default Testimonials
