import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import AdminFolderManagement from "./components/Admin/FolderManagement"; // Import the new component
import { AuthContext } from "./context/AuthContext";

const PrivateRoute = ({ component: Component }) => {
  const { user } = useContext(AuthContext);
  return user ? <Component /> : <Navigate to="/login" />;
};

const Routes = () => {
  return (
    <>
      <Route path="/admin/folders" element={<PrivateRoute component={AdminFolderManagement} />} />
      {/* Other routes can be added here */}
    </>
  );
};

export default Routes;
