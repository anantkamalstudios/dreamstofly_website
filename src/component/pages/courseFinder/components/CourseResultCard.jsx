import React from 'react';
import { Star, MapPin, BookOpen, Calendar, Clock, Award, DollarSign, Users } from 'lucide-react';

const CourseResultCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Course Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{course.courseName}</h3>
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span>{course.universityName}</span>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                <span>{course.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 mr-1 fill-current" />
            <span>{course.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">{course.level}</span>
          <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">{course.duration}</span>
          <span className="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full">{course.credits} Credits</span>
        </div>
      </div>

      {/* Course Details */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Study Level</p>
              <p className="font-medium">{course.studyLevel}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Start Date</p>
              <p className="font-medium">{course.startDate}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-purple-100 p-2 rounded-lg mr-3">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="font-medium">{course.duration}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-yellow-100 p-2 rounded-lg mr-3">
              <Award className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Award</p>
              <p className="font-medium">{course.award}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="w-4 h-4 mr-1 text-green-600" />
            <span>${course.tuitionFee} / year</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-1 text-blue-600" />
            <span>{course.studentsEnrolled} students enrolled</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <span className="text-blue-600 text-sm font-medium">{course.universityInitials}</span>
            </div>
            <div>
              <p className="text-sm font-medium">{course.universityName}</p>
              <p className="text-xs text-gray-500">QS World Ranking: {course.ranking}</p>
            </div>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="px-5 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm w-full sm:w-auto">
              View University
            </button>
            <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm w-full sm:w-auto">
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseResultCard;
