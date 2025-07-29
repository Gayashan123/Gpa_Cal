import React, { useState } from "react";
import CVPreview from "./CVPreview";
import { PDFDownloadLink } from '@react-pdf/renderer';
import Cvpdf from "./CvPdf";


// Theme palette
const COLOR_THEMES = [
  {
    name: "Blue",
    accent: "bg-[#1e40af] text-white", // blue-800
    border: "border-[#1e40af]",
    heading: "text-[#1e40af]"
  },  
  {
    name: "Green",
    accent: "bg-[#166534] text-white", // green-800
    border: "border-[#166534]",
    heading: "text-[#166534]"
  },
  {
    name: "Purple",
    accent: "bg-[#6b21a8] text-white", // purple-800
    border: "border-[#6b21a8]",
    heading: "text-[#6b21a8]"
  },
  {
    name: "Dark",
    accent: "bg-[#111827] text-white", // gray-900
    border: "border-[#111827]",
    heading: "text-[#111827]"
  }
];

const defaultFormData = {
  personalDetails: {
    fullName: "",
    nic: "",
    address: "",
    contactNumber: "",
    email: "",
    dateOfBirth: "",
    photo: null,
    photoPreview: ""
  },
  education: [],
  professionalExperience: [],
  olResults: { indexNo: "", year: "", subjects: [] },
  alResults: { indexNo: "", year: "", stream: "", subjects: [] },
  languages: [],
  otherQualifications: [],
  skills: "",
  interests: "",
  references: []
};

const commonSubjects = [
  "Mathematics", "English", "Science", "Sinhala", "Tamil", "History", "Geography",
  "Religion", "Commerce", "ICT", "Art", "Drama", "Music", "Dancing", "Health Science", "Agriculture"
];

const alsubjects = [
  // Science
  "Physics", "Chemistry", "Biology", "Combined Mathematics", "Agriculture", "ICT",

  // Commerce
  "Accounting", "Business Studies", "Economics", "Business Statistics",

  // Arts
  "Sinhala", "English", "Tamil", "Logic and Scientific Method", "Political Science",
  "History", "Geography", "Buddhism", "Christianity", "Islam", "Hinduism",
  "Media Studies", "Drama and Theatre", "Art", "Music", "Dancing", "Home Economics",

  // Technology
  "Engineering Technology", "Bio Systems Technology", "Science for Technology"
];

const alStreams = ["Physical Science", "Biological Science", "Commerce", "Arts", "Technology"];

const proficiencyLevels = [
  { value: "basic", label: "Basic" },
  { value: "intermediate", label: "Intermediate" },
  { value: "fluent", label: "Fluent" },
  { value: "native", label: "Native" }
];

const commonLanguages = [
  "Sinhala", "Tamil", "English", "Hindi", "French", "German", "Japanese", "Chinese", "Arabic", "Spanish"
];

