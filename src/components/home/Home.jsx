import React from 'react';
import  '../../media/style/style.css';
import Natural1 from '../../media/image/darkp2.jpg';
import Natural2 from '../../media/image/darkp2.jpg';
import Natural3 from '../../media/image/darkp3.jpg';
import Natural4 from '../../media/image/img-n1.jpg';
import Natural5 from '../../media/image/img-n2.webp';
import Natural6 from '../../media/image/img-n3.jpg';
import Carousel from './Carousel';

function Home() {
  return (
    <div className='section-wrapper'>
      <div className='section-1 bg-[length:100%_100%] h-screen flex items-center from-white '>
        <div className='text-6xl grediant-black h-screen'>
          <h1 className='font-mono text-white w-2/5 text-center p-8'>The antidote to exhaustion isn’t rest. It’s nature.</h1>
        </div>
      </div>
      <div className='section-2 bg-gray-900 text-white'>
        <h1 className='font-mono text-white w-2/5 p-8 text-4xl'>Our Natural</h1>
        <div className='flex'>
          <div className='clm-1 clm border-solid p-10 rounded-lg'>
            {/* <img src={Natural1}  width="350" height="300"/> */}
            <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
            <p>
              Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
            </p>
          </div>
          <div  className='clm-2 clm p-10 border-solid rounded-lg'>
            {/* <img src={Natural2}  width="350" height="300"/> */}
            <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
            <p>
              Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
            </p>
          </div>
          <div  className='clm-3 clm p-10 border-solid rounded-lg'>
            {/* <img src={Natural3}  width="350" height="300"/> */}
            <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
            <p>
              Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
            </p>
          </div>
          <div  className='clm-3 clm p-10 border-solid rounded-lg'>
            {/* <img src={Natural3}  width="350" height="300"/> */}
            <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
            <p>
              Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
            </p>
          </div>
        </div>
        <div className='body-content p-8'>
          <h1 className='font-mono text-white w-2/5 text-4xl mb-10'>Testimonial</h1>
          <div className='flex justify-between ... flex-wrap'>
            <div className='photo-1 photo'>
              <img className='h-96 rounded-lg' src={Natural1}  width="350"/>
              <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
              <p>
                Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
              </p>
            </div>
            <div className='photo-2 photo'>
              <img className='h-96 rounded-lg' src={Natural2}  width="350" height="300"/>
              <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
              <p>
                Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
              </p>
            </div>
            <div className='photo-3 photo'>
              <img className='h-96 rounded-lg' src={Natural3}  width="350" height="300"/>
              <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
              <p>
                Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
              </p>
            </div>
            <div className='photo-1 photo'>
              <img className='h-96 rounded-lg' src={Natural4}  width="350"/>
              <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
              <p>
                Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
              </p>
            </div>
            <div className='photo-2 photo'>
              <img className='h-96 rounded-lg' src={Natural5}  width="350" height="300"/>
              <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
              <p>
                Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
              </p>
            </div>
            <div className='photo-3 photo'>
              <img className='h-96 rounded-lg' src={Natural6}  width="350" height="300"/>
              <p className='text-2xl mb-8 mt-8'>Nothing compares</p>
              <p>
                Nothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
              </p>
            </div>
          </div>
          <div className='p-10'>
            <div className='flex justify-center items-center gap-2 '>
              <Carousel/>
            </div>
          </div>
          <h1 className='font-mono text-white w-2/5 text-4xl mb-10 mt-10'>About US</h1>
          <div className='mb-10'>
            <div>
              <p>
                <b>N</b>othing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’sNothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’sNothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’sNothing compares to nature‘s beauty, as these famous quotes about nature agree. From spring‘s hopeful new blooms and fall’s exquisite array of colors to winter’s magic and summer’s
              </p>
            </div>
          </div>
          <h1 className='font-mono text-white text-4xl mb-10 mt-16'>Subscribe To Our Newsletter</h1>
          <div className='sub-wrapper  h-56 bg-lime-600 rounded-lg'>
              <div className='p-8 text-center'>
                <div className='sub-fields pt-4'>
                  <form method='post' action='#'>
                    <p className='text-3xl p-2'>Subscribe Me...</p>
                    <input className='p-8 rounded-lg w-1/2 h-16 text-black' type="email" id="email" name="email" placeholder="example@gmail.com"/>
                    <button name='submit' className='rounded-lg bg-white text-amber-500 ml-1 p-5'>Subscribe</button>
                  </form>
                </div>
              </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Home
