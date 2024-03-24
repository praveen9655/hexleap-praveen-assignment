import { Blog2 } from "@/types/blog2";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog2 }: { blog2: Blog2 }) => {
  const { title,image,totalEvent,sport } = blog2;
  return (
    <>
<div className="group relative overflow-hidden p-3 rounded-sm bg-white shadow-md duration-300 hover:shadow-xl dark:bg-dark dark:hover:shadow-gray-dark">       
         <Link
          href="/"
          className="relative block aspect-[3/5]"
        >
          <Image src={image} alt="image" fill />
        </Link>

  <h6 className="mt-2">
    <Link
      href="/"
      className="font-medium"
    >
      {title}
    </Link>
  </h6>
  <table className="table-fixed group bg-white dark:bg-gray-900 mt-2 w-full">
    <thead>
      <tr>
        <th className="px-2 py-1 font-light text-xs text-center">Total Events</th>
        <th className="px-2 py-1 font-light text-xs text-center">Sport</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-1 font-medium text-xs text-center">48 Events</td>
        <td className="px-4 py-1 font-medium text-xs text-center">Baseball</td>
      </tr>
    </tbody>
  </table>

      </div>
      
    </>
  );
};

export default SingleBlog;
