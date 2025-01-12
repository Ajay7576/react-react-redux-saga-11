import React, { useState } from "react";

const Student = () => {
  // Sample data for users
  const initialUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      role: "User",
      status: "Pending",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicej@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michaelb@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 5,
      name: "Emily White",
      email: "emilyw@example.com",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 6,
      name: "David Clark",
      email: "davidc@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 7,
      name: "Sophia Lee",
      email: "sophial@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Liam Harris",
      email: "liamh@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 9,
      name: "Lucas Miller",
      email: "lucasm@example.com",
      role: "User",
      status: "Pending",
    },
    {
      id: 10,
      name: "Mason Taylor",
      email: "masont@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 11,
      name: "Isabella Moore",
      email: "isabellam@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 12,
      name: "Ethan Davis",
      email: "ethand@example.com",
      role: "Admin",
      status: "Pending",
    },
    {
      id: 13,
      name: "Ava Jackson",
      email: "avaj@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 14,
      name: "Oliver Martinez",
      email: "oliverm@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 15,
      name: "Charlotte Robinson",
      email: "charlotter@example.com",
      role: "Admin",
      status: "Active",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default to 5 records per page

  // Sorting function
  const sortUsers = (users) => {
    return [...users].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  // Studently sorting before pagination
  const sortedUsers = sortUsers(users);

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle sorting by column
  const handleSort = (column) => {
    let direction = "asc";
    if (sortConfig.key === column && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: column, direction });
  };

  // Handle page size change
  const handlePageSizeChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing page size
  };

  // Pagination button handlers
  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // First, Previous, Next, Last buttons
  const handleFirstPage = () => changePage(1);
  const handlePreviousPage = () => changePage(currentPage - 1);
  const handleNextPage = () => changePage(currentPage + 1);
  const handleLastPage = () => changePage(totalPages);

  // Render sorting icon
  const getSortIcon = (column) => {
    if (sortConfig.key === column) {
      return sortConfig.direction === "asc" ? "▲" : "▼";
    }
    return "";
  };

  // Handle action buttons
  const handleEdit = (userId) => {
    alert(`Edit user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    if (
      window.confirm(`Are you sure you want to delete user with ID: ${userId}?`)
    ) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  // Render table rows
  const renderTableRows = () => {
    return paginatedUsers.map((user) => (
      <tr key={user.id} className="border-t">
        <td className="px-6 py-4 text-gray-700">{user.id}</td>
        <td className="px-6 py-4 text-gray-700">{user.name}</td>
        <td className="px-6 py-4 text-gray-700">{user.email}</td>
        <td className="px-6 py-4 text-gray-700">{user.role}</td>
        <td className="px-6 py-4">
          <span
            className={`py-1 px-3 rounded-full text-sm ${
              user.status === "Active"
                ? "bg-green-100 text-green-800"
                : user.status === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {user.status}
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <button
            onClick={() => handleEdit(user.id)}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(user.id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  // Render pagination buttons
  const renderPagination = () => {
    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={`px-4 py-2 mx-1 rounded ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          {i}
        </button>
      );
    }
    return paginationButtons;
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4">
      <table className="min-w-full table-auto">
        <thead className="text-gray-700">
          <tr>
            <th
              className="px-6 py-3 text-left cursor-pointer"
              onClick={() => handleSort("id")}
            >
              #
            </th>
            <th
              className="px-6 py-3 text-left cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name {getSortIcon("name")}
            </th>
            <th
              className="px-6 py-3 text-left cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email {getSortIcon("email")}
            </th>
            <th
              className="px-6 py-3 text-left cursor-pointer"
              onClick={() => handleSort("role")}
            >
              Role {getSortIcon("role")}
            </th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Actions</th>{" "}
            {/* Action Column */}
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span>Show</span>
          <select
            value={itemsPerPage}
            onChange={handlePageSizeChange}
            className="px-2 py-1 border rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <span>
            {" "}
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, users.length)} of{" "}
            {users.length} records
          </span>
        </div>
        <div className="mt-4 flex justify-end items-center space-x-2">
          <button
            onClick={handleFirstPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            First
          </button>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          {renderPagination()}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student;
