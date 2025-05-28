import styles from "./Banner.module.css";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className={`${styles.banner_container} relative w-full h-[85vh] bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center px-4`}
    >
      {/* Glass Content Box */}
      <div className="bg-white backdrop-blur-md rounded-xl p-10 md:p-16 max-w-6xl w-full text-center shadow-lg animate-fadeIn border border-white/20">
        {/* Date & Metadata */}
        <div className="flex justify-center items-center gap-3 mb-6 text-sm text-cyan-600 font-medium">
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-cyan-600" />
            29 Jan 2024
          </span>
          <span className="w-[1px] h-4 bg-cyan-600"></span>
          <span className="flex items-center gap-2">
            <FaUser className="text-cyan-600" />
            Talat Mahmud
          </span>
          <span className="w-[1px] h-4 bg-cyan-600"></span>
          <span>5 min read</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-600 to-pink-400 bg-clip-text text-transparent mb-4">
          The Rise of Quantum Computing
        </h1>

        {/* Description */}
        <p className="text-md md:text-lg text-slate-400 italic max-w-xl mx-auto">
          Quantum computers are poised to revolutionize industries. Explore how
          this emerging technology is breaking the boundaries of what was once
          considered impossible.
        </p>
      </div>
    </section>
  );
};

export default Banner;
