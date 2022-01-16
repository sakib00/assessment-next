import { useState, useEffect } from 'react';
import { ListItemComponent } from '../components/ListItemComponent';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Pagination } from '../components/Pagination';

export default function Author() {
  const [authors, setAuthors] = useState([]);
  const [skipValue, setSkipValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentAuthor, setCurrentAuthor] = useState({});

  const getAuthorRequest = async () => {
    const url = `https://api.quotable.io/authors?limit=12&skip=${skipValue}`;
    setLoading(true);

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setAuthors(responseJson.results);
    } else {
      setAuthors([]);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    getAuthorRequest();
  }, [skipValue]);

  const paginateFront = () => {
    if (skipValue < 720) {
      setSkipValue(skipValue + 12);
      setCurrentPage(currentPage + 1);
    }
  };
  const paginateBack = () => {
    if (currentPage > 1) {
      setSkipValue(skipValue - 12);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Loader isLoading={loading} />
      <div className='body container mx-auto'>
        <h1 className='text-2xl font-bold mx-1 my-4 tracking-wide'>
          Author list
        </h1>
        <div className='body flex'>
          <div className='list grid grid-cols-4 gap-6'>
            {authors.length > 0 ? (
              authors.map((author) => (
                <div key={author._id} onClick={() => setCurrentAuthor(author)}>
                  <ListItemComponent author={author} />
                </div>
              ))
            ) : (
              <div className='flex items-center'>
                <h1 className='text-sm font-semibold  my-5'>
                  No Authors found.
                </h1>
              </div>
            )}
          </div>
        </div>
        <Modal
          currentAuthor={currentAuthor}
          setCurrentAuthor={setCurrentAuthor}
        />
        <div className='flex justify-end mt-5'>
          <Pagination
            paginateFront={paginateFront}
            paginateBack={paginateBack}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}
