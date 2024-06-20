import shoes from "../../data/shoes";
import "./Recommended.css";

const Recommended = () => {
  const uniqueCompanies = [...new Set(shoes.map((shoe) => shoe.company))];

  return (
    <div className="recommendedWrapper">
      <h2>Recommended</h2>
      <ul className="BtnCompaniesWrapper">
        {uniqueCompanies.map((uniqueCompany) => {
          return (
            <li key={uniqueCompany}>
              <button className="btnsCompanies">{uniqueCompany}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recommended;
2;
