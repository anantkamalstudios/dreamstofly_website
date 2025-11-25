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

  const headerData = {
    title: "Clinical Education PGCert",
    subtitle:
      "Knowledge Centre Campus (Liverpool City Centre Campus)) Liverpool, United Kingdom ",
    rightImage: "/images/courseFinder/courseFinder3.png",
    leftLogo: "/images/courseFinder/courseFinder2.png",
  };

  const SidebarData = [
    { id: 1, firstData: "9 Months", secondData: " Program duration" },
    { id: 2, firstData: "Health/HealthCare", secondData: "Main Subject Area" },
  ];

  return (
    <div className="min-h-screen">
      <Header data={headerData} />
      <div className="max-w-full mx-auto p-4 md:p-6 lg:p-8 bg-gray-50">
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
