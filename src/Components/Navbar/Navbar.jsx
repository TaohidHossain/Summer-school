import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
      }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/courses">All Courses</Link></li>
                        <li><Link to="/teachers">Teachers</Link></li>
                    {
                        user && <li><Link to="/my-courses">My Courses</Link></li>
                    }
                    </ul>
                </div>
                <img className="h-16 mr-4" src="https://cdn.dribbble.com/users/635128/screenshots/1693908/media/ed1123055175d85e52468d7e1fe4efd6.jpg?compress=1&resize=400x300&vertical=top" />
                <Link className="btn btn-ghost normal-case text-xl">Kobayashi</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/courses">All Courses</Link></li>
                    <li><Link to="/Teachers">Teachers</Link></li>
                    {
                        user && <li><Link to="/my-courses">My Courses</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-2">
                            <img title={user.displayName} src={user.photoURL} className="w-16 h-16 rounded-full"/>
                            <button className="btn" onClick={handleLogOut}>Logout</button>
                        </div>
                        :
                        <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    )
}

export default Navbar;