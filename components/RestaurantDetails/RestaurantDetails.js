import Link from "next/link";
import Image from "next/image";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useUser } from "../UserContext/UserContext.js";

export default function RestaurantDetails({ restaurant, comments }) {
  const { user } = useUser();

  return (
    <div className="grid w-3/4 mx-auto mt-2 bg-gray-100 rounded-lg shadow-md ">
      <Link
        href="/"
        className="absolute flex px-5 py-2 text-sm text-gray-500 bg-opacity-0 transition-colors duration-200 bg-white border border-purple-500 rounded-lg gap-x-2  hover:bg-gray-100"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Go back</span>
      </Link>

      <h1 className="text-gray-800 text-2xl mt-10 mb-6 text-center">
        {restaurant.name}
      </h1>
      <Image
        className="block mx-auto rounded-lg mb-5 shadow-md relative"
        width={100}
        height={200}
        layout="responsive"
        src={restaurant.image}
        alt={restaurant.name}
      />
      {restaurant.link && (
        <Link
          className="block text-blue-600 hover:text-blue-800 hover:underline  text-sm no-underline text-left ml-5"
          href={restaurant.link}
          target="_blank"
        >
          Visit {restaurant.name}`s website
        </Link>
      )}
      {restaurant.menu && (
        <Link
          className="block text-blue-600 hover:text-blue-800 hover:underline mt-2 text-sm no-underline text-left ml-5"
          href={restaurant.menu}
          target="_blank"
        >
          See the menu
        </Link>
      )}
      <p className="block text-blue-600 hover:text-blue-800  my-4 text-sm no-underline text-right ">
        <strong>Address:</strong> {restaurant.address}
      </p>
      <Link
        className="block text-right font-bold text-green-600 hover:text-red-800 hover:underline my-4 text-md no-underline"
        href={`https://www.google.com/maps/?q=${restaurant.coordinates.lat},${restaurant.coordinates.long}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get the directions on Google Maps
      </Link>
      <div className="mt-10">
        <Comments comments={comments} />
      {user && <CommentForm/>}
      </div>
    </div>
  );
}
