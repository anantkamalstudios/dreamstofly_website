import React, { useState } from "react";
import SidebarTop from "./components/SidebarTop";
import AsideBar from "./components/AsideBar";
import Header from "./components/Header";
import { Award, BookOpen, Calendar, Globe, Search } from "lucide-react";
import ProgrammeOverview from "./components/ProgramOverview";

const UniversityDetailPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const detailsTab = [
    { id: "overview", label: "Overview" },
    { id: "programmes", label: "Programmes" },
    { id: "universityInformation", label: "University Information" },
    { id: "costOfLiving", label: "Cost of Living" },
    { id: "scholarships", label: "Scholarships" },
    { id: "employability", label: "Employability" },
  ];
  const headerData = {
    leftLogo: "",
    title: "University of Liverpool",
    subtitle:
      "Knowledge Centre Campus (Liverpool City Centre Campus)) Liverpool, United Kingdom ",
    rightImage: "",
  };

  const SidebarData = [
    { id: 1, firstData: "9 Months", secondData: " Program duration" },
    { id: 2, firstData: "Health/HealthCare", secondData: "Main Subject Area" },
    { id: 3, firstData: "# - 12", secondData: " QS World University Rankings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full ">
        <img
          src="/images/UniversityBanner.png"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className="max-w-8xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_3.6fr] gap-6">
          <aside>
            <SidebarTop data={SidebarData} />

            <AsideBar
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              tabs={detailsTab}
            />
          </aside>

          <main className="space-y-10">
            <section id="overview">
              <ProgrammeOverview />
            </section>

            <section id="programmes">
              <p>Programmes</p>
            </section>

            <section id="universityInformation">
              <p>University Information</p>
            </section>

            <section id="costOfLiving">
              <p>Cost of Living</p>
            </section>

            <section id="scholarships">
              <p>Scholarships</p>
            </section>

            <section id="employability">
              <p>Employability</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetailPage;
