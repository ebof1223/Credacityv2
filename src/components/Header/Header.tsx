import Header__Issuer from "./Header__Issuer";
import Header__Type from "./Header__Type";

const Header = () => {
  return (
    <div rounded-md shadow-sm role="group">
      <Header__Type />
      <Header__Issuer />
    </div>
  );
};

export default Header;
