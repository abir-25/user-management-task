"use client";
import { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import getAllUsers from "@/lib/getAllUsers";
import { Button } from "antd";
import Link from "next/link";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
  ];

  return (
    <div className="container mx-auto min-h-screen p-7">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold mb-0">User List</h1>
        <Link href="/signup">
          <Button type="primary" size="middle">
            Sign up
          </Button>
        </Link>
      </div>
      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <Table columns={columns} dataSource={users} rowKey="id" />
      )}
    </div>
  );
};

export default Page;
