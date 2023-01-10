import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h3>{error.statusText || error.message}</h3>
    </div>
  );
};

export default ErrorPage;
