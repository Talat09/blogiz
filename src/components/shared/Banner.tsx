import Link from "next/link";
import styles from "./Banner.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <section className="py-20 px-4 bg-white ">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to DevBlog
        </h1>
        <p className="text-xl text-base-content/60 mb-8 max-w-2xl mx-auto">
          Discover the latest insights, tutorials, and trends in web
          development. Join our community of developers sharing knowledge and
          building the future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register" passHref>
            <button className="btn  btn-lg w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white hover:bg-accent transition-colors duration-300">
              Get Started
              <AiOutlineArrowRight className="inline-block h-5 w-5" />
            </button>
          </Link>
          <Link href="/blogs" passHref>
            <button className="btn btn-outline btn-lg w-full sm:w-auto">
              Read Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
