import { Link } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import "./card.scss";
import { useNavigate } from "react-router-dom";

function Card({ item, showDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await apiRequest.delete(`/posts/${item.id}`);
      navigate(0); // reloads the page after deletion
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            {showDelete && (
              <div className="icon" onClick={handleDelete}>
                <img
                  src="https://www.clipartmax.com/png/small/184-1848723_trash-can-outline-free-icon-trash-can-vector-free-black.png"
                  alt="Delete"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
