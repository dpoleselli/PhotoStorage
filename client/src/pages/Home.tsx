import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Photo Storage</h1>
      <ul>
        <li>
          <Link to="/photos">My Photos</Link>
        </li>
      </ul>
    </div>
  );
};
