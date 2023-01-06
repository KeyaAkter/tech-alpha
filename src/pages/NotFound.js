import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found container mx-auto mt-20 text-center">
      <h2 className="text-4xl font-bold text-rose-500">404</h2>
      <p className="text-2xl mb-10">Page not found!</p>
      <Link to="/">
        <button className="bg-violet-700 text-violet-50 px-6 py-3 uppercase tracking-widest font-medium  hover:bg-orange-500 hover:text-orange-50 duration-300">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
