import Link from "next/link";
import Image from "next/image";

export default function RestaurantPopuP({ restaurant }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md max-w-sm text-center">
      <div className="flex justify-end">
        {restaurant.isAnimalFriendly && (
          <Image
            src="https://img.freepik.com/premium-vector/pet-friendly-sign-stamp-with-paw-animal-icon-sticker-allowed-entrance-dog-cat_352905-715.jpg"
            alt="Animal friendly logo"
            width={60}
            height={60}
          />
        )}
        {restaurant.isChildFriendly && (
          <Image
            src="https://en.pimg.jp/028/868/870/1/28868870.jpg"
            alt="Child friendly logo"
            width={60}
            height={60}
          />
        )}
      </div>
      <h2 className="text-brown text-lg mb-2">{restaurant.name}</h2>
      <p className="text-gray-600 text-base mb-4">
        <strong>{restaurant.type}</strong>
      </p>

      <Image
        className="rounded-lg mb-4"
        src={restaurant.image}
        alt={restaurant.name}
        width={100}
        height={100}
        layout="responsive"
      />

      <Link
        className="block text-plum no-underline mb-4 hover:underline"
        href={`https://www.google.com/maps/?q=${restaurant.coordinates.lat},${restaurant.coordinates.long}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Address:</strong> {restaurant.address}
      </Link>

      <Link href={`/${restaurant.id}`}>See More Details</Link>
    </div>
  );
}
