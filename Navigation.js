import { Outlet, Link } from "react-router-dom";

function Navigation()
{
     
    return(
        <div>
            <nav>
                <ul >
                    <li>
                        <Link to="/">General</Link>
                    </li>
                    <li>
                        <Link to="/Business">Business</Link>
                    </li>
                    <li>
                        <Link to="/Entertainment">Entertainment</Link>
                    </li>
                    <li>
                        <Link to="/Health">Health</Link>
                    </li>
                    <li>
                        <Link to="/Sports">Sports</Link>
                    </li>
                    <li>
                        <Link to="/Technology">Technology</Link>
                    </li>
                </ul>
            </nav>
            <div>
            <Outlet/>
            </div>
        </div>
    )

}
export default Navigation;