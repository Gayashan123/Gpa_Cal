import React from "react";

// Helper function to convert proficiency text to width percentage
const getProficiencyWidth = (proficiency) => {
  switch (proficiency.toLowerCase()) {
    case 'native':
    case 'expert':
      return '100%';
    case 'fluent':
    case 'advanced':
      return '80%';
    case 'intermediate':
      return '60%';
    case 'basic':
      return '40%';
    case 'beginner':
      return '20%';
    default:
      return '50%';
  }
};

const PRIMARY_COLOR = '#0047ab'; // Professional blue
const ACCENT_COLOR = 'bg-blue-900 text-white';
const BORDER_COLOR = 'border-blue-900';

const CVPreview = React.forwardRef(({ formData }, ref) => {
  const {
    personalDetails,
    education,
    professionalExperience,
    olResults,
    alResults,
    languages,
    otherQualifications,
    skills,
    interests,
    references,
  } = formData;

  const nameInitial = personalDetails.fullName ? personalDetails.fullName.charAt(0).toUpperCase() : '';

  return (
    <div
      id="cv-preview"
      ref={ref}
      className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden border print:shadow-none"
      style={{ fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif", borderColor: PRIMARY_COLOR }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Full width on mobile, 1/3 on desktop */}
        <div 
          className={`w-full md:w-1/3 p-6 ${ACCENT_COLOR}`} 
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          {/* Avatar - Centered on mobile, left on desktop */}
          <div className="flex justify-center md:justify-start mb-6">
            <div className="relative">
              {personalDetails.photoPreview ? (
                <img
                  src={personalDetails.photoPreview}
                  alt="Profile"
                  className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white bg-opacity-20 border-4 border-white shadow-lg flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-white">{nameInitial}</span>
                </div>
              )}
            </div>
          </div>

          {/* Contact - Stacked on mobile */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold border-b border-white border-opacity-30 pb-2 mb-4">CONTACT</h3>
            <div className="flex items-start">
              <div className="mr-3 mt-0.5">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-semibold">Phone</h4>
                <p className="text-xs md:text-sm opacity-90 break-all">{personalDetails.contactNumber}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-0.5">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-semibold">Email</h4>
                <p className="text-xs md:text-sm opacity-90 break-all">{personalDetails.email}</p>
              </div>
            </div>
            {personalDetails.address && (
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-semibold">Address</h4>
                  <p className="text-xs md:text-sm opacity-90">{personalDetails.address}</p>
                </div>
              </div>
            )}
            {(personalDetails.nic || personalDetails.dateOfBirth) && (
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-semibold">Details</h4>
                  <p className="text-xs md:text-sm opacity-90">
                    {personalDetails.nic && <span>NIC: {personalDetails.nic}</span>}
                    {personalDetails.dateOfBirth && (
                      <span className={personalDetails.nic ? "ml-2 md:ml-3" : ""}>
                        DOB: {personalDetails.dateOfBirth}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Skills - Responsive wrapping */}
          {skills && (
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-bold border-b border-white border-opacity-30 pb-2 mb-4">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {skills.split(',').map((skill, i) => (
                  <div 
                    key={i} 
                    className="px-2 py-0.5 md:px-3 md:py-1 bg-white bg-opacity-20 rounded-full text-xs md:text-sm backdrop-blur-sm"
                  >
                    {skill.trim()}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages - Full width bars */}
          {languages.length > 0 && (
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-bold border-b border-white border-opacity-30 pb-2 mb-4">LANGUAGES</h3>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs md:text-sm mb-1">
                      <span className="font-medium">{lang.language}</span>
                      <span className="opacity-80">{lang.proficiency}</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5 md:h-2">
                      <div
                        style={{ width: getProficiencyWidth(lang.proficiency) }}
                        className="h-full rounded-full bg-white"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests - Responsive text */}
          {interests && (
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-bold border-b border-white border-opacity-30 pb-2 mb-4">INTERESTS</h3>
              <p className="text-xs md:text-sm opacity-90">{interests}</p>
            </div>
          )}
        </div>

        {/* Main Content - Full width on mobile, 2/3 on desktop */}
        <div className="w-full md:w-2/3 p-6 md:p-8">
          {/* Name and Title - Responsive sizing */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1">
              {personalDetails.fullName}
            </h1>
            {personalDetails.position && (
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
                {personalDetails.position}
              </h2>
            )}
          </div>

          {/* Professional Experience - Timeline style */}
          {professionalExperience.length > 0 && (
            <section className="mb-6 md:mb-8">
              <div className="flex items-center mb-4">
                <div className="w-6 md:w-8 h-0.5 md:h-1 mr-2 md:mr-3" style={{ backgroundColor: PRIMARY_COLOR }}></div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800">EXPERIENCE</h2>
              </div>
              <div className="space-y-4 md:space-y-6">
                {professionalExperience.map((exp, i) => (
                  <div key={i} className="pl-3 md:pl-4 border-l-2 border-gray-200 relative">
                    <div className="absolute -left-1.5 md:-left-2.5 top-1 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white" style={{ backgroundColor: PRIMARY_COLOR }}></div>
                    <div className="ml-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="text-base md:text-lg font-bold text-gray-800">{exp.position}</h3>
                        <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2 py-0.5 md:py-1 rounded mt-1 sm:mt-0">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="text-sm md:text-base text-gray-700 font-medium mb-1 md:mb-2">
                        {exp.organization}
                      </div>
                      {exp.responsibilities && (
                        <ul className="mt-1 md:mt-2 text-gray-700 space-y-1 text-xs md:text-sm list-disc list-inside">
                          {exp.responsibilities.split('\n').map((item, idx) => (
                            item.trim() && <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education - Timeline style */}
          {education.length > 0 && (
            <section className="mb-6 md:mb-8">
              <div className="flex items-center mb-4">
                <div className="w-6 md:w-8 h-0.5 md:h-1 mr-2 md:mr-3" style={{ backgroundColor: PRIMARY_COLOR }}></div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800">EDUCATION</h2>
              </div>
              <div className="space-y-3 md:space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="pl-3 md:pl-4 border-l-2 border-gray-200 relative">
                    <div className="absolute -left-1.5 md:-left-2.5 top-1 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white" style={{ backgroundColor: PRIMARY_COLOR }}></div>
                    <div className="ml-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="text-base md:text-lg font-bold text-gray-800">{edu.qualification}</h3>
                        <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2 py-0.5 md:py-1 rounded mt-1 sm:mt-0">
                          {edu.year}
                        </span>
                      </div>
                      <div className="text-sm md:text-base text-gray-700 font-medium">
                        {edu.institution}
                        {edu.specialization && <span> | {edu.specialization}</span>}
                        {edu.grade && <span> | Grade: {edu.grade}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* O/L and A/L Results - Responsive tables */}
          {(olResults?.indexNo || alResults?.indexNo) && (
            <section className="mb-6 md:mb-8">
              <div className="flex items-center mb-4">
                <div className="w-6 md:w-8 h-0.5 md:h-1 mr-2 md:mr-3" style={{ backgroundColor: PRIMARY_COLOR }}></div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800">EXAM RESULTS</h2>
              </div>
              {/* O/L */}
              {olResults?.indexNo && (
                <div className="mb-4 md:mb-6">
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800">
                    G.C.E. Ordinary Level ({olResults.year})
                  </h3>
                  <div className="mb-2 text-xs md:text-sm text-gray-600">Index No: {olResults.indexNo}</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs md:text-sm">
                      <thead>
                        <tr className="text-left border-b-2 border-gray-200">
                          <th className="p-1 md:p-2 font-semibold">Subject</th>
                          <th className="p-1 md:p-2 font-semibold text-right">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {olResults.subjects?.map((subj, i) => (
                          <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-1 md:p-2">{subj.subject}</td>
                            <td className="p-1 md:p-2 text-right font-medium">{subj.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {/* A/L */}
              {alResults?.indexNo && (
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800">
                    G.C.E. Advanced Level ({alResults.year})
                  </h3>
                  <div className="mb-2 text-xs md:text-sm text-gray-600">
                    Index No: {alResults.indexNo} | Stream: {alResults.stream}
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs md:text-sm">
                      <thead>
                        <tr className="text-left border-b-2 border-gray-200">
                          <th className="p-1 md:p-2 font-semibold">Subject</th>
                          <th className="p-1 md:p-2 font-semibold text-right">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {alResults.subjects?.map((subj, i) => (
                          <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-1 md:p-2">{subj.subject}</td>
                            <td className="p-1 md:p-2 text-right font-medium">{subj.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Certifications - Grid layout */}
          {otherQualifications?.length > 0 && (
            <section className="mb-6 md:mb-8">
              <div className="flex items-center mb-4">
                <div className="w-6 md:w-8 h-0.5 md:h-1 mr-2 md:mr-3" style={{ backgroundColor: PRIMARY_COLOR }}></div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800">CERTIFICATIONS</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {otherQualifications.map((qual, i) => (
                  <div key={i} className="p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h3 className="text-sm md:text-base font-bold text-gray-800">{qual.title}</h3>
                      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded mt-1 sm:mt-0">
                        {qual.year}
                      </span>
                    </div>
                    <div className="text-xs md:text-sm text-gray-700 mt-1">{qual.institution}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* References - Grid layout */}
          {references?.length > 0 && (
            <section>
              <div className="flex items-center mb-4">
                <div className="w-6 md:w-8 h-0.5 md:h-1 mr-2 md:mr-3" style={{ backgroundColor: PRIMARY_COLOR }}></div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800">REFERENCES</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {references.map((ref, i) => (
                  <div key={i} className="p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="text-sm md:text-base font-bold text-gray-800">{ref.name}</h3>
                    <div className="text-xs md:text-sm text-gray-700">{ref.position}, {ref.organization}</div>
                    <div className="text-xs text-gray-600 mt-1">{ref.relation}</div>
                    <div className="text-xs text-gray-600 mt-2 space-y-1">
                      <div className="flex items-center">
                        <svg className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {ref.contact}
                      </div>
                      {ref.email && (
                        <div className="flex items-center">
                          <svg className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {ref.email}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
});

export default CVPreview;