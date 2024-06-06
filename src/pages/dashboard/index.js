import { useState } from "react";
import Link from "next/link";
import { FaTachometerAlt, FaUser, FaShoppingCart } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useCart } from "@/context/cartContext";

const initialOrders = [
  {
    id: 1,
    date: "2023-06-01",
    total: "$99.99",
    status: "Delivered",
    items: [
      { name: "Product 1", quantity: 1, price: "$49.99" },
      { name: "Product 2", quantity: 1, price: "$50.00" },
    ],
  },
  {
    id: 2,
    date: "2023-05-21",
    total: "$39.99",
    status: "Shipped",
    items: [
      { name: "Product 3", quantity: 2, price: "$19.99" },
    ],
  },
  // Add more orders as needed
];

const Dashboard = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [activeTab, setActiveTab] = useState("dashboard");
  const { cartItems } = useCart(); // Use context to get cart items
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsSidebarOpen(false); // Close sidebar on tab change for mobile view
  };

  // Function to add new order
  const addNewOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className={`w-full md:w-64 bg-yellow-800 text-white flex flex-col transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="p-4 font-bold text-lg">
          <Link href="/">My E-Commerce</Link>
        </div>
        <nav className="flex-grow">
          <ul>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "dashboard" ? "bg-yellow-700" : ""
              }`}
              onClick={() => handleTabChange("dashboard")}
            >
              <FaTachometerAlt className="inline-block mr-2" />
              Dashboard
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "profile" ? "bg-yellow-700" : ""
              }`}
              onClick={() => handleTabChange("profile")}
            >
              <FaUser className="inline-block mr-2" />
              Profile
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "orders" ? "bg-yellow-700" : ""
              }`}
              onClick={() => handleTabChange("orders")}
            >
              <FaShoppingCart className="inline-block mr-2" />
              Orders
            </li>
            <li className="p-4 cursor-pointer">
              <AiOutlineLogout className="inline-block mr-2" />
              Logout
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow p-8 bg-gray-100">
        <button
          className="block md:hidden p-2 bg-gray-800 text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </button>
        {activeTab === "dashboard" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            {/* Add your dashboard content here */}
          </div>
        )}
        {activeTab === "profile" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <p>Manage your profile information.</p>
            {/* Add your profile content here */}
          </div>
        )}
        {activeTab === "orders" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            {orders.length > 0 ? (
              <ul className="space-y-4">
                {orders.map((order) => (
                  <li key={order.id} className="p-4 bg-white shadow rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-bold">Order #{order.id}</h2>
                        <p className="text-gray-600">{order.date}</p>
                        <p className="text-gray-600">{order.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{order.total}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {order.items.map((item, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{item.name}</span>
                          <span>{item.quantity} x {item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
