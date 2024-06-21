import "./Category.css";

const Category = () => {
  return (
    <div>
      <h2 className="sideBarTitles">Category</h2>

      <div>
        <label className="sidebarLabelWrapper">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebarLabelWrapper">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Running
        </label>
        <label className="sidebarLabelWrapper">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Trail
        </label>
        <label className="sidebarLabelWrapper">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </div>
  );
};

export default Category;
