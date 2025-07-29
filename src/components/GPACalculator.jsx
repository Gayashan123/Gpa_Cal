import React, { useState } from 'react';

const GPACalculator = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: '', credits: '', grade: '' }
  ]);
  const [gpaScale, setGpaScale] = useState('4.0');
  const [calculatedGPA, setCalculatedGPA] = useState(null);
  const [gradeClass, setGradeClass] = useState('');
  const [showGradeDetails, setShowGradeDetails] = useState(false);

  const gradePoints = {
    '4.0': {
      'A+': 4.0, 'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D+': 1.3, 'D': 1.0, 'F': 0.0,
      'P': null, 'NP': null, 'I': null, 'W': null
    },
    '4.3': {
      'A+': 4.3, 'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D+': 1.3, 'D': 1.0, 'D-': 0.7, 'F': 0.0,
      'P': null, 'NP': null, 'I': null, 'W': null
    },
    '5.0': {
      'A': 5.0, 'B': 4.0, 'C': 3.0, 'D': 2.0, 'F': 0.0,
      'P': null, 'NP': null, 'I': null, 'W': null
    },
    '10.0': {
      '10': 10.0, '9': 9.0, '8': 8.0, '7': 7.0,
      '6': 6.0, '5': 5.0, '4': 4.0, '3': 3.0,
      '2': 2.0, '1': 1.0, '0': 0.0,
      'P': null, 'NP': null, 'I': null, 'W': null
    }
  };

  const getGradeOptions = () => {
    const commonGrades = ['P', 'NP', 'I', 'W'];
    
    switch (gpaScale) {
      case '4.0':
        return ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F', ...commonGrades];
      case '4.3':
        return ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F', ...commonGrades];
      case '5.0':
        return ['A', 'B', 'C', 'D', 'F', ...commonGrades];
      case '10.0':
        return ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', ...commonGrades];
      default:
        return [];
    }
  };

  const addCourse = () => {
    const newId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
    setCourses([...courses, { id: newId, name: '', credits: '', grade: '' }]);
  };

  const removeCourse = (id) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const updateCourse = (id, field, value) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    let creditsAttempted = 0;
    
    for (const course of courses) {
      if (course.credits) {
        const credits = parseFloat(course.credits);
        creditsAttempted += credits;
        
        if (course.grade && gradePoints[gpaScale][course.grade] !== null) {
          const gradePoint = gradePoints[gpaScale][course.grade];
          totalCredits += credits;
          totalGradePoints += credits * gradePoint;
        }
      }
    }
    
    if (totalCredits > 0) {
      const gpa = totalGradePoints / totalCredits;
      setCalculatedGPA({
        value: gpa.toFixed(2),
        creditsAttempted: creditsAttempted,
        creditsCounted: totalCredits
      });
      
      // Determine grade class based on 4.0 scale
      if (gpa >= 3.7) setGradeClass('First Class Honours');
      else if (gpa >= 3.3) setGradeClass('Upper Second Class Honours');
      else if (gpa >= 3.0) setGradeClass('Lower Second Class Honours');
      else if (gpa >= 2.0) setGradeClass('Third Class Honours');
      else setGradeClass('Ordinary Degree');
    } else {
      setCalculatedGPA(null);
      setGradeClass('');
    }
  };

  const resetCalculator = () => {
    setCourses([{ id: 1, name: '', credits: '', grade: '' }]);
    setCalculatedGPA(null);
    setGradeClass('');
  };

  const getGradePointDetails = () => {
    switch (gpaScale) {
      case '4.0':
        return (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">4.0 Scale Grade Points:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              <div>A+ = 4.0</div>
              <div>A = 4.0</div>
              <div>A- = 3.7</div>
              <div>B+ = 3.3</div>
              <div>B = 3.0</div>
              <div>B- = 2.7</div>
              <div>C+ = 2.3</div>
              <div>C = 2.0</div>
              <div>C- = 1.7</div>
              <div>D+ = 1.3</div>
              <div>D = 1.0</div>
              <div>F = 0.0</div>
              <div className="text-gray-500">P/NP/I/W = Not counted</div>
            </div>
          </div>
        );
      case '4.3':
        return (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">4.3 Scale Grade Points:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              <div>A+ = 4.3</div>
              <div>A = 4.0</div>
              <div>A- = 3.7</div>
              <div>B+ = 3.3</div>
              <div>B = 3.0</div>
              <div>B- = 2.7</div>
              <div>C+ = 2.3</div>
              <div>C = 2.0</div>
              <div>C- = 1.7</div>
              <div>D+ = 1.3</div>
              <div>D = 1.0</div>
              <div>D- = 0.7</div>
              <div>F = 0.0</div>
              <div className="text-gray-500">P/NP/I/W = Not counted</div>
            </div>
          </div>
        );
      case '5.0':
        return (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">5.0 Scale Grade Points:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              <div>A = 5.0</div>
              <div>B = 4.0</div>
              <div>C = 3.0</div>
              <div>D = 2.0</div>
              <div>F = 0.0</div>
              <div className="text-gray-500">P/NP/I/W = Not counted</div>
            </div>
          </div>
        );
      case '10.0':
        return (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">10.0 Scale Grade Points:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              <div>10 = 10.0</div>
              <div>9 = 9.0</div>
              <div>8 = 8.0</div>
              <div>7 = 7.0</div>
              <div>6 = 6.0</div>
              <div>5 = 5.0</div>
              <div>4 = 4.0</div>
              <div>3 = 3.0</div>
              <div>2 = 2.0</div>
              <div>1 = 1.0</div>
              <div>0 = 0.0</div>
              <div className="text-gray-500">P/NP/I/W = Not counted</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            GPA Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your course details to calculate your current or projected GPA
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GPA Scale
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['4.0', '4.3', '5.0', '10.0'].map(scale => (
                <button
                  key={scale}
                  onClick={() => setGpaScale(scale)}
                  className={`py-2 px-4 rounded-lg border ${
                    gpaScale === scale 
                      ? 'bg-indigo-100 border-indigo-500 text-indigo-700' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {scale} Scale
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowGradeDetails(!showGradeDetails)}
              className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              {showGradeDetails ? 'Hide' : 'Show'} grade point details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transform transition-transform ${
                  showGradeDetails ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            
            {showGradeDetails && getGradePointDetails()}
          </div>

          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    placeholder="e.g. Computer Science"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Credits
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    value={course.credits}
                    onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                    placeholder="e.g. 3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Grade
                  </label>
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select Grade</option>
                    {getGradeOptions().map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
                
                <div className="sm:col-span-2 flex justify-end">
                  {courses.length > 1 && (
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="px-3 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={addCourse}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
              >
                + Add Another Subject
              </button>
              
              <button
                onClick={calculateGPA}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                disabled={!courses.some(c => c.credits && c.grade)}
              >
                Calculate GPA
              </button>
              
              <button
                onClick={resetCalculator}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {calculatedGPA !== null && (
          <div className="bg-indigo-50 rounded-xl shadow-md p-6 sm:p-8 border border-indigo-100">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
                Your GPA Result
              </h3>
              
              <div className="text-5xl font-bold text-indigo-600 my-6">
                {calculatedGPA.value}
              </div>
              
              {gradeClass && (
                <div className="text-lg font-medium text-indigo-700 mb-2">
                  Class: {gradeClass}
                </div>
              )}
              
              <div className="text-sm text-indigo-600 mb-4">
                Based on {calculatedGPA.creditsCounted} credits counted (of {calculatedGPA.creditsAttempted} attempted)
              </div>
              
              <div className="max-w-md mx-auto bg-white rounded-lg p-4 shadow-inner">
                <h4 className="font-medium text-gray-800 mb-2">GPA Interpretation ({gpaScale} scale):</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {gpaScale === '4.0' || gpaScale === '4.3' ? (
                    <>
                      <li>3.7 - {gpaScale === '4.3' ? '4.3' : '4.0'}: First Class Honours</li>
                      <li>3.3 - 3.6: Upper Second Class Honours</li>
                      <li>3.0 - 3.2: Lower Second Class Honours</li>
                      <li>2.0 - 2.9: Third Class Honours</li>
                      <li>Below 2.0: Ordinary Degree</li>
                    </>
                  ) : gpaScale === '5.0' ? (
                    <>
                      <li>4.5 - 5.0: First Class Honours</li>
                      <li>3.5 - 4.4: Upper Second Class Honours</li>
                      <li>2.5 - 3.4: Lower Second Class Honours</li>
                      <li>1.5 - 2.4: Third Class Honours</li>
                      <li>Below 1.5: Ordinary Degree</li>
                    </>
                  ) : (
                    <>
                      <li>8.0 - 10.0: First Class Honours</li>
                      <li>6.5 - 7.9: Upper Second Class Honours</li>
                      <li>5.0 - 6.4: Lower Second Class Honours</li>
                      <li>4.0 - 4.9: Third Class Honours</li>
                      <li>Below 4.0: Ordinary Degree</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GPACalculator;