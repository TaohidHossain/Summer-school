import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider";
import { updateProfile } from "@firebase/auth";

const Registration = () => {
    const [error, setError] = useState("");
    const { createUser,logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){ setError("Password cannot be less than 6 charecter");return;}
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateProfile(result.user,{
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    logOut();
                    navigate("/login");
                })
            })
            .catch(error => {
                setError(error);
            })
        setError("");
        
    }
    
    
    return (
        <form onSubmit={handleRegister}>
            <div className="card w-full max-w-lg mx-auto my-8  shadow-2xl bg-base-200">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already have an account? Login</Link>
                        </label>
                    </div>
                    <p>
                        { error }
                    </p>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Register"/>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Registration;