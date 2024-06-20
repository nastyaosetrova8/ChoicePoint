import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import "./Card.css";

const Card = () => {
  return (
    <div className="cardWrapper">
      <div className="imgWrapper">
        <img src="" alt="Shoe" />
      </div>
      <div className="detailsWrapper">
        <h3 className="cardTitle">Shoe</h3>
        <div className="ratingWrapper">
          <AiFillStar className="ratingStar" />
          <p> (4 reviews)</p>
        </div>

        <div className="priceWrapper">
          <p className="cardPrice">
            <del>$300</del> <ins>200</ins>
          </p>
          <BsFillBagHeartFill className="cardBag" />
        </div>
      </div>
    </div>
  );
};

export default Card;
