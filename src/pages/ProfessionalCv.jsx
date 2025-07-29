
import React, { useState } from "react";
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import CVPreview from "./CVPreview1";

// Theme palette
const COLOR_THEMES = [
  {
    name: "Blue",
    accent: "bg-blue-800 text-white",
    border: "border-blue-800",
    heading: "text-blue-800"
  },
  {
    name: "Green",
    accent: "bg-green-800 text-white",
    border: "border-green-800",
    heading: "text-green-800"
  },
  {
    name: "Purple",
    accent: "bg-purple-800 text-white",
    border: "border-purple-800",
    heading: "text-purple-800"
  },
  {
    name: "Dark",
    accent: "bg-gray-900 text-white",
    border: "border-gray-900",
    heading: "text-gray-900"
  }
];

const defaultFormData = {
  personalDetails: {
    fullName: "",
    address: "",
    contactNumber: "",
    email: "",
    portfolio: "",
    github: "",
    linkedin: "",
    photo: null,
    photoPreview: "",
    position: "",
    summary: ""
  },
  education: [],
  experience: [],
  technicalSkills: {
    programmingLanguages: [],
    frameworks: [],
    tools: [],
    databases: [],
    methodologies: []
  },
  projects: [],
  certifications: [],
  languages: [],
  skills: "",
  interests: "",
  references: []
};

const programmingLanguages = [
  "JavaScript", "TypeScript", "Python", "Java", "C#", "C++", "Ruby", "Go",
  "Rust", "Swift", "Kotlin", "PHP", "SQL", "HTML/CSS", "Dart"
];

const frameworks = [
  "React", "Angular", "Vue.js", "Node.js", "Express", "Django", "Flask",
  "Spring Boot", ".NET Core", "Laravel", "Ruby on Rails", "Flutter",
  "React Native", "TensorFlow", "PyTorch"
];

const databases = [
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Oracle",
  "SQL Server", "DynamoDB", "Cassandra", "Elasticsearch"
];

const devTools = [
  "Git", "Docker", "Kubernetes", "Jenkins", "AWS", "Azure", "GCP",
  "Terraform", "Ansible", "CI/CD", "JIRA", "VS Code", "IntelliJ",
  "Postman", "Swagger"
];

const methodologies = [
  "Agile", "Scrum", "Kanban", "TDD", "BDD", "DDD", "CI/CD",
  "Microservices", "RESTful APIs", "GraphQL", "SOA", "MVC"
];

const proficiencyLevels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert" }
];

const commonLanguages = [
  "Sinhala", "Tamil", "English", "Hindi", "French", "German", "Japanese", "Chinese", "Arabic", "Spanish"
];

