import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'
import { AuthContext } from "../../AuthProvider";

const Login = () => {
    const { signIn,googleSignIn } = useContext(AuthContext);
    const [ error, setError ] = useState("");
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError("");
                navigate('/')
            })
            .catch(error => {
                setError("Email and Password does not match");
            })
    }
    const handleGoogleSignIn = event => {
        googleSignIn()
            .then(navigate('/'))
            .catch(error => console.log(error))
    }
    
    return (
        <>
            <form onSubmit={handleLogin}>
            <div className="card w-full max-w-lg mx-auto my-8  shadow-2xl bg-base-200">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                        <label className="label">
                            <Link to="/registration" className="label-text-alt link link-hover">Don't have an account? Register</Link>
                        </label>
                    </div>
                    <p> { error } </p>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login"/>
                    </div>
                </div>
            </div>
            </form>
            <div className="divider">OR</div>
            <div className="w-full max-w-lg mx-auto text-center my-8">
                <button onClick={handleGoogleSignIn} className="btn btn-active btn-ghost ">
                <img className="w-8 mr-4" src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" />
                    Sign In using Google
                </button>
            </div>
        </>
    )
}
export default Login;