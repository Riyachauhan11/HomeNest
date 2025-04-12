import "./list.scss";
import Card from "../card/Card";

function List({ posts, showDelete }) {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} showDelete={showDelete} />
      ))}
    </div>
  );
}

export default List;
