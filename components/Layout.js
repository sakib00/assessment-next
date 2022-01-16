import { useEffect, useMemo, useState } from 'react';
import { SideNav } from './navigation/SideNav';
import FavoritesContext from '../contexts/FavoriteContext';

export default function Layout({ children }) {
  const [favorites, setFavorites] = useState([]);
  const value = useMemo(() => ({ favorites, setFavorites }), [favorites]);

  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem('favorites'));
    if (data) {
      setFavorites(data);
    } else {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  return (
    <div className='flex flex-col md:flex-row md:h-screen w-full'>
      <SideNav />
      <div className='main-content w-full flex-auto overflow-y-auto'>
        <div className='flex flex-col justify-between min-h-screen'>
          <FavoritesContext.Provider value={value}>
            <main className='sm:px-2 md:px-6 lg:px-12 xl:px-16 py-10'>
              {children}
            </main>
          </FavoritesContext.Provider>
        </div>
      </div>
    </div>
  );
}
