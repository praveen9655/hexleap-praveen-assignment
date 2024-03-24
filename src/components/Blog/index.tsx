import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import SingleBlog2 from "./SingleBlog2";
import blogData from "./blogData";
import blogData2 from "./blogData2";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section
  id="blog"
  className="py-16 md:py-20 lg:py-28"
  
>
<div className="container py-8 md:py-8 lg:py-8">
   <h1
  className="mb-4 block text-l font-bold p-2 sm:text-2xl"
 
>
  <span className="p-2"  style={{ borderBottom: "2px solid #738FFF" }}>Sports</span>
</h1>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-5">
          {blogData2.map((blog2) => (
            <div key={blog2.id} className="w-full">
              <SingleBlog2 blog2={blog2} />
            </div>
          ))}
          <div className="group relative overflow-hidden p-3 rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">       
         <Link
          href="/"
          className="relative block aspect-[3/3]"
        >
          <Image src="/images/blog/b2-picAd.png" alt="image" fill />
        </Link>
        <div className=" flex flex-col  pt-2 " >

  <h6>
    <Link
      href="/"
      className="font-bold"
    >
      Advertisement title
    </Link>
  </h6>
  <p className="text-xs  mt-2">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>

      </div>
        </div>
        
      </div>

      <div className="container py-8 md:py-8 lg:py-8 bg-white dark:bg-gradient-to-b from-gray-800 to-gray-900">
        <SectionTitle
          title="Collection Spotlight"
          paragraph="Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;