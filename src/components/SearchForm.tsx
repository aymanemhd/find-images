import { IoSearchOutline } from "react-icons/io5";

const SearchForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6 text-sky-700">Aymane's image search</h1>
      <form className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter something..."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <IoSearchOutline />
        </button>
      </form>
    </div>
  )
}

export default SearchForm;
