import React, { useState } from "react";
import { FaEye, FaFilePdf, FaFileExcel } from "react-icons/fa";

const AdminReports = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const reports = {
    latest: [
      {
        id: 1,
        title: "Sprint Summary",
        project: "Website Revamp",
        period: "01 Dec - 07 Dec",
        generatedOn: "08 Dec 2025",
      },
      {
        id: 2,
        title: "Bug Fix Report",
        project: "Mobile App",
        period: "01 Dec - 10 Dec",
        generatedOn: "11 Dec 2025",
      },
    ],
    archived: [
      {
        id: 3,
        title: "Performance Report",
        project: "CRM System",
        period: "Nov 2025",
        generatedOn: "01 Dec 2025",
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Reports</h2>
        <p className="text-sm text-gray-500">
          System-generated reports (read-only)
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {["latest", "archived"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm rounded-md ${
              activeTab === tab
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab === "latest" ? "Latest" : "Archived"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reports[activeTab].map((report) => (
          <div
            key={report.id}
            className="shadow-sm rounded-lg p-4 bg-white hover:shadow transition"
          >
            <h3 className="font-semibold text-gray-900">{report.title}</h3>

            <p className="text-sm text-gray-500 mt-1">{report.project}</p>

            <div className="text-xs text-gray-600 mt-3 space-y-1">
              <p>Period: {report.period}</p>
              <p>Generated: {report.generatedOn}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <button className="flex-1 flex items-center justify-center gap-1 text-sm py-2 rounded bg-gray-100 hover:bg-gray-200">
                <FaEye /> View
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 text-sm py-2 rounded bg-red-50 text-red-600 hover:bg-red-100">
                <FaFilePdf /> PDF
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 text-sm py-2 rounded bg-green-50 text-green-700 hover:bg-green-100">
                <FaFileExcel /> Excel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReports;
