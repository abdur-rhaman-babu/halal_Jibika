import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Opps!</h1>
            <p>Sorry, unexpexted error </p>
            <i>{error.statusText || error.message}</i>
        </div>
    );
};

export default ErrorPage;