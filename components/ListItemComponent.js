import { useContext, useEffect, useState } from 'react';
import FavoritesContext from '../contexts/FavoriteContext';

export const ListItemComponent = ({ author }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    let found = favorites.find((item) => item._id === author._id);
    if (found) {
      setIsFavorited(true);
    } else {
      setIsFavorited(false);
    }
  }, []);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorited) {
      let arr = favorites.filter((item) => item._id !== author._id);
      setFavorites(arr);
      setIsFavorited(false);
    } else {
      setFavorites([...favorites, author]);
      setIsFavorited(true);
    }
  };

  return (
    <div className='px-10 py-10 border rounded-lg  bg-white border-gray-100 shadow-lg'>
      <div className='space-y-4'>
        <div className='flex items-center justify-between pb-4 border-b border-gray-200 space-x-3'>
          <div>
            <h3 className='text-lg font-bold'>{author.name}</h3>
          </div>
          <div className='' onClick={toggleFavorite}>
            <div
              className={`cursor-pointer shadow-md rounded-full p-2 transition duration-200 ${
                isFavorited
                  ? 'text-white bg-orange-500 hover:bg-orange-400'
                  : 'text-orange-500  hover:bg-gray-200 '
              } `}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 '
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
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
            href={author.link}
            className='text-sm  text-sky-500 hover:text-sky-800 visited:text-purple-400 italic'
          >
            Wikipedia
          </a>
        </div>
        <p className='text-sm line-clamp-2'>{author.bio}</p>
      </div>
    </div>
  );
};
