import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { motion } from "framer-motion";

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

const SearchForm = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<Image[]>([]); // Specify type as Image[]
  const [totalPages, setTotalPages] = useState(0);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos/?query=${searchInput.current?.value}&client_id=LT9Zs6juDFhvFG-3eFETYIaSd-qLfCwv8GR9WeU0XsA`
      );
      console.log(data);
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  console.log(totalPages);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(searchInput.current?.value);
    fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []); // Fetch images on component mount

  return (
    <div className="flex flex-col items-center pt-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-sky-700">Image Search</h1>
      <form className="w-full max-w-md relative" onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            ref={searchInput}
            className="w-full p-4 rounded-full bg-white outline-sky-200"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-sky-700 text-white"
          >
            <IoSearchOutline />
          </button>
        </div>
      </form>
      <div className="images flex flex-wrap justify-center">
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="image m-2"
          >
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="w-full h-auto"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
