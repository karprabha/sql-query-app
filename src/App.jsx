import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const resolveNavLinkClassName = ({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : "";

    return (
        <>
            <div id="header">
                <h1>SQL QUERY APP</h1>
                <div id="hamburger">
                    <button type="button" onClick={toggleSidebar}>
                        ☰
                    </button>
                </div>
            </div>
            <div
                id="sidebar"
                className={`${isSidebarOpen ? "open-sidebar" : ""}`}
            >
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
