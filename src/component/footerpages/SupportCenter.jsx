import React, { useState } from 'react';

const SupportCenter = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'account', name: 'Account & Profile' },
    { id: 'premium', name: 'Premium Features' },
    { id: 'university', name: 'University Applications' },
    { id: 'community', name: 'Community & Forum' },
  ];

  const faqs = {
    general: [
      { question: 'How do I create a Yocket account?', answer: 'To create a Yocket account, click on the "Sign Up" button...' },
      { question: 'Is Yocket free to use?', answer: 'Yocket offers both free and premium features...' },
      { question: 'How do I contact customer support?', answer: 'You can reach our customer support team through the contact form...' },
    ],
    account: [
      { question: 'How do I reset my password?', answer: 'To reset your password, click on "Forgot Password" on the login page...' },
      { question: 'Can I change my username?', answer: 'Yes, you can change your username from your profile settings...' },
    ],
    premium: [
      { question: 'What are the benefits of Yocket Premium?', answer: 'Yocket Premium gives you access to exclusive features...' },
      { question: 'How do I upgrade to Premium?', answer: 'You can upgrade to Premium from your account settings...' },
    ],
    university: [
      { question: 'How do I search for universities?', answer: 'Use the university search tool to find institutions...' },
      { question: 'Can I save university preferences?', answer: 'Yes, you can save universities to your shortlist...' },
    ],
    community: [
      { question: 'How do I join a discussion?', answer: 'You can join discussions by visiting the forum section...' },
      { question: 'Can I create my own discussion thread?', answer: 'Yes, premium members can create discussion threads...' },
    ],
  };

  const filteredFaqs = faqs[activeCategory].filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">YOCKET</h1>
            <span className="ml-4 text-gray-600">Support Center</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-primary font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary">Contact</a>
            <a href="#" className="text-gray-600 hover:text-primary">Help</a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h2>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full py-3 px-4 rounded-lg text-gray-800 shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-2 bg-primary text-white p-1 rounded-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <aside className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h3 className="font-bold text-lg mb-4">FAQ Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === category.id ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* FAQ Content */}
          <section className="md:w-3/4">
            <h2 className="text-2xl font-bold mb-6">{categories.find(cat => cat.id === activeCategory)?.name}</h2>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button className="w-full text-left p-4 font-medium flex justify-between items-center">
                      {faq.question}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
                <p className="mt-2 text-gray-500">Try different search terms or browse the categories</p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">Our support team is ready to assist you</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
              Contact Support
            </button>
            <button className="border border-primary text-primary px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition">
              Submit a Request
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold text-primary">YOCKET</h3>
              <p className="text-gray-600 mt-2">Helping students achieve their study abroad dreams</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-primary">About Us</a></li>
                  <li><a href="#" className="hover:text-primary">Careers</a></li>
                  <li><a href="#" className="hover:text-primary">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-primary">Blog</a></li>
                  <li><a href="#" className="hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-primary">Facebook</a></li>
                  <li><a href="#" className="hover:text-primary">Twitter</a></li>
                  <li><a href="#" className="hover:text-primary">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Yocket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Supportcenter;