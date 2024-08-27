import React from "react";

const getAllUsers = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store",
    next: {
      revalidate: 10,
    },
  });

  if (!result.ok) {
    throw new Error("There was an error fetching users");
  }
  return result.json();
};

export default getAllUsers;
