import { Suspense } from "react";
import LoadingPage from "../../pages/LoadingPage";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
