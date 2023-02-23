import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/countries")}>
        <p>Homepage</p>
      </button>
      <button onClick={() => navigate("/training")}>
        <p>Entrainement</p>
      </button>
      <button onClick={() => navigate("/geo-game")}>
        <p>Geo Game</p>
      </button>
    </div>
  );
};

export default Header;
