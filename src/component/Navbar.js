import { useEffect } from "react";

const { Link } = require("react-router-dom");
const Navbar = () => {
  return (
    <nav className="grid md:grid-cols-3 lg:grid-cols-6 border-b-2 align-center py-[20px]" style={{ textAlign: "center" }}>
      <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/" style={{ padding: "10px" }}>
        Home
      </Link>
      <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/profile" style={{ padding: "10px" }}>
        Profile
      </Link>
      <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/rewards" style={{ padding: "10px" }}>
        Rewards
      </Link>
      <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/history" style={{ padding: "10px" }}>
        History
      </Link>
      {/* <Link to="/create" style={{ padding: "10px" }}>
        Create Sales
      </Link> */}
      <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/voucher" style={{ padding: "10px" }}>
        Voucher
      </Link>
      <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/login" style={{ padding: "10px" }}>
        Login
      </Link>
    </nav>
  );
};
export default Navbar;
