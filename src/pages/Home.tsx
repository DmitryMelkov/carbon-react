import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="device-buttons">
        <Link to="/pc1" className="device-btn">ПК1</Link>
        <Link to="/pc2" className="device-btn">ПК2</Link>
        <Link to="/dryer1" className="device-btn">Сушилка1</Link>
        <Link to="/dryer2" className="device-btn">Сушилка2</Link>
      </div>
    </div>
  );
};

export default HomePage;