// PDF Document Component
const MyDocument = ({ formData, colorTheme }) => {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontFamily: 'Helvetica',
      fontSize: 12,
    },
    section: {
      marginBottom: 20,
    },
    header: {
      flexDirection: 'row',
      marginBottom: 20,
      borderBottomWidth: 2,
      borderBottomColor: colorTheme.name === 'Blue' ? '#1e40af' : 
                         colorTheme.name === 'Green' ? '#166534' :
                         colorTheme.name === 'Purple' ? '#6b21a8' : '#111827',
      paddingBottom: 10,
    },
    headerText: {
      flex: 1,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colorTheme.name === 'Blue' ? '#1e40af' : 
             colorTheme.name === 'Green' ? '#166534' :
             colorTheme.name === 'Purple' ? '#6b21a8' : '#111827',
      marginBottom: 5,
    },
    position: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    contactInfo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5,
    },
    contactItem: {
      width: '50%',
      marginBottom: 5,
    },
    photo: {
      width: 80,
      height: 80,
      borderRadius: 40,
      borderWidth: 2,
      borderColor: colorTheme.name === 'Blue' ? '#1e40af' : 
                  colorTheme.name === 'Green' ? '#166534' :
                  colorTheme.name === 'Purple' ? '#6b21a8' : '#111827',
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colorTheme.name === 'Blue' ? '#1e40af' : 
             colorTheme.name === 'Green' ? '#166534' :
             colorTheme.name === 'Purple' ? '#6b21a8' : '#111827',
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
      paddingBottom: 3,
    },
    summary: {
      lineHeight: 1.5,
    },
    educationItem: {
      marginBottom: 10,
    },
    educationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 3,
    },
    institution: {
      fontWeight: 'bold',
    },
    degree: {
      fontStyle: 'italic',
    },
    experienceItem: {
      marginBottom: 15,
    },
    experienceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 3,
    },
    company: {
      fontWeight: 'bold',
    },
    jobTitle: {
      fontStyle: 'italic',
    },
    responsibilities: {
      marginLeft: 10,
      marginTop: 5,
    },
    responsibility: {
      flexDirection: 'row',
      marginBottom: 3,
    },
    bullet: {
      width: 10,
    },
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    skillCategory: {
      width: '50%',
      marginBottom: 10,
    },
    skillCategoryTitle: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    skillItem: {
      marginBottom: 3,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.name}>{formData.personalDetails.fullName}</Text>
            <Text style={styles.position}>{formData.personalDetails.position}</Text>
            <View style={styles.contactInfo}>
              <View style={styles.contactItem}>
                <Text>{formData.personalDetails.email}</Text>
              </View>
              <View style={styles.contactItem}>
                <Text>{formData.personalDetails.contactNumber}</Text>
              </View>
              <View style={styles.contactItem}>
                <Text>{formData.personalDetails.address}</Text>
              </View>
              <View style={styles.contactItem}>
                <Text>{formData.personalDetails.linkedin}</Text>
              </View>
              <View style={styles.contactItem}>
                <Text>{formData.personalDetails.github}</Text>
              </View>
              <View style={styles.contactItem}>
                <Text>{formData.personalDetails.portfolio}</Text>
              </View>
            </View>
          </View>
          {formData.personalDetails.photoPreview && (
            <Image 
              style={styles.photo} 
              src={formData.personalDetails.photoPreview} 
            />
          )}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
          <Text style={styles.summary}>{formData.personalDetails.summary}</Text>
        </View>

        {/* Education */}
        {formData.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {formData.education.map((edu, index) => (
              <View key={index} style={styles.educationItem}>
                <View style={styles.educationHeader}>
                  <Text style={styles.institution}>{edu.institution}</Text>
                  <Text>{edu.year}</Text>
                </View>
                <Text style={styles.degree}>{edu.degree}</Text>
                {edu.fieldOfStudy && <Text>Field of Study: {edu.fieldOfStudy}</Text>}
                {edu.gpa && <Text>GPA: {edu.gpa}</Text>}
                {edu.achievements && <Text>Achievements: {edu.achievements}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        {formData.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
            {formData.experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text>{exp.startDate} - {exp.endDate || 'Present'}</Text>
                </View>
                <Text style={styles.jobTitle}>{exp.position}</Text>
                {exp.location && <Text>Location: {exp.location}</Text>}
                
                {exp.responsibilities.length > 0 && (
                  <View style={styles.responsibilities}>
                    <Text>Responsibilities:</Text>
                    {exp.responsibilities.map((resp, i) => (
                      <View key={i} style={styles.responsibility}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>{resp}</Text>
                      </View>
                    ))}
                  </View>
                )}
                
                {exp.technologies.length > 0 && (
                  <Text>Technologies: {exp.technologies.join(', ')}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
          <View style={styles.skillsContainer}>
            {formData.technicalSkills.programmingLanguages.length > 0 && (
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Programming Languages</Text>
                {formData.technicalSkills.programmingLanguages.map((skill, i) => (
                  <Text key={i} style={styles.skillItem}>• {skill}</Text>
                ))}
              </View>
            )}
            
            {formData.technicalSkills.frameworks.length > 0 && (
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Frameworks & Libraries</Text>
                {formData.technicalSkills.frameworks.map((skill, i) => (
                  <Text key={i} style={styles.skillItem}>• {skill}</Text>
                ))}
              </View>
            )}
            
            {formData.technicalSkills.databases.length > 0 && (
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Databases</Text>
                {formData.technicalSkills.databases.map((skill, i) => (
                  <Text key={i} style={styles.skillItem}>• {skill}</Text>
                ))}
              </View>
            )}
            
            {formData.technicalSkills.tools.length > 0 && (
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Tools & Platforms</Text>
                {formData.technicalSkills.tools.map((skill, i) => (
                  <Text key={i} style={styles.skillItem}>• {skill}</Text>
                ))}
              </View>
            )}
            
            {formData.technicalSkills.methodologies.length > 0 && (
              <View style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>Methodologies</Text>
                {formData.technicalSkills.methodologies.map((skill, i) => (
                  <Text key={i} style={styles.skillItem}>• {skill}</Text>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Projects */}
        {formData.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {formData.projects.map((project, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={styles.company}>{project.name}</Text>
                {project.role && <Text style={styles.jobTitle}>Role: {project.role}</Text>}
                {project.link && <Text>Link: {project.link}</Text>}
                <Text>{project.description}</Text>
                {project.technologies.length > 0 && (
                  <Text>Technologies: {project.technologies.join(', ')}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Certifications */}
        {formData.certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
            {formData.certifications.map((cert, index) => (
              <View key={index} style={styles.educationItem}>
                <Text style={styles.institution}>{cert.name}</Text>
                <Text>Issued by: {cert.issuer}</Text>
                {cert.date && <Text>Date: {cert.date}</Text>}
                {cert.credentialId && <Text>Credential ID: {cert.credentialId}</Text>}
                {cert.credentialUrl && <Text>URL: {cert.credentialUrl}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Languages */}
        {formData.languages.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>LANGUAGES</Text>
            <View style={styles.skillsContainer}>
              {formData.languages.map((lang, index) => (
                <View key={index} style={styles.skillCategory}>
                  <Text>{lang.language}: {lang.proficiency}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Skills & Interests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ADDITIONAL SKILLS & INTERESTS</Text>
          {formData.skills && (
            <View style={styles.section}>
              <Text style={styles.skillCategoryTitle}>Skills</Text>
              <Text>{formData.skills}</Text>
            </View>
          )}
          {formData.interests && (
            <View style={styles.section}>
              <Text style={styles.skillCategoryTitle}>Interests</Text>
              <Text>{formData.interests}</Text>
            </View>
          )}
        </View>

        {/* References */}
        {formData.references.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>REFERENCES</Text>
            <View style={styles.skillsContainer}>
              {formData.references.map((ref, index) => (
                <View key={index} style={styles.skillCategory}>
                  <Text style={styles.institution}>{ref.name}</Text>
                  <Text>{ref.position}, {ref.organization}</Text>
                  <Text>Contact: {ref.contact}</Text>
                  <Text>Relationship: {ref.relation}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

const ProfessionalCV = () => {
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
          degree: "",
          fieldOfStudy: "",
          year: "",
          gpa: "",
          achievements: ""
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
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    setFormData(prev => ({ ...prev, experience: newExperience }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          position: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          responsibilities: [],
          technologies: []
        }
      ]
    }));
  };

  const removeExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addExperienceResponsibility = (expIndex) => {
    const newExperience = [...formData.experience];
    newExperience[expIndex].responsibilities.push("");
    setFormData(prev => ({ ...prev, experience: newExperience }));
  };

  const handleExperienceResponsibilityChange = (expIndex, respIndex, e) => {
    const newExperience = [...formData.experience];
    newExperience[expIndex].responsibilities[respIndex] = e.target.value;
    setFormData(prev => ({ ...prev, experience: newExperience }));
  };

  const removeExperienceResponsibility = (expIndex, respIndex) => {
    const newExperience = [...formData.experience];
    newExperience[expIndex].responsibilities =
      newExperience[expIndex].responsibilities.filter((_, i) => i !== respIndex);
    setFormData(prev => ({ ...prev, experience: newExperience }));
  };

  const addExperienceTechnology = (expIndex) => {
    const newExperience = [...formData.experience];
    newExperience[expIndex].technologies.push("");
    setFormData(prev => ({ ...prev, experience: newExperience }));
  };

  const handleExperienceTechnologyChange = (expIndex, techIndex, e) => {
    const newExperience = [...formData.experience];
    newExperience[expIndex].technologies[techIndex] = e.target.value;
    setFormData(prev => ({ ...prev, experience: newExperience }));
  };

  const removeExperienceTechnology = (expIndex, techIndex) => {
    const newExperience = [...formData.experience];
    newExperience[expIndex].technologies =
      newExperience[expIndex].technologies.filter((_, i) => i !== techIndex);
    setFormData(prev => ({ ...prev, experience: newExperience }));
  };

  // Technical Skills handlers
  const handleTechnicalSkillChange = (category, value) => {
    setFormData(prev => {
      const currentSkills = [...prev.technicalSkills[category]];
      const index = currentSkills.indexOf(value);
      if (index === -1) {
        return {
          ...prev,
          technicalSkills: {
            ...prev.technicalSkills,
            [category]: [...currentSkills, value]
          }
        };
      } else {
        return {
          ...prev,
          technicalSkills: {
            ...prev.technicalSkills,
            [category]: currentSkills.filter(skill => skill !== value)
          }
        };
      }
    });
  };

  // Projects handlers
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [name]: value };
    setFormData(prev => ({ ...prev, projects: newProjects }));
  };

  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: "",
          description: "",
          technologies: [],
          link: "",
          role: ""
        }
      ]
    }));
  };

  const removeProject = (index) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const addProjectTechnology = (projectIndex) => {
    const newProjects = [...formData.projects];
    newProjects[projectIndex].technologies.push("");
    setFormData(prev => ({ ...prev, projects: newProjects }));
  };

  const handleProjectTechnologyChange = (projectIndex, techIndex, e) => {
    const newProjects = [...formData.projects];
    newProjects[projectIndex].technologies[techIndex] = e.target.value;
    setFormData(prev => ({ ...prev, projects: newProjects }));
  };

  const removeProjectTechnology = (projectIndex, techIndex) => {
    const newProjects = [...formData.projects];
    newProjects[projectIndex].technologies =
      newProjects[projectIndex].technologies.filter((_, i) => i !== techIndex);
    setFormData(prev => ({ ...prev, projects: newProjects }));
  };

  // Certifications handlers
  const handleCertificationChange = (index, e) => {
    const { name, value } = e.target;
    const newCertifications = [...formData.certifications];
    newCertifications[index] = { ...newCertifications[index], [name]: value };
    setFormData(prev => ({ ...prev, certifications: newCertifications }));
  };

  const addCertification = () => {
    setFormData(prev => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        {
          name: "",
          issuer: "",
          date: "",
          credentialId: "",
          credentialUrl: ""
        }
      ]
    }));
  };

  const removeCertification = (index) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
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
          proficiency: "intermediate"
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

  // Skills & Interests
  const handleSkillsChange = (e) => {
    setFormData(prev => ({ ...prev, skills: e.target.value }));
  };
  const handleInterestsChange = (e) => {
    setFormData(prev => ({ ...prev, interests: e.target.value }));
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

  // Submit/Review
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
            <h1 className="text-2xl sm:text-3xl font-bold">Professional Software Engineer CV</h1>
            <p className="mt-2 opacity-90">Build your professional developer profile</p>
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
                        Apply Position <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.personalDetails.position}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
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
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.personalDetails.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.personalDetails.contactNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio Website
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.personalDetails.portfolio}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        GitHub
                      </label>
                      <input
                        type="url"
                        name="github"
                        value={formData.personalDetails.github}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://github.com/username"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.personalDetails.linkedin}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.personalDetails.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Professional Summary <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="summary"
                      value={formData.personalDetails.summary}
                      onChange={handleChange}
                      rows={3}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Briefly describe your professional background, skills, and career objectives (3-5 sentences)"
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
                    Professional headshot recommended
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">2</span> Education
                </h2>
                <button type="button" onClick={addEducation} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Education
                </button>
              </div>
              {formData.education.length === 0 ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">No education details added</div>
              ) : (
                formData.education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-700">Education {index + 1}</h3>
                      <button type="button" onClick={() => removeEducation(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Institution <span className="text-red-500">*</span></label>
                        <input type="text" name="institution" value={edu.institution} onChange={e => handleEducationChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="University Name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Degree <span className="text-red-500">*</span></label>
                        <input type="text" name="degree" value={edu.degree} onChange={e => handleEducationChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., B.Sc. in Computer Science" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                        <input type="text" name="fieldOfStudy" value={edu.fieldOfStudy} onChange={e => handleEducationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Software Engineering" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year <span className="text-red-500">*</span></label>
                        <input type="text" name="year" value={edu.year} onChange={e => handleEducationChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 2015-2019" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                        <input type="text" name="gpa" value={edu.gpa} onChange={e => handleEducationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 3.8/4.0" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Achievements</label>
                      <textarea name="achievements" value={edu.achievements} onChange={e => handleEducationChange(index, e)} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Honors, awards, or notable achievements" />
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
              {formData.experience.length === 0 ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">No professional experience added</div>
              ) : (
                formData.experience.map((exp, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-700">Experience {index + 1}</h3>
                      <button type="button" onClick={() => removeExperience(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Position <span className="text-red-500">*</span></label>
                        <input type="text" name="position" value={exp.position} onChange={e => handleExperienceChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Senior Software Engineer" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company <span className="text-red-500">*</span></label>
                        <input type="text" name="company" value={exp.company} onChange={e => handleExperienceChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Google" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input type="text" name="location" value={exp.location} onChange={e => handleExperienceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., San Francisco, CA" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date <span className="text-red-500">*</span></label>
                          <input type="text" name="startDate" value={exp.startDate} onChange={e => handleExperienceChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Jun 2020" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                          <input type="text" name="endDate" value={exp.endDate} onChange={e => handleExperienceChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Present" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities</label>
                      <div className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <div key={respIndex} className="flex items-center">
                            <input
                              type="text"
                              value={resp}
                              onChange={e => handleExperienceResponsibilityChange(index, respIndex, e)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Describe a responsibility or achievement"
                            />
                            <button
                              type="button"
                              onClick={() => removeExperienceResponsibility(index, respIndex)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => addExperienceResponsibility(index)}
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          Add Responsibility
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Technologies Used</label>
                      <div className="space-y-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center">
                            <input
                              type="text"
                              value={tech}
                              onChange={e => handleExperienceTechnologyChange(index, techIndex, e)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., React, Node.js, AWS"
                            />
                            <button
                              type="button"
                              onClick={() => removeExperienceTechnology(index, techIndex)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => addExperienceTechnology(index)}
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          Add Technology
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </section>

            {/* Technical Skills */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 border-gray-200">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">4</span> Technical Skills
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {programmingLanguages.map(lang => (
                      <label key={lang} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.technicalSkills.programmingLanguages.includes(lang)}
                          onChange={() => handleTechnicalSkillChange('programmingLanguages', lang)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {frameworks.map(framework => (
                      <label key={framework} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.technicalSkills.frameworks.includes(framework)}
                          onChange={() => handleTechnicalSkillChange('frameworks', framework)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">{framework}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {databases.map(db => (
                      <label key={db} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.technicalSkills.databases.includes(db)}
                          onChange={() => handleTechnicalSkillChange('databases', db)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">{db}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {devTools.map(tool => (
                      <label key={tool} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.technicalSkills.tools.includes(tool)}
                          onChange={() => handleTechnicalSkillChange('tools', tool)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">{tool}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Methodologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {methodologies.map(method => (
                      <label key={method} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.technicalSkills.methodologies.includes(method)}
                          onChange={() => handleTechnicalSkillChange('methodologies', method)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">5</span> Projects
                </h2>
                <button type="button" onClick={addProject} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Project
                </button>
              </div>
              {formData.projects.length === 0 ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">No projects added</div>
              ) : (
                formData.projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-700">Project {index + 1}</h3>
                      <button type="button" onClick={() => removeProject(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Name <span className="text-red-500">*</span></label>
                        <input type="text" name="name" value={project.name} onChange={e => handleProjectChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., E-commerce Platform" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Link</label>
                        <input type="url" name="link" value={project.link} onChange={e => handleProjectChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="https://project-url.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                        <input type="text" name="role" value={project.role} onChange={e => handleProjectChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Full-stack Developer" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description <span className="text-red-500">*</span></label>
                      <textarea name="description" value={project.description} onChange={e => handleProjectChange(index, e)} required rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe the project, its purpose, and your contributions" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Technologies Used</label>
                      <div className="space-y-2">
                        {project.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center">
                            <input
                              type="text"
                              value={tech}
                              onChange={e => handleProjectTechnologyChange(index, techIndex, e)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., React, Node.js, MongoDB"
                            />
                            <button
                              type="button"
                              onClick={() => removeProjectTechnology(index, techIndex)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => addProjectTechnology(index)}
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          Add Technology
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </section>

            {/* Certifications */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">6</span> Certifications
                </h2>
                <button type="button" onClick={addCertification} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Certification
                </button>
              </div>
              {formData.certifications.length === 0 ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">No certifications added</div>
              ) : (
                formData.certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-700">Certification {index + 1}</h3>
                      <button type="button" onClick={() => removeCertification(index)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name <span className="text-red-500">*</span></label>
                        <input type="text" name="name" value={cert.name} onChange={e => handleCertificationChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., AWS Certified Developer" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Organization <span className="text-red-500">*</span></label>
                        <input type="text" name="issuer" value={cert.issuer} onChange={e => handleCertificationChange(index, e)} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Amazon Web Services" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date Obtained</label>
                        <input type="text" name="date" value={cert.date} onChange={e => handleCertificationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Jun 2022" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Credential ID</label>
                        <input type="text" name="credentialId" value={cert.credentialId} onChange={e => handleCertificationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., ABC123456789" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Credential URL</label>
                        <input type="url" name="credentialUrl" value={cert.credentialUrl} onChange={e => handleCertificationChange(index, e)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="https://certificate.url" />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </section>

            {/* Languages */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">7</span> Languages
                </h2>
                <button type="button" onClick={addLanguage} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Language
                </button>
              </div>
              {formData.languages.length === 0 ? (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">No languages added</div>
              ) : (
                formData.languages.map((lang, index) => (
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
              <div className="ml-4">
                <PDFDownloadLink 
                  document={<MyDocument formData={formData} colorTheme={colorTheme} />} 
                  fileName="cv.pdf"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
                >
                  {({ blob, url, loading, error }) => 
                    loading ? 'Loading document...' : 'Download PDF'
                  }
                </PDFDownloadLink>
              </div>
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

export default ProfessionalCV;