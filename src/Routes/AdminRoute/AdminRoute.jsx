import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { Dna } from "react-loader-spinner";
import useAdmin from "../../UseAdmin/UseAdmin";
import { AuthContext } from "../../context/AuthProvider";

const AdminRoute = ({ children }) => {
  const {user, loading} = useContext(AuthContext)
  const [isAdmin, adminLoading] = useAdmin(user?.email)
  const location = useLocation();
  // console.log(isAdmin, user, loading)
  if (loading || adminLoading) {
    console.log("loading happened");
    return (
      <div className="flex justify-center my-10">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
