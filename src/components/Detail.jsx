import PropTypes from "prop-types";

const Detail = ({ data }) => {
  return (
    <div className="w-1/2 bg-main">
      <img src={data.image} alt="" />
      <p>{data.title}</p>
      <p>{data.author}</p>
      <p>{data.progress}%</p>
      <button>Delete</button>
      <button>Update</button>
    </div>
  );
};

export default Detail;

Detail.propTypes = {
  data: PropTypes.object,
};
