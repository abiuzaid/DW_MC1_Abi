import './App.css';
import userData from "./data.json"
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container mt-3">
        {
          userData.map((item) => (
            <Link to={`/user-details/${item.id}`} className="text-decoration-none">
              <div key={item.id} className="w-100 d-flex align-items-center mb-3 p-3 rounded shadow" style={{backgroundColor: '#121e42'}}>
                <div className="me-3" style={{ width:"5rem",height:"5rem" }}>
                  <img src={item.image} alt={item.username} className="w-100 rounded-circle" style={{ width:"5rem",height:"5rem",objectFit:"cover" }}/>
                </div>
                <div>
                  <div className="fw-bold text-light">@{item.username}</div>
                  <div className="fw-bold text-light">Followers: {item.follower}</div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default Home;
