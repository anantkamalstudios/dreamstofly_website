import React from "react";

const ContactInfoForm = () => {
  return (
    <div className="flex items-center justify-center w-full my-6">
      <div className="bg-white rounded-2xl p-8 shadow-lg flex max-w-6xl gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-blue-100 mb-8">Say something to start a chat!</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span>📞</span>
                <span>+1012 3456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📧</span>
                <span>demo@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="w-10 h-10 bg-blue-800 rounded-full hover:bg-blue-900 transition-colors"></button>
              <button className="w-10 h-10 bg-blue-800 rounded-full hover:bg-blue-900 transition-colors"></button>
              <button className="w-10 h-10 bg-blue-800 rounded-full hover:bg-blue-900 transition-colors"></button>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400 rounded-full -mr-20 -mb-20"></div>
        </div>
        <div className="flex flex-col gap-4 w-full py-4">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="block text-sm text-gray-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-300 py-2 focus:border-blue-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-300 py-2 focus:border-blue-600 outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input
                type="email"
                className="w-full border-b-2 border-gray-300 py-2 focus:border-blue-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 012 3456 789"
                className="w-full border-b-2 border-gray-300 py-2 focus:border-blue-600 outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-3">
              Select Subject?
            </label>
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="subject" className="w-4 h-4" />
                <span className="text-sm">Student Inquiry</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="subject" className="w-4 h-4" />
                <span className="text-sm">General Inquiry</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="subject" className="w-4 h-4" />
                <span className="text-sm">Refund Inquiry</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="subject" className="w-4 h-4" />
                <span className="text-sm">Marketing Inquiry</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              Write your message
            </label>
            <textarea
              className="w-full border-b-2 border-gray-300 py-2 focus:border-blue-600 outline-none resize-none"
              rows="3"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Send Message →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
