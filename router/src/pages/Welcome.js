import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Outlet />
    </section>
  );
};

export default Welcome;
