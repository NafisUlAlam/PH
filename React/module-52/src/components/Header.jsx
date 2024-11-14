import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo ">
        <img src={logo} className="w-[300px]" alt="" />
      </div>
      <h2 className="text-gray-400">Journalism without fear or favor</h2>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
