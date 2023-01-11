import { useEffect } from "react";

const { Link } = require("react-router-dom");
const Navbar = () => {
  return (
    <nav style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/" style={{ padding: "10px" }}>
        Home
      </Link>
      <Link to="/profile" style={{ padding: "10px" }}>
        Profile
      </Link>
      <Link to="/rewards" style={{ padding: "10px" }}>
        Rewards
      </Link>
      <Link to="/history" style={{ padding: "10px" }}>
        History
      </Link>
      {/* <Link to="/create" style={{ padding: "10px" }}>
        Create Sales
      </Link> */}
      <Link to="/voucher" style={{ padding: "10px" }}>
        Voucher
      </Link>
      <Link to="/login" style={{ padding: "10px" }}>
        Login
      </Link>
    </nav>
  );
};
export default Navbar;
