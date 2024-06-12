import { cuisines } from "@/public/cuisines";

export default function FilterBar({
  type,
  onChange,
  animal,
  child,
  onAnimalChange,
  onChildChange,
}) {

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
    </div>
  );
}
