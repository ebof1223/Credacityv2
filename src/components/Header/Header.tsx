import Issuer from "./Issuer";
import Type from "./Type";

const Header = () => {
  return (
    <div rounded-md shadow-sm role="group">
      <Type />
      <Issuer />
    </div>
  );
};

export default Header;
