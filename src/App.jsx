import { Outlet, Link } from "react-router-dom";

function App() {
    return (
        <>
            <div id="sidebar">
                <h1>SQL QUERY APP</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/history`}>History</Link>
                        </li>
                        <li>
                            <Link to={`/bookmarks`}>Bookmarks</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

export default App;
