import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, RotateCcw, Download, FileText, Mail, GraduationCap, Briefcase, FolderOpen, Code, Award, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Result } from 'postcss';
import axios from 'axios';

const ResumeBuilder = () => {

  const [isLoading,setIsLoading]=useState(false);
  const [error, setError] = useState(null);
  console.log('ResumeBuilder component loading...');
  const [formData, setFormData] = useState({
  NAME: 'John Doe',
  PHONE: '+91 9876543210',
  EMAIL: 'john.doe@example.com',
  LINKEDIN: 'linkedin.com/in/johndoe',
  GITHUB: 'github.com/johndoe',

  // Education
  schoolName: 'Indian Institute of Technology, Delhi',
  dates: 'Aug 2019 – May 2023',
  degree: 'B.Tech in Computer Science',
  educationLocation: 'New Delhi, India',

  // Experience 1
  companyName_1: 'Google',
  experienceLocation_1: 'Bangalore, India',
  role_1: 'Software Engineering Intern',
  startDate_1: 'May 2022',
  endDate_1: 'July 2022',
  experiencePoint1_1: 'Built a dashboard for internal analytics using React and Node.js',
  experiencePoint2_1: 'Optimized API responses by 30% with caching mechanisms',
  experiencePoint3_1: 'Collaborated with a team of 6 engineers using Agile practices',

  // Experience 2
  companyName_2: 'Microsoft',
  experienceLocation_2: 'Hyderabad, India',
  role_2: 'Software Developer',
  startDate_2: 'July 2023',
  endDate_2: 'Present',
  experiencePoint1_2: 'Developing features for Azure cloud services in C++',
  experiencePoint2_2: 'Implemented CI/CD pipelines improving deployment speed',
  experiencePoint3_2: 'Mentored 2 interns on backend development best practices',

  // Experience 3
  companyName_3: 'StartUpX',
  experienceLocation_3: 'Remote',
  role_3: 'Full-Stack Developer',
  startDate_3: 'Jan 2021',
  endDate_3: 'Dec 2021',
  experiencePoint1_3: 'Designed REST APIs with Express and MongoDB',
  experiencePoint2_3: 'Developed responsive UI with React and Tailwind CSS',
  experiencePoint3_3: 'Integrated payment gateway for subscription services',

  // Project 1
  projectName_1: 'Resume Generator',
  technologies_1: 'React, Node.js, LaTeX',
  projectDate_1: '2024',
  projectPoint1_1: 'Built a dynamic resume builder with LaTeX templates',
  projectPoint2_1: 'Implemented PDF generation with backend APIs',
  projectPoint3_1: 'Integrated drag-and-drop UI for customization',

  // Project 2
  projectName_2: 'E-Commerce Website',
  technologies_2: 'MERN Stack',
  projectDate_2: '2023',
  projectPoint1_2: 'Developed full-stack shopping platform with cart and checkout',
  projectPoint2_2: 'Implemented JWT authentication and role-based access',
  projectPoint3_2: 'Deployed using Docker and AWS EC2',

  // Project 3
  projectName_3: 'Chat Application',
  technologies_3: 'Socket.io, Node.js, React',
  projectDate_3: '2022',
  projectPoint1_3: 'Implemented real-time messaging with WebSockets',
  projectPoint2_3: 'Added user authentication and private chat rooms',
  projectPoint3_3: 'Designed a clean, responsive UI with Tailwind CSS',

  // Technical Skills
  languages: 'C++, Java, Python, JavaScript',
  developerTools: 'Git, Docker, VS Code, Postman',
  technologiesFrameworks: 'React, Node.js, Express, MongoDB, AWS',

  // Achievement 1
  organizationName_1: 'HackathonX',
  achievementStartDate_1: 'Nov 2022',
  achievementEndDate_1: 'Nov 2022',
  achievementRole_1: 'Team Lead',
  achievementLocation_1: 'Delhi, India',
  achievementPoint_1: 'Won 1st prize for developing a smart health monitoring app',

  // Achievement 2
  organizationName_2: 'Coding Club, IIT Delhi',
  achievementStartDate_2: '2021',
  achievementEndDate_2: '2023',
  achievementRole_2: 'Core Member',
  achievementLocation_2: 'New Delhi, India',
  achievementPoint_2: 'Organized coding contests and mentored juniors in DSA',

  // Achievement 3
  organizationName_3: 'LeetCode',
  achievementStartDate_3: '2020',
  achievementEndDate_3: 'Present',
  achievementRole_3: 'Problem Solver',
  achievementLocation_3: 'Online',
  achievementPoint_3: 'Solved 600+ problems with 1500+ rating in contests'
}
);

  // Visibility state for sections
  const [visibleSections, setVisibleSections] = useState({
    experience_1: true,
    experience_2: false,
    experience_3: false,
    project_1: true,
    project_2: false,
    project_3: false,
    achievement_1: true,
    achievement_2: false,
    achievement_3: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addExperience = () => {
    if (!visibleSections.experience_2) {
      setVisibleSections(prev => ({ ...prev, experience_2: true }));
    } else if (!visibleSections.experience_3) {
      setVisibleSections(prev => ({ ...prev, experience_3: true }));
    }
  };

  const addProject = () => {
    if (!visibleSections.project_2) {
      setVisibleSections(prev => ({ ...prev, project_2: true }));
    } else if (!visibleSections.project_3) {
      setVisibleSections(prev => ({ ...prev, project_3: true }));
    }
  };

  const addAchievement = () => {
    if (!visibleSections.achievement_2) {
      setVisibleSections(prev => ({ ...prev, achievement_2: true }));
    } else if (!visibleSections.achievement_3) {
      setVisibleSections(prev => ({ ...prev, achievement_3: true }));
    }
  };

  const resetForm = () => {
    setFormData({
      NAME: '',
      PHONE: '',
      EMAIL: '',
      LINKEDIN: '',
      GITHUB: '',
      schoolName: '',
      dates: '',
      degree: '',
      educationLocation: '',
      companyName_1: '',
      experienceLocation_1: '',
      role_1: '',
      startDate_1: '',
      endDate_1: '',
      experiencePoint1_1: '',
      experiencePoint2_1: '',
      experiencePoint3_1: '',
      companyName_2: '',
      experienceLocation_2: '',
      role_2: '',
      startDate_2: '',
      endDate_2: '',
      experiencePoint1_2: '',
      experiencePoint2_2: '',
      experiencePoint3_2: '',
      companyName_3: '',
      experienceLocation_3: '',
      role_3: '',
      startDate_3: '',
      endDate_3: '',
      experiencePoint1_3: '',
      experiencePoint2_3: '',
      experiencePoint3_3: '',
      projectName_1: '',
      technologies_1: '',
      projectDate_1: '',
      projectPoint1_1: '',
      projectPoint2_1: '',
      projectPoint3_1: '',
      projectName_2: '',
      technologies_2: '',
      projectDate_2: '',
      projectPoint1_2: '',
      projectPoint2_2: '',
      projectPoint3_2: '',
      projectName_3: '',
      technologies_3: '',
      projectDate_3: '',
      projectPoint1_3: '',
      projectPoint2_3: '',
      projectPoint3_3: '',
      languages: '',
      developerTools: '',
      technologiesFrameworks: '',
      organizationName_1: '',
      achievementStartDate_1: '',
      achievementEndDate_1: '',
      achievementRole_1: '',
      achievementLocation_1: '',
      achievementPoint_1: '',
      organizationName_2: '',
      achievementStartDate_2: '',
      achievementEndDate_2: '',
      achievementRole_2: '',
      achievementLocation_2: '',
      achievementPoint_2: '',
      organizationName_3: '',
      achievementStartDate_3: '',
      achievementEndDate_3: '',
      achievementRole_3: '',
      achievementLocation_3: '',
      achievementPoint_3: ''
    });
    setVisibleSections({
      experience_1: true,
      experience_2: false,
      experience_3: false,
      project_1: true,
      project_2: false,
      project_3: false,
      achievement_1: true,
      achievement_2: false,
      achievement_3: false
    });
  };

  const generateResume = () => {
    console.log('Generating resume with data:', formData);
    alert('Resume generation will be implemented with backend integration!');
  };

  function showData(){
    console.log('Form Data:', formData);
    console.log('Form Data Keys:', Object.keys(formData));
    console.log('Visible Sections:', visibleSections);
  }
async function sendBack(){
    setIsLoading(true);
    setError(null);
    try{
const response= await axios.post(" http://localhost:3000/form",{
  formData:formData
},{
  responseType:'blob',
  
});
const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
  // 3. Create a temporary URL and trigger the download
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf'); // Set the download filename
      document.body.appendChild(link);
      link.click();

}
catch(error){
  console.log(error)

}
console.log("send to backend")
}
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-card/90 backdrop-blur-md shadow-card border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-secondary">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-xl">
                  <FileText className="h-5 w-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold gradient-text">Resume Builder</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={resetForm} className="flex items-center space-x-2">
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                
                <span onClick={sendBack}>send to backend </span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                
                <span onClick={showData}>Preview</span>
              </Button>
              <Button onClick={generateResume} className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Generate PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-card-foreground">Contact Information</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="NAME">Full Name</Label>
                    <Input
                      id="NAME"
                      value={formData.NAME}
                      onChange={(e) => handleInputChange('NAME', e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="PHONE">Phone Number</Label>
                    <Input
                      id="PHONE"
                      value={formData.PHONE}
                      onChange={(e) => handleInputChange('PHONE', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="EMAIL">Email Address</Label>
                  <Input
                    id="EMAIL"
                    type="email"
                    value={formData.EMAIL}
                    onChange={(e) => handleInputChange('EMAIL', e.target.value)}
                    placeholder="john.doe@email.com"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="LINKEDIN">LinkedIn Profile</Label>
                    <Input
                      id="LINKEDIN"
                      value={formData.LINKEDIN}
                      onChange={(e) => handleInputChange('LINKEDIN', e.target.value)}
                      placeholder="linkedin.com/in/johndoe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="GITHUB">GitHub Profile</Label>
                    <Input
                      id="GITHUB"
                      value={formData.GITHUB}
                      onChange={(e) => handleInputChange('GITHUB', e.target.value)}
                      placeholder="github.com/johndoe"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-card-foreground">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="schoolName">School Name</Label>
                    <Input
                      id="schoolName"
                      value={formData.schoolName}
                      onChange={(e) => handleInputChange('schoolName', e.target.value)}
                      placeholder="University of Example"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dates">Dates</Label>
                    <Input
                      id="dates"
                      value={formData.dates}
                      onChange={(e) => handleInputChange('dates', e.target.value)}
                      placeholder="2018 - 2022"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="degree">Degree</Label>
                    <Input
                      id="degree"
                      value={formData.degree}
                      onChange={(e) => handleInputChange('degree', e.target.value)}
                      placeholder="Bachelor of Science in Computer Science"
                    />
                  </div>
                  <div>
                    <Label htmlFor="educationLocation">Location</Label>
                    <Input
                      id="educationLocation"
                      value={formData.educationLocation}
                      onChange={(e) => handleInputChange('educationLocation', e.target.value)}
                      placeholder="New York, NY"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                    <Briefcase className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-semibold text-card-foreground">Experience</h2>
                </div>
                <Button 
                  onClick={addExperience}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Experience</span>
                </Button>
              </div>
              
              <div className="space-y-6">
                {/* Experience 1 */}
                {visibleSections.experience_1 && (
                  <div className="border border-border rounded-lg p-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Experience 1</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName_1">Company Name</Label>
                        <Input
                          id="companyName_1"
                          value={formData.companyName_1}
                          onChange={(e) => handleInputChange('companyName_1', e.target.value)}
                          placeholder="Tech Company Inc."
                        />
                      </div>
                      <div>
                        <Label htmlFor="experienceLocation_1">Location</Label>
                        <Input
                          id="experienceLocation_1"
                          value={formData.experienceLocation_1}
                          onChange={(e) => handleInputChange('experienceLocation_1', e.target.value)}
                          placeholder="San Francisco, CA"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="role_1">Role</Label>
                      <Input
                        id="role_1"
                        value={formData.role_1}
                        onChange={(e) => handleInputChange('role_1', e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="startDate_1">Start Date</Label>
                        <Input
                          id="startDate_1"
                          value={formData.startDate_1}
                          onChange={(e) => handleInputChange('startDate_1', e.target.value)}
                          placeholder="January 2022"
                        />
                      </div>
                      <div>
                        <Label htmlFor="endDate_1">End Date</Label>
                        <Input
                          id="endDate_1"
                          value={formData.endDate_1}
                          onChange={(e) => handleInputChange('endDate_1', e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="experiencePoint1_1">Experience Point 1</Label>
                        <Textarea
                          id="experiencePoint1_1"
                          value={formData.experiencePoint1_1}
                          onChange={(e) => handleInputChange('experiencePoint1_1', e.target.value)}
                          placeholder="Experience point 1..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="experiencePoint2_1">Experience Point 2</Label>
                        <Textarea
                          id="experiencePoint2_1"
                          value={formData.experiencePoint2_1}
                          onChange={(e) => handleInputChange('experiencePoint2_1', e.target.value)}
                          placeholder="Experience point 2..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="experiencePoint3_1">Experience Point 3</Label>
                        <Textarea
                          id="experiencePoint3_1"
                          value={formData.experiencePoint3_1}
                          onChange={(e) => handleInputChange('experiencePoint3_1', e.target.value)}
                          placeholder="Experience point 3..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Experience 2 */}
                {visibleSections.experience_2 && (
                  <div className="border border-border rounded-lg p-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Experience 2</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName_2">Company Name</Label>
                        <Input
                          id="companyName_2"
                          value={formData.companyName_2}
                          onChange={(e) => handleInputChange('companyName_2', e.target.value)}
                          placeholder="Tech Company Inc."
                        />
                      </div>
                      <div>
                        <Label htmlFor="experienceLocation_2">Location</Label>
                        <Input
                          id="experienceLocation_2"
                          value={formData.experienceLocation_2}
                          onChange={(e) => handleInputChange('experienceLocation_2', e.target.value)}
                          placeholder="San Francisco, CA"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="role_2">Role</Label>
                      <Input
                        id="role_2"
                        value={formData.role_2}
                        onChange={(e) => handleInputChange('role_2', e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="startDate_2">Start Date</Label>
                        <Input
                          id="startDate_2"
                          value={formData.startDate_2}
                          onChange={(e) => handleInputChange('startDate_2', e.target.value)}
                          placeholder="January 2022"
                        />
                      </div>
                      <div>
                        <Label htmlFor="endDate_2">End Date</Label>
                        <Input
                          id="endDate_2"
                          value={formData.endDate_2}
                          onChange={(e) => handleInputChange('endDate_2', e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="experiencePoint1_2">Experience Point 1</Label>
                        <Textarea
                          id="experiencePoint1_2"
                          value={formData.experiencePoint1_2}
                          onChange={(e) => handleInputChange('experiencePoint1_2', e.target.value)}
                          placeholder="Experience point 1..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="experiencePoint2_2">Experience Point 2</Label>
                        <Textarea
                          id="experiencePoint2_2"
                          value={formData.experiencePoint2_2}
                          onChange={(e) => handleInputChange('experiencePoint2_2', e.target.value)}
                          placeholder="Experience point 2..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="experiencePoint3_2">Experience Point 3</Label>
                        <Textarea
                          id="experiencePoint3_2"
                          value={formData.experiencePoint3_2}
                          onChange={(e) => handleInputChange('experiencePoint3_2', e.target.value)}
                          placeholder="Experience point 3..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Experience 3 */}
                {visibleSections.experience_3 && (
                  <div className="border border-border rounded-lg p-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Experience 3</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName_3">Company Name</Label>
                        <Input
                          id="companyName_3"
                          value={formData.companyName_3}
                          onChange={(e) => handleInputChange('companyName_3', e.target.value)}
                          placeholder="Tech Company Inc."
                        />
                      </div>
                      <div>
                        <Label htmlFor="experienceLocation_3">Location</Label>
                        <Input
                          id="experienceLocation_3"
                          value={formData.experienceLocation_3}
                          onChange={(e) => handleInputChange('experienceLocation_3', e.target.value)}
                          placeholder="San Francisco, CA"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="role_3">Role</Label>
                      <Input
                        id="role_3"
                        value={formData.role_3}
                        onChange={(e) => handleInputChange('role_3', e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="startDate_3">Start Date</Label>
                        <Input
                          id="startDate_3"
                          value={formData.startDate_3}
                          onChange={(e) => handleInputChange('startDate_3', e.target.value)}
                          placeholder="January 2022"
                        />
                      </div>
                      <div>
                        <Label htmlFor="endDate_3">End Date</Label>
                        <Input
                          id="endDate_3"
                          value={formData.endDate_3}
                          onChange={(e) => handleInputChange('endDate_3', e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="experiencePoint1_3">Experience Point 1</Label>
                        <Textarea
                          id="experiencePoint1_3"
                          value={formData.experiencePoint1_3}
                          onChange={(e) => handleInputChange('experiencePoint1_3', e.target.value)}
                          placeholder="Experience point 1..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="experiencePoint2_3">Experience Point 2</Label>
                        <Textarea
                          id="experiencePoint2_3"
                          value={formData.experiencePoint2_3}
                          onChange={(e) => handleInputChange('experiencePoint2_3', e.target.value)}
                          placeholder="Experience point 2..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="experiencePoint3_3">Experience Point 3</Label>
                        <Textarea
                          id="experiencePoint3_3"
                          value={formData.experiencePoint3_3}
                          onChange={(e) => handleInputChange('experiencePoint3_3', e.target.value)}
                          placeholder="Experience point 3..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Projects */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                    <FolderOpen className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-semibold text-card-foreground">Projects</h2>
                </div>
                <Button 
                  onClick={addProject}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Project</span>
                </Button>
              </div>
              
              <div className="space-y-6">
                {/* Project 1 */}
                {visibleSections.project_1 && (
                  <div className="border border-border rounded-lg p-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Project 1</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectName_1">Project Name</Label>
                        <Input
                          id="projectName_1"
                          value={formData.projectName_1}
                          onChange={(e) => handleInputChange('projectName_1', e.target.value)}
                          placeholder="E-commerce Platform"
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectDate_1">Project Date</Label>
                        <Input
                          id="projectDate_1"
                          value={formData.projectDate_1}
                          onChange={(e) => handleInputChange('projectDate_1', e.target.value)}
                          placeholder="March 2023"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="technologies_1">Technologies</Label>
                      <Input
                        id="technologies_1"
                        value={formData.technologies_1}
                        onChange={(e) => handleInputChange('technologies_1', e.target.value)}
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="projectPoint1_1">Project Point 1</Label>
                        <Textarea
                          id="projectPoint1_1"
                          value={formData.projectPoint1_1}
                          onChange={(e) => handleInputChange('projectPoint1_1', e.target.value)}
                          placeholder="Project point 1..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectPoint2_1">Project Point 2</Label>
                        <Textarea
                          id="projectPoint2_1"
                          value={formData.projectPoint2_1}
                          onChange={(e) => handleInputChange('projectPoint2_1', e.target.value)}
                          placeholder="Project point 2..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectPoint3_1">Project Point 3</Label>
                        <Textarea
                          id="projectPoint3_1"
                          value={formData.projectPoint3_1}
                          onChange={(e) => handleInputChange('projectPoint3_1', e.target.value)}
                          placeholder="Project point 3..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Project 2 */}
                {visibleSections.project_2 && (
                  <div className="border border-border rounded-lg p-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Project 2</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectName_2">Project Name</Label>
                        <Input
                          id="projectName_2"
                          value={formData.projectName_2}
                          onChange={(e) => handleInputChange('projectName_2', e.target.value)}
                          placeholder="E-commerce Platform"
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectDate_2">Project Date</Label>
                        <Input
                          id="projectDate_2"
                          value={formData.projectDate_2}
                          onChange={(e) => handleInputChange('projectDate_2', e.target.value)}
                          placeholder="March 2023"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="technologies_2">Technologies</Label>
                      <Input
                        id="technologies_2"
                        value={formData.technologies_2}
                        onChange={(e) => handleInputChange('technologies_2', e.target.value)}
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="projectPoint1_2">Project Point 1</Label>
                        <Textarea
                          id="projectPoint1_2"
                          value={formData.projectPoint1_2}
                          onChange={(e) => handleInputChange('projectPoint1_2', e.target.value)}
                          placeholder="Project point 1..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectPoint2_2">Project Point 2</Label>
                        <Textarea
                          id="projectPoint2_2"
                          value={formData.projectPoint2_2}
                          onChange={(e) => handleInputChange('projectPoint2_2', e.target.value)}
                          placeholder="Project point 2..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectPoint3_2">Project Point 3</Label>
                        <Textarea
                          id="projectPoint3_2"
                          value={formData.projectPoint3_2}
                          onChange={(e) => handleInputChange('projectPoint3_2', e.target.value)}
                          placeholder="Project point 3..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Project 3 */}
                {visibleSections.project_3 && (
                  <div className="border border-border rounded-lg p-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Project 3</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectName_3">Project Name</Label>
                        <Input
                          id="projectName_3"
                          value={formData.projectName_3}
                          onChange={(e) => handleInputChange('projectName_3', e.target.value)}
                          placeholder="E-commerce Platform"
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectDate_3">Project Date</Label>
                        <Input
                          id="projectDate_3"
                          value={formData.projectDate_3}
                          onChange={(e) => handleInputChange('projectDate_3', e.target.value)}
                          placeholder="March 2023"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="technologies_3">Technologies</Label>
                      <Input
                        id="technologies_3"
                        value={formData.technologies_3}
                        onChange={(e) => handleInputChange('technologies_3', e.target.value)}
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="projectPoint1_3">Project Point 1</Label>
                        <Textarea
                          id="projectPoint1_3"
                          value={formData.projectPoint1_3}
                          onChange={(e) => handleInputChange('projectPoint1_3', e.target.value)}
                          placeholder="Project point 1..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectPoint2_3">Project Point 2</Label>
                        <Textarea
                          id="projectPoint2_3"
                          value={formData.projectPoint2_3}
                          onChange={(e) => handleInputChange('projectPoint2_3', e.target.value)}
                          placeholder="Project point 2..."
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectPoint3_3">Project Point 3</Label>
                        <Textarea
                          id="projectPoint3_3"
                          value={formData.projectPoint3_3}
                          onChange={(e) => handleInputChange('projectPoint3_3', e.target.value)}
                          placeholder="Project point 3..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                  <Code className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-card-foreground">Technical Skills</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="languages">Languages</Label>
                  <Input
                    id="languages"
                    value={formData.languages}
                    onChange={(e) => handleInputChange('languages', e.target.value)}
                    placeholder="JavaScript, Python, Java, C++"
                  />
                </div>
                <div>
                  <Label htmlFor="developerTools">Developer Tools</Label>
                  <Input
                    id="developerTools"
                    value={formData.developerTools}
                    onChange={(e) => handleInputChange('developerTools', e.target.value)}
                    placeholder="Git, Docker, VS Code, Postman"
                  />
                </div>
                <div>
                  <Label htmlFor="technologiesFrameworks">Technologies/Frameworks</Label>
                  <Input
                    id="technologiesFrameworks"
                    value={formData.technologiesFrameworks}
                    onChange={(e) => handleInputChange('technologiesFrameworks', e.target.value)}
                    placeholder="React, Node.js, Express, MongoDB"
                  />
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-semibold text-card-foreground">Achievements</h2>
                </div>
                <Button 
                  onClick={addAchievement}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Achievement</span>
                </Button>
              </div>
              
              <div className="space-y-6">
                {/* Achievement 1 */}
                {visibleSections.achievement_1 && (
                  <div className="border border-border rounded-lg p-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Achievement 1</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="organizationName_1">Organization Name</Label>
                        <Input
                          id="organizationName_1"
                          value={formData.organizationName_1}
                          onChange={(e) => handleInputChange('organizationName_1', e.target.value)}
                          placeholder="Tech Innovation Society"
                        />
                      </div>
                      <div>
                        <Label htmlFor="achievementRole_1">Role</Label>
                        <Input
                          id="achievementRole_1"
                          value={formData.achievementRole_1}
                          onChange={(e) => handleInputChange('achievementRole_1', e.target.value)}
                          placeholder="President"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="achievementStartDate_1">Start Date</Label>
                        <Input
                          id="achievementStartDate_1"
                          value={formData.achievementStartDate_1}
                          onChange={(e) => handleInputChange('achievementStartDate_1', e.target.value)}
                          placeholder="January 2021"
                        />
                      </div>
                      <div>
                        <Label htmlFor="achievementEndDate_1">End Date</Label>
                        <Input
                          id="achievementEndDate_1"
                          value={formData.achievementEndDate_1}
                          onChange={(e) => handleInputChange('achievementEndDate_1', e.target.value)}
                          placeholder="December 2021"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="achievementLocation_1">Location</Label>
                      <Input
                        id="achievementLocation_1"
                        value={formData.achievementLocation_1}
                        onChange={(e) => handleInputChange('achievementLocation_1', e.target.value)}
                        placeholder="University Campus"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="achievementPoint_1">Achievement Point</Label>
                      <Textarea
                        id="achievementPoint_1"
                        value={formData.achievementPoint_1}
                        onChange={(e) => handleInputChange('achievementPoint_1', e.target.value)}
                        placeholder="Led a team of 20 members in organizing tech events..."
                        rows={2}
                      />
                    </div>
                  </div>
                )}

                {/* Achievement 2 */}
                {visibleSections.achievement_2 && (
                  <div className="border border-border rounded-lg p-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Achievement 2</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="organizationName_2">Organization Name</Label>
                        <Input
                          id="organizationName_2"
                          value={formData.organizationName_2}
                          onChange={(e) => handleInputChange('organizationName_2', e.target.value)}
                          placeholder="Tech Innovation Society"
                        />
                      </div>
                      <div>
                        <Label htmlFor="achievementRole_2">Role</Label>
                        <Input
                          id="achievementRole_2"
                          value={formData.achievementRole_2}
                          onChange={(e) => handleInputChange('achievementRole_2', e.target.value)}
                          placeholder="President"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="achievementStartDate_2">Start Date</Label>
                        <Input
                          id="achievementStartDate_2"
                          value={formData.achievementStartDate_2}
                          onChange={(e) => handleInputChange('achievementStartDate_2', e.target.value)}
                          placeholder="January 2021"
                        />
                      </div>
                      <div>
                        <Label htmlFor="achievementEndDate_2">End Date</Label>
                        <Input
                          id="achievementEndDate_2"
                          value={formData.achievementEndDate_2}
                          onChange={(e) => handleInputChange('achievementEndDate_2', e.target.value)}
                          placeholder="December 2021"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="achievementLocation_2">Location</Label>
                      <Input
                        id="achievementLocation_2"
                        value={formData.achievementLocation_2}
                        onChange={(e) => handleInputChange('achievementLocation_2', e.target.value)}
                        placeholder="University Campus"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="achievementPoint_2">Achievement Point</Label>
                      <Textarea
                        id="achievementPoint_2"
                        value={formData.achievementPoint_2}
                        onChange={(e) => handleInputChange('achievementPoint_2', e.target.value)}
                        placeholder="Increased membership by 150% during tenure..."
                        rows={2}
                      />
                    </div>
                  </div>
                )}

                {/* Achievement 3 */}
                {visibleSections.achievement_3 && (
                  <div className="border border-border rounded-lg p-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground">Achievement 3</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="organizationName_3">Organization Name</Label>
                        <Input
                          id="organizationName_3"
                          value={formData.organizationName_3}
                          onChange={(e) => handleInputChange('organizationName_3', e.target.value)}
                          placeholder="Tech Innovation Society"
                        />
                      </div>
                      <div>
                        <Label htmlFor="achievementRole_3">Role</Label>
                        <Input
                          id="achievementRole_3"
                          value={formData.achievementRole_3}
                          onChange={(e) => handleInputChange('achievementRole_3', e.target.value)}
                          placeholder="President"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="achievementStartDate_3">Start Date</Label>
                        <Input
                          id="achievementStartDate_3"
                          value={formData.achievementStartDate_3}
                          onChange={(e) => handleInputChange('achievementStartDate_3', e.target.value)}
                          placeholder="January 2021"
                        />
                      </div>
                      <div>
                        <Label htmlFor="achievementEndDate_3">End Date</Label>
                        <Input
                          id="achievementEndDate_3"
                          value={formData.achievementEndDate_3}
                          onChange={(e) => handleInputChange('achievementEndDate_3', e.target.value)}
                          placeholder="December 2021"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="achievementLocation_3">Location</Label>
                      <Input
                        id="achievementLocation_3"
                        value={formData.achievementLocation_3}
                        onChange={(e) => handleInputChange('achievementLocation_3', e.target.value)}
                        placeholder="University Campus"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="achievementPoint_3">Achievement Point</Label>
                      <Textarea
                        id="achievementPoint_3"
                        value={formData.achievementPoint_3}
                        onChange={(e) => handleInputChange('achievementPoint_3', e.target.value)}
                        placeholder="Secured $10,000 in sponsorships for annual tech conference..."
                        rows={2}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-muted-foreground to-muted-foreground p-2 rounded-lg">
                  <Eye className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-card-foreground">Live Preview</h2>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 min-h-[600px] flex items-center justify-center border-2 border-dashed border-muted">
                <div className="text-center text-muted-foreground">
                  <div className="bg-gradient-to-r from-muted-foreground to-muted-foreground p-4 rounded-xl inline-block mb-4 opacity-50">
                    <FileText className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <p className="text-lg font-medium mb-2">Preview Coming Soon</p>
                  <p className="text-sm max-w-xs mx-auto">Fill out the form to see your beautifully formatted resume preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;