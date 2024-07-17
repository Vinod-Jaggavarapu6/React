import { LOGO_URL } from "../utils/constants";
const Logo = () => {
  return (
    <div>
      <img src={LOGO_URL} className="w-24" alt="App Logo" />
    </div>
  );
};

export default Logo;
