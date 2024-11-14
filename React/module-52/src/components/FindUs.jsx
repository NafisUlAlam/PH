import { FaFacebook, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us on</h2>
      <div className="join join-vertical *:bg-base-100 flex">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter /> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
