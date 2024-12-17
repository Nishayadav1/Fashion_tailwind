import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-sm text-blue-500 uppercase tracking-wider mb-2"
          >
            Top Rated Products for You
          </p>
          <h2
            data-aos="fade-up"
            className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
          >
            Best Products
          </h2>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto"
          >
            Discover our exclusive range of top-rated products designed to meet
            your needs. High quality, unique designs, and customer satisfaction
            guaranteed.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-4"
            >
              {/* Image section */}
              <div className="h-[150px] mb-4">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Details section */}
              <div className="text-center">
                {/* Star rating */}
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <h3 className="text-xl font-bold mb-2">{data.title}</h3>

                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-4">
                  {data.description}
                </p>

                <button
                  onClick={handleOrderPopup}
                  className="text-orange-900 bg-yellow-500 hover:bg-secondary hover:text-black hover:scale-105 duration-300  py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
