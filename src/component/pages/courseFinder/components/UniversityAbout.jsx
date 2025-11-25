import React, { useState } from 'react';
import { Download } from 'lucide-react';

const UniversityAbout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullContent = `The University of Liverpool is a remarkable place, combining academic excellence with the attributes of our famous home maritime city: a spirit of creativity, welcoming to all, and committed to social responsibility.

Established in 1881, we are the original 'redbrick' university – a phrase inspired by our distinctive redbrick Victoria Building. This spirit of originality shapes everything we do; ideas are born here that transform industries and travel the globe, touching and improving millions of lives as they go.

Our founding mission - 'for the advancement of learning and ennoblement of life' reflects our belief in the transformative power of research and education. And our Gold rating in the Teaching Excellence Framework highlights our commitment to world-class teaching and learning. Employability is embedded throughout our programmes, and our graduates enjoy high employability rates.

With over 30,000 students and 280,000 alumni across over 170 countries, our diverse, multicultural community makes us a home for all kinds of ambitions and all kinds of achievements. Alumni include nine Nobel prize winners, the first female poet laureate and the first female Director General of MI5, alongside those who have led the way in fields from nuclear disarmament to the life cycle of malarial parasites.

Today we have hundreds of international research collaborations, spanning diverse subject matter across our three faculties – Health and Life Sciences, Humanities and Social Sciences, and Science and Engineering. We are pioneering materials discovery utilising digital design, transforming health and medicine through therapeutics innovation and leading scientific breakthroughs in our understanding of the universe in particle physics. Combined with our Interdisciplinary Centre for Sustainability Research (ICSR) we are helping to create a more prosperous, fair and healthy world for everyone.

Our main campus sits at the top of Brownlow Hill, just a ten-minute walk from Liverpool's vibrant city centre and at the heart of the Knowledge Quarter. The University helps drive the city's knowledge economy through close collaboration with fellow universities, industry and the NHS, helping the Liverpool City Region compete in the global business world.

Our Materials Innovation Factory draws together world-leading research and technologies to provide a stimulating environment for the exchange of ideas to accelerate the delivery of real world solutions.

Our digital research is enabling the transformation of society and industry through the generation, communication and application of data. Opened in 2022, the Digital Innovation Facility brings together leading scientists and engineers to deliver high impact industrial innovation.

Like Liverpool itself, we march to the beat of our own drum. And we encourage our students and staff to do the same. Leading by example, we foster creativity, independence and courage. We open our doors wide, and make sure everyone can express their true character here, whoever they are and wherever they come from. Because when they do, they make our learning environment richer, and our whole University stronger.

Find out more about life at the University of Liverpool via our social media channels, including LinkedIn, Instagram, Facebook and YouTube.`;

  const shortContent = fullContent.split('\n\n').slice(0, 4).join('\n\n');

  const handleDownload = () => {
    const blob = new Blob([fullContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'University_of_Liverpool_Brochure.txt';
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white">
      <h1 className="text-3xl font-medium text-gray-900 mb-6">
        About University of Liverpool
      </h1>

      {/* Content */}
      <div className="text-gray-800 leading-relaxed space-y-4 text-justify">
        {isExpanded ? (
          fullContent.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <>
            {shortContent.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </>
        )}
      </div>

      {/* Read More/Less Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 font-medium mt-4 hover:text-blue-700 transition-colors"
      >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>

      {/* Brochures Section */}
      <div className="mt-12">
        <h2 className="text-lg md:text-2xl font-medium text-gray-900 mb-1">Brochures</h2>
        
        <button
          onClick={handleDownload}
          className="flex items-center gap-3 px-6 py-3 border-2 border-[#0073DF] text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
        >
          <span className='mr-4'>Download Brochure</span>
          <Download className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default UniversityAbout;