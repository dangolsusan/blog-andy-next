import { getSortedPostsData } from "@/lib/posts";
import ListItem from "../components/ListItem";

export default function SearchPage({
  params,
}: {
  params: { searchText: string };
}) {
  const posts = getSortedPostsData();

  const searchedData = posts?.filter((post) =>
    post.title.toLowerCase().includes(params?.searchText.toLowerCase())
  );

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      {searchedData?.length > 0 ? (
        <>
          <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
          <ul className="w-full">
            {searchedData.map((post) => (
              <ListItem key={post.id} post={post} />
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2
            style={{ textAlign: "center" }}
            className="text-4xl font-bold dark:text-white/90"
          >
            No Such Blog Found
          </h2>
        </>
      )}
    </section>
  );
}
