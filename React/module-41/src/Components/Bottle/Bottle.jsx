import "./Bottle.css";
import PropTypes from "prop-types";
const Bottle = ({ bottle, handlePurchase }) => {
  const { name, seller, price, img } = bottle;
  return (
    <div className={"bottle"}>
      <h3>Name : {name}</h3>
      <p>Seller : {seller}</p>
      <p>Price : {price}</p>
      <img src={img} alt="" />
      <br />
      <button
        onClick={() => {
          handlePurchase(bottle);
        }}
      >
        Purchase
      </button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handlePurchase: PropTypes.func.isRequired,
};

export default Bottle;
