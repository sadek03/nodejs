"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./components/theme";

const Nodejs = () => {
  const [userData, setUserData] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [edit, setEdit] = useState(false);

  const getData = async () => {
    const getRequest = await fetch("/api/users/");
    const getResponse = await getRequest.json();
    setUsersData(getResponse.response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async () => {
    const createRequest = await fetch("/api/users/", {
      method: edit ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password ?? "",
      }),
    });
    const createResponse = await createRequest.json();
    console.log(createResponse);
    alert(createResponse.response?.message);
    getData();
  };

  const handleDelete = async (id) => {
    const deleteRequest = await fetch("/api/users/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const response = await deleteRequest.json();
    console.log(response);
    alert(response.response?.message);
    getData();
  };

  return (
    <div className="flex flex-row md:w-screen  gap-3">
      <div className=" w-[500px] bg-emerald-400 rounded-xl mt-4 ml-3 p-4">
        <div className=" p-4 ">
          <ModeToggle />
          <div className="px-2 py-1 w-full space-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Please enter your name"
              className="w-full px-2 py-3 rounded-lg outline-none text-black"
              value={userData?.name ?? ""}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>
          <div className="px-3 py-2 w-full space-y-1">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              placeholder="Please enter your email"
              className="w-full px-2 py-3 rounded-lg outline-none  text-black"
              value={userData?.email ?? ""}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="px-3 py-2 w-full space-y-1">
            <label htmlFor="Mobile">Mobile No</label>
            <input
              type="number"
              placeholder="Please enter your Mobile no"
              className="w-full px-2 py-3 rounded-lg outline-none  text-black"
              value={userData?.phone ?? ""}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </div>
          {!edit && (
            <div className="px-3 py-2 w-full space-y-1">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                placeholder="Please enter a password"
                className="w-full px-2 py-3 rounded-lg outline-none  text-black"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
          )}
          <div className="w-full rounded-lg px-3">
            <button
              className="bg-blue-600 px-3 py-2 w-full rounded-lg mt-2 text-white"
              onClick={handleSubmit}
            >
              {!edit ? "Submit Data" : "Update Data"}
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full rounded-xl mt-4 bg-green-400 p-4">
        <div className="form  w-full">
          <table className="table-auto w-full border border-gray-800">
            <thead className="py-4">
              <tr>
                <th className="px-4  py-4 border border-gray-800">Sl no.</th>
                <th className="px-4 py-4  border border-gray-800">Name</th>
                <th className="px-4 py-4  border border-gray-800">Email</th>
                <th className="px-4 py-4  border border-gray-800">Mobile No</th>
                <th className="px-4 py-4  border border-gray-800">
                  Created at
                </th>
                <th className="px-4 py-4  border border-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody className="py-4">
              {usersData?.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-4  border border-gray-800">
                    {index + 1}
                  </td>
                  <td className="px-4 py-4  border border-gray-800">
                    {item.name}
                  </td>
                  <td className="px-4 py-4  border border-gray-800">
                    {item.email}
                  </td>
                  <td className="px-4 py-4  border border-gray-800">
                    {item.phone}
                  </td>
                  <td className="px-4 py-4  border border-gray-800">
                    {item.created_at}
                  </td>
                  <td className="px-4  py-4 border border-gray-800">
                    <div className=" flex gap-2">
                      <button
                        className="px-5 py-3 rounded-lg bg-blue-600 text-white"
                        onClick={() => {
                          setUserData(item);
                          setEdit(true);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="px-5 py-3 rounded-lg bg-red-600 text-white"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!usersData && <p>Loading data......</p>}
        </div>
      </div>
    </div>
  );
};

export default Nodejs;
