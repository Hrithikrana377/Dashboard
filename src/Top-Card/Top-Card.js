import "./Top-Card.css";

const TopCard = ({ title, value, image }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="right-side">
        <span className="title">{title}</span>
        <div className="fontW">{value}</div>
      </div>
    </div>
  );
};

export default TopCard;
