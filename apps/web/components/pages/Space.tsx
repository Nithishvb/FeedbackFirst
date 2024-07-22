import Link from "next/link";
import useFetch from "../../lib/hooks/useFetch";
import SpaceCards from "../spaceCards/SpaceCards";

export default function Spaces() {
  const { data } = useFetch("http://localhost:3000/api/spaces");

  return (
    <section className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((val) => (
        <Link href={`/dashboard/space/${val.id}/text`}>
          <SpaceCards title={val.title} description={val.description} />
        </Link>
      ))}
    </section>
  );
}
