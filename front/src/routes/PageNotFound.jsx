import { Link } from "react-router-dom";
function PageNotFound() {
    return (
        <>
            <div className="notfound">
                <h1>Halaman yang anda cari tidak di temukan <code>:(</code> 404</h1>
                <br />
                <Link to={'home'}>Back To Home</Link>
            </div>
        </>
    );
}
export default PageNotFound;