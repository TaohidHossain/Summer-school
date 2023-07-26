import { Link } from "react-router-dom"
function NotFound(){
    return(
        <div>
            <button className="mx-auto block btn btn-warning my-4 "> <Link to='/'>Go back to home Page</Link> </button>
            <img className="mx-auto" src="https://thumbs.dreamstime.com/b/error-page-layout-vector-design-website-page-creative-concept-page-you-requested-could-not-be-found-oops-error-page-error-page-131871034.jpg" />
        </div>
    )
}
export default NotFound;