import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs", {
    next: {
      revalidate: 30, // Revalidate every 30 seconds
    },
  });
  const blogs = await res.json();

  return (
    <>
      <Header />
      <Banner />
      <LatestBlogs blogs={blogs} />
      <Footer />
    </>
  );
};

export default HomePage;
