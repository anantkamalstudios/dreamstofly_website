import DataTable from "../components/DataTable";
import { useState } from "react";
const BookingRequestsPage = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Pragya",
      email: "pragya.anantkamal@gmail.com",
      phone: "9999998877",
      title: "Property A",
      status: "New",
    },
  ]);

  const columns = [
    { key: "name", label: "Name", span: 2, sortable: false },
    { key: "email", label: "Email", span: 3, sortable: true, truncate: true },
    { key: "phone", label: "Phone", span: 2, sortable: true },
    { key: "title", label: "Title", span: 2, sortable: true },
    { key: "status", label: "Status", span: 2, sortable: false },
  ];

  const statuses = [
    { label: "Pending", color: "bg-blue-100 text-blue-600" },
    { label: "Approved", color: "bg-green-100 text-green-600" },
    { label: "Rejected", color: "bg-yellow-100 text-yellow-600" },
    { label: "Cancelled", color: "bg-red-100 text-red-600" },
    { label: "Completed", color: "bg-gray-100 text-gray-600" },
  ];

  const handleStatusChange = (id, newStatus) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <div className="">
      <DataTable
        columns={columns}
        data={bookings}
        statuses={statuses}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default BookingRequestsPage;
