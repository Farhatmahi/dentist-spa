import React, { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState("");
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:2000/users/sellers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email, isSellerLoading]);
};

export default useSeller;
