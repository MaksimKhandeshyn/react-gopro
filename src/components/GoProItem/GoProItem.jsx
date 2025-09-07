import PropTypes from "prop-types"; // ES6
// Деструктуризация данных в пропсах

export const GoProItem = ({ info, test }) => {
  const { title, price, photo } = info;
  return (
    <li>
      <h3>{title}</h3>
      <p>{price}</p>
      <img src={photo} alt={title} />
    </li>
  );
};
GoProItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  photo: PropTypes.string,
  test: PropTypes.string,
};
