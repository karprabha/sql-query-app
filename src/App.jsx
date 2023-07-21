import { Outlet, NavLink } from "react-router-dom";

function App() {
    const resolveNavLinkClassName = ({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : "";

    return (
        <>
            <div id="sidebar">
                <h1>SQL QUERY APP</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to={`/`}
                                className={resolveNavLinkClassName}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/history`}
                                className={resolveNavLinkClassName}
                            >
                                History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/bookmarks`}
                                className={resolveNavLinkClassName}
                            >
                                Bookmarks
                            </NavLink>
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
