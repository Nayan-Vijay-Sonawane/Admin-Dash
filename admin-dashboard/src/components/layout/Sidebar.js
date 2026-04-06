import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <div style={styles.sidebar}>
            <h2>Admin</h2>
            <nav>
                <Link to="/dashboard">Dashboard</Link><br/>
                <Link to="/users">Users</Link><br/>
                <Link to="/orders">Orders</Link>
            </nav>
        </div>
    );
};

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    background: "#111827",
    color: "white",
    padding: "20px"
  }
};

export default Sidebar;

