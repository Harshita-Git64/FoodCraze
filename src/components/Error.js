import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center content-center gap-y-2 mt-32">
      <img src="https://seosherpa.com/wp-content/uploads/2020/12/404-error-page-header-transparent.png"></img>
      {/* <h3>error  {error.status} Page {error.statusText}!!</h3> */}
      <div className="text-gray-600">
        This page isn't available!! Try searching for something else.
      </div>
      <Link to="/">
        <button className="px-5 py-2 rounded-full bg-red-600 font-semibold text-white my-3">
          GO TO HOME
        </button>
      </Link>
    </div>
  );
};

export default Error;