const AcademicCV = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isReview, setIsReview] = useState(false);
  const [colorTheme, setColorTheme] = useState(COLOR_THEMES[0]);

  // Personal details handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        [name]: value
      }
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          personalDetails: {
            ...prev.personalDetails,
            photo: file,
            photoPreview: reader.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Education handlers
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData(prev => ({ ...prev, education: newEducation }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          institution: "",
          qualification: "",
          year: "",
          specialization: ""
        }
      ]
    }));
  };

  const removeEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  // Experience handlers
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...formData.professionalExperience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData(prev => ({ ...prev, professionalExperience: newExperience }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      professionalExperience: [
        ...prev.professionalExperience,
        {
          position: "",
          organization: "",
          duration: "",
          responsibilities: ""
        }
      ]
    }));
  };

  const removeExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      professionalExperience: prev.professionalExperience.filter((_, i) => i !== index)
    }));
  };

  // O/L handlers
  const handleOlChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      olResults: {
        ...prev.olResults,
        [name]: value
      }
    }));
  };

  const handleOlSubjectChange = (index, e) => {
    const { name, value } = e.target;
    const newSubjects = [...formData.olResults.subjects];
    newSubjects[index] = { ...newSubjects[index], [name]: value };
    setFormData(prev => ({
      ...prev,
      olResults: {
        ...prev.olResults,
        subjects: newSubjects
      }
    }));
  };

  const addOlSubject = () => {
    setFormData(prev => ({
      ...prev,
      olResults: {
        ...prev.olResults,
        subjects: [
          ...prev.olResults.subjects,
          { subject: "", grade: "" }
        ]
      }
    }));
  };

  const removeOlSubject = (index) => {
    setFormData(prev => ({
      ...prev,
      olResults: {
        ...prev.olResults,
        subjects: prev.olResults.subjects.filter((_, i) => i !== index)
      }
    }));
  };

  // A/L handlers
  const handleAlChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      alResults: {
        ...prev.alResults,
        [name]: value
      }
    }));
  };

  const handleAlSubjectChange = (index, e) => {
    const { name, value } = e.target;
    const newSubjects = [...formData.alResults.subjects];
    newSubjects[index] = { ...newSubjects[index], [name]: value };
    setFormData(prev => ({
      ...prev,
      alResults: {
        ...prev.alResults,
        subjects: newSubjects
      }
    }));
  };

  const addAlSubject = () => {
    setFormData(prev => ({
      ...prev,
      alResults: {
        ...prev.alResults,
        subjects: [
          ...prev.alResults.subjects,
          { subject: "", grade: "" }
        ]
      }
    }));
  };

  const removeAlSubject = (index) => {
    setFormData(prev => ({
      ...prev,
      alResults: {
        ...prev.alResults,
        subjects: prev.alResults.subjects.filter((_, i) => i !== index)
      }
    }));
  };

  // Language handlers
  const handleLanguageChange = (index, e) => {
    const { name, value } = e.target;
    const newLanguages = [...formData.languages];
    newLanguages[index] = { ...newLanguages[index], [name]: value };
    setFormData(prev => ({ ...prev, languages: newLanguages }));
  };

  const addLanguage = () => {
    setFormData(prev => ({
      ...prev,
      languages: [
        ...prev.languages,
        {
          language: "",
          proficiency: "basic"
        }
      ]
    }));
  };

  const removeLanguage = (index) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  // Other qualifications handlers
  const handleOtherQualificationChange = (index, e) => {
    const { name, value } = e.target;
    const newQualifications = [...formData.otherQualifications];
    newQualifications[index] = { ...newQualifications[index], [name]: value };
    setFormData(prev => ({ ...prev, otherQualifications: newQualifications }));
  };

  const addOtherQualification = () => {
    setFormData(prev => ({
      ...prev,
      otherQualifications: [
        ...prev.otherQualifications,
        {
          title: "",
          institution: "",
          year: ""
        }
      ]
    }));
  };

  const removeOtherQualification = (index) => {
    setFormData(prev => ({
      ...prev,
      otherQualifications: prev.otherQualifications.filter((_, i) => i !== index)
    }));
  };

  // References handlers
  const handleReferenceChange = (index, e) => {
    const { name, value } = e.target;
    const newReferences = [...formData.references];
    newReferences[index] = { ...newReferences[index], [name]: value };
    setFormData(prev => ({ ...prev, references: newReferences }));
  };

  const addReference = () => {
    setFormData(prev => ({
      ...prev,
      references: [
        ...prev.references,
        {
          name: "",
          position: "",
          organization: "",
          contact: "",
          relation: "professional"
        }
      ]
    }));
  };

  const removeReference = (index) => {
    setFormData(prev => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index)
    }));
  };

  // Skills & Interests
  const handleSkillsChange = (e) => {
    setFormData(prev => ({ ...prev, skills: e.target.value }));
  };
  
  const handleInterestsChange = (e) => {
    setFormData(prev => ({ ...prev, interests: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReview(true);
  };

  const handleEdit = () => setIsReview(false);
  const handleThemeChange = (themeIdx) => setColorTheme(COLOR_THEMES[themeIdx]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {!isReview ? (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold">Professional Academic CV</h1>
            <p className="mt-2 opacity-90">Comprehensive Curriculum Vitae Form</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
            {/* Personal Details */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 border-gray-200">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">1</span> Personal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.personalDetails.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        NIC Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nic"
                        value={formData.personalDetails.nic}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="199012345678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.personalDetails.dateOfBirth}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.personalDetails.contactNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="07XXXXXXXX"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.personalDetails.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.personalDetails.address}
                      onChange={handleChange}
                      rows={3}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-md">
                    {formData.personalDetails.photoPreview ? (
                      <img 
                        src={formData.personalDetails.photoPreview} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <label className="mt-4 cursor-pointer">
                    <span className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Upload Photo
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </label>
                  <p className="mt-2 text-xs text-gray-500 text-center">
                    Max 2MB (Passport size)
                  </p>
                </div>
              </div>
            </section>
            
            {/* Education */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">2</span> Educational Qualifications
                </h2>
                <button type="button" onClick={addEducation} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Education
                </button>
              </div>
              {formData.education.length === 0 ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">No education details added (optional)</div>
              ) : (
                formData.education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-700">Education {index + 1}</h3>
                      <button type="button" onClick={() => removeEducation(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                        <input type="text" name="institution" value={edu.institution} onChange={e => handleEducationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
                        <input type="text" name="qualification" value={edu.qualification} onChange={e => handleEducationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., B.Sc. in Computer Science" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                        <input type="text" name="year" value={edu.year} onChange={e => handleEducationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 2015-2019" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                        <input type="text" name="specialization" value={edu.specialization} onChange={e => handleEducationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Software Engineering" />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </section>
            
            {/* Professional Experience */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">3</span> Professional Experience
                </h2>
                <button type="button" onClick={addExperience} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Experience
                </button>
              </div>
              {formData.professionalExperience.length === 0 ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">No professional experience added (optional)</div>
              ) : (
                formData.professionalExperience.map((exp, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-700">Experience {index + 1}</h3>
                      <button type="button" onClick={() => removeExperience(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                        <input type="text" name="position" value={exp.position} onChange={e => handleExperienceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Software Engineer" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                        <input type="text" name="organization" value={exp.organization} onChange={e => handleExperienceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., ABC Technologies" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                        <input type="text" name="duration" value={exp.duration} onChange={e => handleExperienceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Jan 2020 - Present" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Key Responsibilities</label>
                      <textarea name="responsibilities" value={exp.responsibilities} onChange={e => handleExperienceChange(index, e)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe your key responsibilities and achievements" />
                    </div>
                  </div>
                ))
              )}
            </section>
            
            {/* O/L Results */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 border-gray-200">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">4</span> Ordinary Level (O/L) Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Index Number <span className="text-red-500">*</span></label>
                  <input type="text" name="indexNo" value={formData.olResults.indexNo} onChange={handleOlChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 1234567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year <span className="text-red-500">*</span></label>
                  <input type="text" name="year" value={formData.olResults.year} onChange={handleOlChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 2015" />
                </div>
              </div>
              <div className="space-y-4">
                {formData.olResults.subjects.map((result, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-gray-700">Subject {index + 1}</h3>
                      <button type="button" onClick={() => removeOlSubject(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject <span className="text-red-500">*</span></label>
                        <select name="subject" value={result.subject} onChange={e => handleOlSubjectChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">Select Subject</option>
                          {commonSubjects.map((subject, i) => (
                            <option key={i} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Grade <span className="text-red-500">*</span></label>
                        <input type="text" name="grade" value={result.grade} onChange={e => handleOlSubjectChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="A, B, C, etc." />
                      </div>
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addOlSubject} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add O/L Subject
                </button>
              </div>
            </section>
            
            {/* A/L Results */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 border-gray-200">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">5</span> Advanced Level (A/L) Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Index Number <span className="text-red-500">*</span></label>
                  <input type="text" name="indexNo" value={formData.alResults.indexNo} onChange={handleAlChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 1234567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year <span className="text-red-500">*</span></label>
                  <input type="text" name="year" value={formData.alResults.year} onChange={handleAlChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 2018" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stream <span className="text-red-500">*</span></label>
                  <select name="stream" value={formData.alResults.stream} onChange={handleAlChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select Stream</option>
                    {alStreams.map((stream, i) => (
                      <option key={i} value={stream}>{stream}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                {formData.alResults.subjects.map((result, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-gray-700">Subject {index + 1}</h3>
                      <button type="button" onClick={() => removeAlSubject(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject <span className="text-red-500">*</span></label>
                        <select name="subject" value={result.subject} onChange={e => handleAlSubjectChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">Select Subject</option>
                          {alsubjects.map((subject, i) => (
                            <option key={i} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Grade <span className="text-red-500">*</span></label>
                        <input type="text" name="grade" value={result.grade} onChange={e => handleAlSubjectChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="A, B, C, etc." />
                      </div>
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addAlSubject} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add A/L Subject
                </button>
              </div>
            </section>
            
            {/* Languages */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 border-gray-200">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">6</span> Language Proficiency
              </h2>
              <div className="space-y-4">
                {formData.languages.map((lang, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-gray-700">Language {index + 1}</h3>
                      <button type="button" onClick={() => removeLanguage(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Language <span className="text-red-500">*</span></label>
                        <select name="language" value={lang.language} onChange={e => handleLanguageChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">Select Language</option>
                          {commonLanguages.map((language, i) => (
                            <option key={i} value={language}>{language}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Proficiency Level <span className="text-red-500">*</span></label>
                        <select name="proficiency" value={lang.proficiency} onChange={e => handleLanguageChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          {proficiencyLevels.map((level, i) => (
                            <option key={i} value={level.value}>{level.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addLanguage} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Language
                </button>
              </div>
            </section>
            
            {/* Other Qualifications */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">7</span> Other Qualifications & Certifications
                </h2>
                <button type="button" onClick={addOtherQualification} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Qualification
                </button>
              </div>
              {formData.otherQualifications.length === 0 ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">No other qualifications added (optional)</div>
              ) : (
                formData.otherQualifications.map((qual, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-700">Qualification {index + 1}</h3>
                      <button type="button" onClick={() => removeOtherQualification(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input type="text" name="title" value={qual.title} onChange={e => handleOtherQualificationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Diploma in IT" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                        <input type="text" name="institution" value={qual.institution} onChange={e => handleOtherQualificationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., University of Colombo" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year Obtained</label>
                        <input type="text" name="year" value={qual.year} onChange={e => handleOtherQualificationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 2020" />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </section>
            
            {/* Skills & Interests */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 border-gray-200">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">8</span> Skills & Interests
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skills <span className="text-red-500">*</span></label>
                <textarea name="skills" value={formData.skills} onChange={handleSkillsChange} required rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="List your key skills (e.g., Programming, Leadership, Communication)" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
                <textarea name="interests" value={formData.interests} onChange={handleInterestsChange} rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your hobbies and interests (e.g., Reading, Sports, Volunteering)" />
              </div>
            </section>
            
            {/* References */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">9</span> References
                </h2>
                <button type="button" onClick={addReference} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Reference
                </button>
              </div>
              {formData.references.length === 0 ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">No references added (optional)</div>
              ) : (
                formData.references.map((ref, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-gray-700">Reference {index + 1}</h3>
                      <button type="button" onClick={() => removeReference(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" name="name" value={ref.name} onChange={e => handleReferenceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                        <input type="text" name="position" value={ref.position} onChange={e => handleReferenceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                        <input type="text" name="organization" value={ref.organization} onChange={e => handleReferenceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
                        <input type="text" name="contact" value={ref.contact} onChange={e => handleReferenceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Phone or Email" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
                        <select name="relation" value={ref.relation} onChange={e => handleReferenceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="professional">Professional</option>
                          <option value="academic">Academic</option>
                          <option value="personal">Personal</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </section>
            
            {/* Submit Button */}
            <div className="pt-6">
              <button type="submit" className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                Review Your CV
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">CV Preview</h2>
            <div className="flex gap-2">
              {COLOR_THEMES.map((theme, idx) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(idx)}
                  className={`px-3 py-1 rounded-full border ${theme.border} ${colorTheme.name === theme.name ? theme.accent : "bg-gray-200 text-gray-700"}`}
                >
                  {theme.name}
                </button>
              ))}
              <PDFDownloadLink
                document={<Cvpdf formData={formData} colorTheme={colorTheme} />}
                fileName="cv.pdf"
                className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Generating PDF...' : 'Download PDF'
                }
              </PDFDownloadLink>
              <button
                onClick={handleEdit}
                className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700"
              >
                Edit CV
              </button>
            </div>
          </div>
          <CVPreview formData={formData} colorTheme={colorTheme} />
        </div>
      )}
    </div>
  );
};

export default AcademicCV;