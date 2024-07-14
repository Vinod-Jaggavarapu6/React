import { LOGO_URL } from "../utils/constants";
const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LOGO_URL} className="logo" alt="App Logo" />
    </div>
  );
};

export default Logo;
