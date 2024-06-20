import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h1 className="mainTitleHidden">Choice of shoes</h1>
      <div className="logoContainer">
        <a href="#"></a>
      </div>

      <Category />
      <Price />
      <Colors />
    </section>
  );
};

export default Sidebar;
