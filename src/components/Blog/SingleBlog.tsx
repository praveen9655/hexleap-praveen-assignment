import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, time, image, paragraph, button } = blog;
  const { theme } = useTheme();

  return (
    <>
      <div className="group relative overflow-hidden rounded-sm  " style={{backgroundImage: `url(${theme === "light" ? 'images/blog/bg-light.png' : 'images/blog/bg.png'})`, backgroundSize: "cover"}}>
        <Link href="/" className="relative block aspect-[40/65] w-full">
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8 flex flex-col justify-center items-center">
          <h3>
            <Link href="/" className="mb-4 block text-l font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
              {title}
            </Link>
          </h3>
          <h6 className="mb-4 block text- font-light text-black hover:text-primary dark:text-white  sm:text-1xl">
            {time}
          </h6>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="inline-flex items-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded w-full">
              {button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
