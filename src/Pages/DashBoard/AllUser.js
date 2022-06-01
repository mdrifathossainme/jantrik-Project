import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading/Loading";
import SingleUse from "./SingleUse";
const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("https://immense-plains-72444.herokuapp.com/alluser", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("asscessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pl-8">
      {" "}
      <h1 className="text-4xl  pb-8 lg:pb-4">All User</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <SingleUse
                index={index}
                refetch={refetch}
                key={user._id}
                user={user}
              ></SingleUse>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
