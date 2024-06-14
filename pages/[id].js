import RestaurantDetails from "@/components/RestaurantDetails/RestaurantDetails";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function RestaurantDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(` https://gourmet-berlin-bce140ecdfc9.herokuapp.com/${id}`);
  console.log(data)

  if (isLoading) <h1>Loading...</h1>;

  if (!data) {
    return;
  }

  const { restaurant, comments } = data;

  return <RestaurantDetails restaurant={restaurant} comments={comments} />;
}
