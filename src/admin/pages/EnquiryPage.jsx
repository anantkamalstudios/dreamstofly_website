import { useState } from "react";
import DataTable from "../components/DataTable";

const EnquiryPage = () => {
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      name: "Pragya",
      email: "pragya.anantkamal@gmail.com",
      phone: "9999998877",
      nationality: "Indian",
      status: "In Progress",
    },
  ]);

  const columns = [
    { key: "name", label: "Name", span: 2, sortable: false },
    { key: "email", label: "Email", span: 3, sortable: true, truncate: true },
    { key: "phone", label: "Phone", span: 2, sortable: true },
    { key: "nationality", label: "Nationality", span: 2, sortable: true },
    { key: "status", label: "Status", span: 2, sortable: false },
  ];

  const statuses = [
    { label: "In Progress", color: "bg-green-100 text-green-600" },
    { label: "Closed", color: "bg-red-100 text-red-600" },
    { label: "Pending", color: "bg-blue-100 text-blue-600" },
    { label: "Open", color: "bg-yellow-100 text-yellow-600" },
  ];

  const handleStatusChange = (id, newStatus) => {
    setEnquiries(
      enquiries.map((enquiry) =>
        enquiry.id === id ? { ...enquiry, status: newStatus } : enquiry
      )
    );
  };

  return (
    <DataTable
      columns={columns}
      data={enquiries}
      statuses={statuses}
      onStatusChange={handleStatusChange}
    />
  );
};

export default EnquiryPage;
