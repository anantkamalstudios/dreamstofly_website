import React from 'react'
// import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import ExploreProgramsSection from './home/ExplorePrograms'
import TopUniversitiesColleges from './home/TopUniversitiesColleges'
import AdmissionChanceBanner from './home/AdmissionBanner'
import CollegeRanking from './home/CollegeRanking'
import StudyAbroadSection from './home/StudyAbroadSection'
import TopStudyPlacesCarousel from './home/TopStudyPlaces'
import RegularAlerts from './home/RegularAlerts'
// import CourseFinderBanner from './home/CourseBanner'
import NewsletterForm from './home/NewsletterForm'
import LatestNews from './home/LatestNews'
import Services from './home/OurServices'
import WhyChooseUs from './home/WhyChooseUs'
// import StudyAbroadPlatform from './home/StudyAbroadPlatform'
import WhyUs from './home/Whyus'
import PremiumFeature from './home/PremiumFeature'
import Certificates from './home/Certificates'

function Home() {
    return (
        <div>

            <HeroSection />
            <WhyChooseUs />
            {/* <StudyAbroadPlatform /> */}
            <Services />
            <ExploreProgramsSection />
            <TopUniversitiesColleges />
            <AdmissionChanceBanner />
            <WhyUs />
            <CollegeRanking />
            <RegularAlerts />
            <TopStudyPlacesCarousel />
            {/* <CourseFinderBanner /> */}
            <PremiumFeature />
            <LatestNews />
            <StudyAbroadSection />
            <Certificates />
            <NewsletterForm />


        </div>
    )
}

export default Home
