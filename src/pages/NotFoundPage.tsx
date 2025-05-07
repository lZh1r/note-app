import {Link} from "react-router";

function NotFoundPage() {
    return (
        <div className="h-screen text-active font-main text-center flex flex-col justify-center">
            <h1 className="text-3xl p-2">Nothing Found</h1>
            <Link className="text-2xl p-2 text-inactive hover:text-active w-fit place-self-center" to="/">
                <h2>Go Home</h2>
            </Link>
        </div>
    );
}

export default NotFoundPage;