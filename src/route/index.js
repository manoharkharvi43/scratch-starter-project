import React from "react";
import App from "../App";
import UploadSprites from "../layouts/upload-sprites/index";

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

function RouteIndex() {
  return (
    <>
      <Route path="/upload-sprites">
        <UploadSprites />
      </Route>

      <Route path="/login">
        <App />
      </Route>
    </>
  );
}

export default RouteIndex;
