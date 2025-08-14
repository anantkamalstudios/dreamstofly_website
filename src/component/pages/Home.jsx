import React from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import StudyGoal from './home/StudyGoal'
import ExploreProgramsSection from './home/ExplorePrograms'
import TopUniversitiesColleges from './home/TopUniversitiesColleges'
import AdmissionChanceBanner from './home/AdmissionBanner'
import CollegeRanking from './home/CollegeRanking'
import StudyAbroadSection from './home/StudyAbroadSection'
import TopStudyPlacesCarousel from './home/TopStudyPlaces'
import RegularAlerts from './home/RegularAlerts'
import CourseFinderBanner from './home/CourseBanner'
import NewsletterForm from './home/NewsletterForm'
import LatestNews from './home/LatestNews'

function Home() {
    return (
        <div>

            <HeroSection />
            <StudyGoal />
            <ExploreProgramsSection />
            <TopUniversitiesColleges />

            <AdmissionChanceBanner />

            <CollegeRanking />
            <RegularAlerts />

            <TopStudyPlacesCarousel />
            <CourseFinderBanner />
            <LatestNews />
            <StudyAbroadSection />
            <NewsletterForm />


        </div>
    )
}

export default Home
