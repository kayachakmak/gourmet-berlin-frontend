import { useRouter } from "next/router";
import { mutate } from "swr";
import { useSession } from "next-auth/react";
import { getCurrentDate } from "@/utils/utils";

export default function CommentForm() {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    const date = getCurrentDate();
    data.restaurantID = id;
    data.username = session.user.name;
    data.date = date;
    data.userimage = session.user.image;

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        mutate(`/api/restaurants/${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8">
      <div className="mb-6">
        <label
          htmlFor="comment"
          className="block mb-2 text-sm font-medium text-purple-500 "
        >
          We would like to hear about your experience!
        </label>
        <textarea
          name="comment"
          id="comment"
          cols="20"
          rows="7"
          required
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   "
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add your comment
      </button>
    </form>
  );
}
