import { useEffect, useState } from 'react';
import { getArticles } from './components/articles-api';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Loader from "./components/Loader/Loader";
import ImageGallery from './components/ImageGallery//ImageGallery.jsx';
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectImageUrl, setSelectImageUrl] = useState("");



  useEffect(() => {
    if (query.trim()) {
      return;
    }

    async function fetchArticles() {
      try {
        loading(true);
        error(false);
        const data = await getArticles(query, page);
        setImages((prevState) => [...prevState, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false)
      }
    }

    fetchArticles();
  }, [page, query]);

  const handleSearch = async (searchImg) => {
    setQuery(searchImg);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    setSelectImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectImageUrl("");
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} loading={loading} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectImageUrl} />

    </div>
  )
};


