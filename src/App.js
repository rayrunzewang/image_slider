import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
      description: 'Introduction to Slide 1',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      description: 'Introduction to Slide 2',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
      description: 'Introduction to Slide 3',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
      description: 'Introduction to Slide 4',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
      description: 'Introduction to Slide 5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
      {/* Slide Image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-t-xl bg-center bg-cover duration-500'>
      </div>

      {/* text description arae*/}
      <div className='w-full h-[30%] bg-black/10   p-4'>
        <p className='text-black'>{slides[currentIndex].description}</p>
      </div>

      {/* left Arrow*/}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft
          onClick={() => handleSlideChange((currentIndex - 1 + slides.length) % slides.length)}
          size={30}
        />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight
          onClick={() => handleSlideChange((currentIndex + 1) % slides.length)}
          size={30}
        />
      </div>

      {/* Slide Indicators */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => { goToSlide(slideIndex) }}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-black' : 'text-gray-300'}`}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default App;
