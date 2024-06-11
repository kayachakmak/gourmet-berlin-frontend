import { cuisines } from "@/public/cuisines";
import Link from "next/link";
// import { useSession } from "next-auth/react";

export default function FilterBar({
  type,
  onChange,
  animal,
  child,
  onAnimalChange,
  onChildChange,
}) {
  // const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between p-2 bg-gray-200 rounded-lg mt-2 pr-0">
      <div className="flex items-center">
        <select
          className="px-3 py-2 border-2 border-gray-300 rounded-md bg-white mr-4 text-sm"
          value={type}
          onChange={onChange}
        >
          <option value="">All Restaurants</option>
          {cuisines.map((cuisine, idx) => (
            <option key={idx} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
        <label className="mr-5 text-sm flex items-center">
          <input
            type="checkbox"
            checked={child}
            onChange={(e) => onChildChange(e)}
          />
          Children Friendly
        </label>
        <label className="mr-5 text-sm flex items-center">
          <input
            className="mr-2 text-blue-500"
            type="checkbox"
            checked={animal}
            onChange={(e) => onAnimalChange(e)}
          />
          Animal Friendly
        </label>
      </div>
      {/* {session && (
        <Link
          className="text-white mb-1  hidden lg:max-2xl:block bg-red-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          href="/create"
        >
          Add a New Restaurant
        </Link>
      )} */}
    </div>
  );
}
