import React, { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoing] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://immense-plains-72444.herokuapp.com/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoing(false);
        });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
