import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingGif from "../../images/loading.gif";

export default function Loading() {
  // state
  const [count, setCount] = useState(3);
  //hooks
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });

    // cleanup
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <img src={LoadingGif} alt="loading" />
    </div>
  );
}
