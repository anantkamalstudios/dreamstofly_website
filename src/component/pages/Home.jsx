import React from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import StudyGoal from './home/StudyGoal'
import ExploreProgramsSection from './home/ExplorePrograms'
import TopUniversitiesColleges from './home/TopUniversitiesColleges'

function Home() {
    return (
        <div>

            <HeroSection />
            <StudyGoal />
            <ExploreProgramsSection />
            <TopUniversitiesColleges />

        </div>
    )
}

export default Home
