import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-texts container mx-auto flex flex-col h-full gap-5 items-start justify-center  text-violet-50 ">
        <h1 className="slider-title text-7xl w-4/5 font-bold uppercase space-font">
          {image.headline}
        </h1>
        <p className="slider-description w-3/5">{image.body}</p>
        <Link
          to={`/products/${image.category}`}
          className="slide-btn uppercase h-14 w-96 text-xl font-medium border border-violet-50 hover:text-orange-50 mt-5 duration-300"
        >
          <span className="btn z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            {image.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
