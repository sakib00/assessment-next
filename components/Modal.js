import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const backdrop = {
  visible: {
    opacity: 1,
    transition: { ease: 'easeOut', delay: 0.2, duration: 0.3 },
  },
  hidden: {
    opacity: 0,
    transition: { ease: 'easeIn', delay: 0.2, duration: 0.3 },
  },
};

const modal = {
  hidden: {
    y: '50vh',
    opacity: 0,
    transition: { ease: 'easeIn', duration: 0.3 },
  },
  visible: {
    y: '20vh',
    opacity: 1,
    transition: { ease: 'easeOut', delay: 0.2, duration: 0.3 },
  },
};

export const Modal = ({ currentAuthor, setCurrentAuthor }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentAuthor({});
  };

  useEffect(() => {
    if (Object.keys(currentAuthor).length !== 0) {
      setShowModal(true);
    }
  }, [currentAuthor]);

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <div className='fixed inset-0 z-50'>
          <motion.div
            className='absolute inset-0 bg-gray-900 bg-opacity-50'
            onClick={() => handleModalClose()}
            variants={backdrop}
            initial='hidden'
            animate='visible'
            exit='hidden'
          ></motion.div>
          <motion.div
            className='bg-gray-100 max-w-4xl rounded-2xl py-12 px-10 mx-auto relative'
            variants={modal}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <div className='flex items-center relative'>
              <span
                className='absolute top-0 right-0 text-gray-500 hover:text-gray-800 cursor-pointer'
                onClick={() => handleModalClose()}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>

              <div className='px-8 py-4'>
                <div className='flex items-center justify-between border-b border-gray-300'>
                  <div className=''>
                    <h1 className='text-xl font-semibold text-gray-800 tracking-wider leading-9 my-2'>
                      {currentAuthor.name}
                    </h1>
                    <h3 className='text-base font-normal text-gray-600 my-3'>
                      {currentAuthor.description}
                    </h3>
                  </div>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-20 w-20 text-gray-400 px-2'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
                <div className='flex items-center space-x-2 my-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                  <a
                    href={currentAuthor.link}
                    className='text-sm  text-sky-500 hover:text-sky-800 visited:text-purple-400 italic'
                  >
                    Wikipedia
                  </a>
                </div>
                <p className='font-light italic text-sm text-gray-600 my-2'>
                  Number of quotes: {currentAuthor.quoteCount}
                </p>
                <p className='text-sm text-gray-600 my-2'>
                  {currentAuthor.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
