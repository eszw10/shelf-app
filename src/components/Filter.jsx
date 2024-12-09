import PropTypes from "prop-types";

const Filter = ({ data, handleClick }) => {
  console.log(typeof data.value);

  return (
    <button
      className={`${
        data.isActive ? "bg-main text-white" : ""
      } p-2 cursor-pointer bg-gray-200 rounded-xl w-fit font-semibold`}
      onClick={() => handleClick(data.value)}
    >
      <p>{data.value}</p>
    </button>
  );
};

export default Filter;

Filter.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func,
};
