import React, { useState } from "react";
import {
  Search,
  Calendar,
  BookOpen,
  Award,
  Globe,
  Subtitles,
} from "lucide-react";
import SidebarTop from "./components/SidebarTop";
import AsideBar from "./components/AsideBar";
import Header from "./components/Header";
import ProgrammeOverview from "./components/ProgramOverview";
import AdmissionRequirements from "./components/AdmissionRequirement";
import Scholarship from "./components/Scholarship";
import MoreProgrammes from "./components/MoreProgramms";

const CourseFinderDetailPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = [
    { id: "overview", label: "Programme Overview" },
    { id: "admission", label: "Admission Requirements" },
    { id: "scholarships", label: "Scholarships" },
    { id: "more", label: "More Programmes" },
  ];

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "overview":
  //       return <ProgrammeOverview />;
  //     case "admission":
  //       return <AdmissionRequirements />;
  //     case "scholarships":
  //       return <Scholarship />;
  //     case "more":
  //       return <MoreProgrammes />;
  //     default:
  //       return null;
  //   }
  // };

  const headerData = {
    title: "Clinical Education PGCert",
    subtitle:
      "Knowledge Centre Campus (Liverpool City Centre Campus)) Liverpool, United Kingdom ",
    rightImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    leftLogo:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  };

  const SidebarData = [
    { id: 1, firstData: "9 Months", secondData: " Program duration" },
    { id: 2, firstData: "Health/HealthCare", secondData: "Main Subject Area" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header data={headerData} />
      <div className="max-w-8xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_3.6fr] gap-6">
          <aside>
            <SidebarTop data={SidebarData} />
            <AsideBar
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              tabs={tabs}
            />
          </aside>

          <main className="space-y-10">
            <section id="overview">
              <ProgrammeOverview />
            </section>

            <section id="admission">
              <AdmissionRequirements />
            </section>

            <section id="scholarships">
              <Scholarship />
            </section>

            <section id="more">
              <MoreProgrammes />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CourseFinderDetailPage;
