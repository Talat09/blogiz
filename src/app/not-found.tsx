import Image from "next/image";
import ErrorImage from "@/assets/error.gif";
const NotFoundPage = () => {
  return (
    <div className="w-[80%] mx-auto my-5 rounded-lg">
      <Image
        src={ErrorImage}
        width={1000}
        height={500}
        alt="not found page"
        className="w-full rounded-lg"
      />
    </div>
  );
};

export default NotFoundPage;
