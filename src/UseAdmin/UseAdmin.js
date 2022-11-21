import { useEffect, useState } from "react";

const useAdmin = (email) => {
  console.log(email);
  const [isAdmin, setIsAdmin] = useState("");
  const [adminLoading, setAdminLoading] = useState(true)
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5002/users/admin/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setAdminLoading(false)
        });
    }
  }, [email]);
  return [isAdmin, adminLoading];
};

export default useAdmin;
