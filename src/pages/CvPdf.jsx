import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  sidebar: {
    width: '33%',
    backgroundColor: '#0047ab',
    padding: 20,
    color: 'white',
  },
  mainContent: {
    width: '67%',
    padding: 30,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
    paddingBottom: 5,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 10,
    opacity: 0.9,
  },
  contactLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  skillTag: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 8,
    // Removed backdropFilter as it's unsupported in react-pdf
  },
  languageContainer: {
    marginBottom: 10,
  },
  languageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  languageName: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  languageLevel: {
    fontSize: 10,
    opacity: 0.8,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 2,
    marginBottom: 10,
    width: '100%',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 2,
  },
  nameTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionLine: {
    width: 20,
    height: 2,
    backgroundColor: '#0047ab',
    marginRight: 10,
  },
  sectionTitleMain: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  experienceItem: {
    marginBottom: 20,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#e2e8f0',
    position: 'relative',
  },
  experienceDot: {
    position: 'absolute',
    left: -6,
    top: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0047ab',
    borderWidth: 2,
    borderColor: 'white',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  experienceTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  experienceDate: {
    fontSize: 10,
    color: '#718096',
    backgroundColor: '#f7fafc',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  experienceCompany: {
    fontSize: 12,
    color: '#4a5568',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bulletList: {
    marginLeft: 10,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
    color: '#0047ab',
  },
  bulletText: {
    fontSize: 10,
    color: '#4a5568',
  },
  educationItem: {
    marginBottom: 15,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#e2e8f0',
    position: 'relative',
  },
  educationDot: {
    position: 'absolute',
    left: -6,
    top: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0047ab',
    borderWidth: 2,
    borderColor: 'white',
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 3,
  },
  educationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  educationDate: {
    fontSize: 10,
    color: '#718096',
    backgroundColor: '#f7fafc',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  educationInstitution: {
    fontSize: 12,
    color: '#4a5568',
    fontWeight: 'bold',
  },
  educationDetails: {
    fontSize: 10,
    color: '#4a5568',
  },
  examHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  examTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  examDetails: {
    fontSize: 10,
    color: '#718096',
  },
  table: {
    width: '100%',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 5,
    marginBottom: 5,
  },
  tableHeaderCell: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f7fafc',
    paddingBottom: 5,
    paddingTop: 5,
  },
  tableCell: {
    fontSize: 10,
    color: '#4a5568',
  },
  certificationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  certificationItem: {
    width: '48%',
    backgroundColor: '#f7fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  certificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  certificationTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  certificationYear: {
    fontSize: 8,
    color: '#718096',
    backgroundColor: '#edf2f7',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  certificationInstitution: {
    fontSize: 10,
    color: '#4a5568',
  },
  referenceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  referenceItem: {
    width: '48%',
    backgroundColor: '#f7fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  referenceName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 3,
  },
  referencePosition: {
    fontSize: 10,
    color: '#4a5568',
    marginBottom: 5,
  },
  referenceRelation: {
    fontSize: 8,
    color: '#718096',
    marginBottom: 5,
  },
  contactSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  contactSmallIcon: {
    width: 10,
    marginRight: 5,
  },
  contactSmallText: {
    fontSize: 8,
    color: '#718096',
  },
});

// Helper function to convert proficiency text to width percentage
const getProficiencyWidth = (proficiency) => {
  if (!proficiency) return 50;
  switch (proficiency.toLowerCase()) {
    case 'native':
    case 'expert':
      return 100;
    case 'fluent':
    case 'advanced':
      return 80;
    case 'intermediate':
      return 60;
    case 'basic':
      return 40;
    case 'beginner':
      return 20;
    default:
      return 50;
  }
};

const Cvpdf = ({ formData }) => {
  const {
    personalDetails = {},
    education = [],
    professionalExperience = [],
    olResults = {},
    alResults = {},
    languages = [],
    otherQualifications = [],
    skills = '',
    interests = '',
    references = [],
  } = formData || {};

  const nameInitial = personalDetails.fullName ? personalDetails.fullName.charAt(0).toUpperCase() : '';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            {personalDetails.photoPreview ? (
              <Image src={personalDetails.photoPreview} style={styles.avatar} />
            ) : (
              <View
                style={[
                  styles.avatar,
                  { justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.2)' },
                ]}
              >
                <Text style={{ fontSize: 36, fontWeight: 'bold', color: 'white' }}>{nameInitial}</Text>
              </View>
            )}
          </View>

          {/* Contact */}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.sectionTitle}>CONTACT</Text>

            <View style={styles.contactItem}>
              <View>
                <Text style={styles.contactLabel}>Phone</Text>
                <Text style={styles.contactText}>{personalDetails.contactNumber}</Text>
              </View>
            </View>

            <View style={styles.contactItem}>
              <View>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactText}>{personalDetails.email}</Text>
              </View>
            </View>

            {personalDetails.address && (
              <View style={styles.contactItem}>
                <View>
                  <Text style={styles.contactLabel}>Address</Text>
                  <Text style={styles.contactText}>{personalDetails.address}</Text>
                </View>
              </View>
            )}

            {(personalDetails.nic || personalDetails.dateOfBirth) && (
              <View style={styles.contactItem}>
                <View>
                  <Text style={styles.contactLabel}>Details</Text>
                  <Text style={styles.contactText}>
                    {personalDetails.nic && `NIC: ${personalDetails.nic}`}
                    {personalDetails.nic && personalDetails.dateOfBirth && ' '}
                    {personalDetails.dateOfBirth && `DOB: ${personalDetails.dateOfBirth}`}
                  </Text>
                </View>
              </View>
            )}
          </View>

          {/* Skills */}
          {skills && skills.trim() && (
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {skills.split(',').map((skill, i) => (
                  <Text key={i} style={styles.skillTag}>
                    {skill.trim()}
                  </Text>
                ))}
              </View>
            </View>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.sectionTitle}>LANGUAGES</Text>
              <View>
                {languages.map((lang, i) => (
                  <View key={i} style={styles.languageContainer}>
                    <View style={styles.languageHeader}>
                      <Text style={styles.languageName}>{lang.language}</Text>
                      <Text style={styles.languageLevel}>{lang.proficiency}</Text>
                    </View>
                    <View style={styles.progressBar}>
                      <View style={[styles.progressFill, { width: `${getProficiencyWidth(lang.proficiency)}%` }]} />
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Interests */}
          {interests && (
            <View>
              <Text style={styles.sectionTitle}>INTERESTS</Text>
              <Text style={styles.contactText}>{interests}</Text>
            </View>
          )}
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Name and Title */}
          <Text style={styles.nameTitle}>{personalDetails.fullName}</Text>

          {/* Professional Experience */}
          {professionalExperience.length > 0 && (
            <View style={{ marginBottom: 30 }}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionLine} />
                <Text style={styles.sectionTitleMain}>EXPERIENCE</Text>
              </View>

              <View>
                {professionalExperience.map((exp, i) => (
                  <View key={i} style={styles.experienceItem}>
                    <View style={styles.experienceDot} />
                    <View style={styles.experienceHeader}>
                      <Text style={styles.experienceTitle}>{exp.position}</Text>
                      <Text style={styles.experienceDate}>{exp.duration}</Text>
                    </View>
                    <Text style={styles.experienceCompany}>{exp.organization}</Text>
                    {exp.responsibilities && (
                      <View style={styles.bulletList}>
                        {exp.responsibilities.split('\n').map(
                          (item, idx) =>
                            item.trim() && (
                              <View key={idx} style={styles.bulletItem}>
                                <Text style={styles.bulletPoint}>•</Text>
                                <Text style={styles.bulletText}>{item}</Text>
                              </View>
                            )
                        )}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Education */}
          {education.length > 0 && (
            <View style={{ marginBottom: 30 }}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionLine} />
                <Text style={styles.sectionTitleMain}>EDUCATION</Text>
              </View>

              <View>
                {education.map((edu, i) => (
                  <View key={i} style={styles.educationItem}>
                    <View style={styles.educationDot} />
                    <View style={styles.educationHeader}>
                      <Text style={styles.educationTitle}>{edu.qualification}</Text>
                      <Text style={styles.educationDate}>{edu.year}</Text>
                    </View>
                    <Text style={styles.educationInstitution}>{edu.institution}</Text>
                    <Text style={styles.educationDetails}>
                      {edu.specialization && `${edu.specialization} | `}
                      {edu.grade && `Grade: ${edu.grade}`}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* O/L and A/L Results */}
          {(olResults.indexNo || alResults.indexNo) && (
            <View style={{ marginBottom: 30 }}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionLine} />
                <Text style={styles.sectionTitleMain}>EXAM RESULTS</Text>
              </View>

              {/* O/L Results */}
              {olResults.indexNo && (
                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.examTitle}>G.C.E. Ordinary Level ({olResults.year})</Text>
                  <Text style={styles.examDetails}>Index No: {olResults.indexNo}</Text>

                  <View style={styles.table}>
                    <View style={styles.tableHeader}>
                      <Text style={[styles.tableHeaderCell, { width: '70%' }]}>Subject</Text>
                      <Text style={[styles.tableHeaderCell, { width: '30%', textAlign: 'right' }]}>Grade</Text>
                    </View>

                    {olResults.subjects?.map((subj, i) => (
                      <View key={i} style={styles.tableRow}>
                        <Text style={[styles.tableCell, { width: '70%' }]}>{subj.subject}</Text>
                        <Text
                          style={[
                            styles.tableCell,
                            { width: '30%', textAlign: 'right', fontWeight: 'bold' },
                          ]}
                        >
                          {subj.grade}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {/* A/L Results */}
              {alResults.indexNo && (
                <View>
                  <Text style={styles.examTitle}>G.C.E. Advanced Level ({alResults.year})</Text>
                  <Text style={styles.examDetails}>
                    Index No: {alResults.indexNo} | Stream: {alResults.stream}
                  </Text>

                  <View style={styles.table}>
                    <View style={styles.tableHeader}>
                      <Text style={[styles.tableHeaderCell, { width: '70%' }]}>Subject</Text>
                      <Text style={[styles.tableHeaderCell, { width: '30%', textAlign: 'right' }]}>Grade</Text>
                    </View>

                    {alResults.subjects?.map((subj, i) => (
                      <View key={i} style={styles.tableRow}>
                        <Text style={[styles.tableCell, { width: '70%' }]}>{subj.subject}</Text>
                        <Text
                          style={[
                            styles.tableCell,
                            { width: '30%', textAlign: 'right', fontWeight: 'bold' },
                          ]}
                        >
                          {subj.grade}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          )}

          {/* Certifications */}
          {otherQualifications.length > 0 && (
            <View style={{ marginBottom: 30 }}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionLine} />
                <Text style={styles.sectionTitleMain}>CERTIFICATIONS</Text>
              </View>

              <View style={styles.certificationGrid}>
                {otherQualifications.map((qual, i) => (
                  <View key={i} style={styles.certificationItem}>
                    <View style={styles.certificationHeader}>
                      <Text style={styles.certificationTitle}>{qual.title}</Text>
                      <Text style={styles.certificationYear}>{qual.year}</Text>
                    </View>
                    <Text style={styles.certificationInstitution}>{qual.institution}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* References */}
          {references.length > 0 && (
            <View>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionLine} />
                <Text style={styles.sectionTitleMain}>REFERENCES</Text>
              </View>

              <View style={styles.referenceGrid}>
                {references.map((ref, i) => (
                  <View key={i} style={styles.referenceItem}>
                    <Text style={styles.referenceName}>{ref.name}</Text>
                    <Text style={styles.referencePosition}>{ref.position}, {ref.organization}</Text>
                    <Text style={styles.referenceRelation}>{ref.relation}</Text>
                    <View style={styles.contactSmall}>
                      <Text style={styles.contactSmallIcon}>📞</Text>
                      <Text style={styles.contactSmallText}>{ref.contact}</Text>
                    </View>
                    {ref.email && (
                      <View style={styles.contactSmall}>
                        <Text style={styles.contactSmallIcon}>✉️</Text>
                        <Text style={styles.contactSmallText}>{ref.email}</Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default Cvpdf;
