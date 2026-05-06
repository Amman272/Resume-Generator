import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, RotateCcw, Download, FileText, Mail, GraduationCap, Briefcase, FolderOpen, Code, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    // Contact (5 fields)
    NAME: '',
    PHONE: '',
    EMAIL: '',
    LINKEDIN: '',
    GITHUB: '',
    
    // Education (4 fields)
    schoolName: '',
    dates: '',
    degree: '',
    educationLocation: '',
    
    // Experience (8 fields)
    companyName: '',
    experienceLocation: '',
    role: '',
    startDate: '',
    endDate: '',
    experiencePoint1: '',
    experiencePoint2: '',
    experiencePoint3: '',
    
    // Projects (6 fields)
    projectName: '',
    technologies: '',
    projectDate: '',
    projectPoint1: '',
    projectPoint2: '',
    projectPoint3: '',
    
    // Technical Skills (3 fields)
    languages: '',
    developerTools: '',
    technologiesFrameworks: '',
    
    // Achievements (8 fields)
    organizationName: '',
    achievementStartDate: '',
    achievementEndDate: '',
    achievementRole: '',
    achievementLocation: '',
    achievementPoint1: '',
    achievementPoint2: '',
    achievementPoint3: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
      companyName: '',
      experienceLocation: '',
      role: '',
      startDate: '',
      endDate: '',
      experiencePoint1: '',
      experiencePoint2: '',
      experiencePoint3: '',
      projectName: '',
      technologies: '',
      projectDate: '',
      projectPoint1: '',
      projectPoint2: '',
      projectPoint3: '',
      languages: '',
      developerTools: '',
      technologiesFrameworks: '',
      organizationName: '',
      achievementStartDate: '',
      achievementEndDate: '',
      achievementRole: '',
      achievementLocation: '',
      achievementPoint1: '',
      achievementPoint2: '',
      achievementPoint3: ''
    });
  };

  const generateResume = () => {
    console.log('Generating resume with data:', formData);
    alert('Resume generation will be implemented with backend integration!');
  };

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
                <span>Preview</span>
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
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-card-foreground">Experience</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Tech Company Inc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="experienceLocation">Location</Label>
                    <Input
                      id="experienceLocation"
                      value={formData.experienceLocation}
                      onChange={(e) => handleInputChange('experienceLocation', e.target.value)}
                      placeholder="San Francisco, CA"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    placeholder="Software Engineer"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      placeholder="January 2022"
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input
                      id="endDate"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      placeholder="Present"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="experiencePoint1">Experience Point 1</Label>
                    <Textarea
                      id="experiencePoint1"
                      value={formData.experiencePoint1}
                      onChange={(e) => handleInputChange('experiencePoint1', e.target.value)}
                      placeholder="Developed and maintained web applications..."
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label htmlFor="experiencePoint2">Experience Point 2</Label>
                    <Textarea
                      id="experiencePoint2"
                      value={formData.experiencePoint2}
                      onChange={(e) => handleInputChange('experiencePoint2', e.target.value)}
                      placeholder="Collaborated with cross-functional teams..."
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label htmlFor="experiencePoint3">Experience Point 3</Label>
                    <Textarea
                      id="experiencePoint3"
                      value={formData.experiencePoint3}
                      onChange={(e) => handleInputChange('experiencePoint3', e.target.value)}
                      placeholder="Improved system performance by..."
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                  <FolderOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-card-foreground">Projects</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectName">Project Name</Label>
                    <Input
                      id="projectName"
                      value={formData.projectName}
                      onChange={(e) => handleInputChange('projectName', e.target.value)}
                      placeholder="E-commerce Platform"
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectDate">Project Date</Label>
                    <Input
                      id="projectDate"
                      value={formData.projectDate}
                      onChange={(e) => handleInputChange('projectDate', e.target.value)}
                      placeholder="March 2023"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="technologies">Technologies</Label>
                  <Input
                    id="technologies"
                    value={formData.technologies}
                    onChange={(e) => handleInputChange('technologies', e.target.value)}
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="projectPoint1">Project Point 1</Label>
                    <Textarea
                      id="projectPoint1"
                      value={formData.projectPoint1}
                      onChange={(e) => handleInputChange('projectPoint1', e.target.value)}
                      placeholder="Built a full-stack e-commerce platform..."
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectPoint2">Project Point 2</Label>
                    <Textarea
                      id="projectPoint2"
                      value={formData.projectPoint2}
                      onChange={(e) => handleInputChange('projectPoint2', e.target.value)}
                      placeholder="Implemented secure payment processing..."
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectPoint3">Project Point 3</Label>
                    <Textarea
                      id="projectPoint3"
                      value={formData.projectPoint3}
                      onChange={(e) => handleInputChange('projectPoint3', e.target.value)}
                      placeholder="Optimized database queries for better performance..."
                      rows={2}
                    />
                  </div>
                </div>
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
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                  <Award className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-card-foreground">Achievements</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="organizationName">Organization Name</Label>
                    <Input
                      id="organizationName"
                      value={formData.organizationName}
                      onChange={(e) => handleInputChange('organizationName', e.target.value)}
                      placeholder="Tech Innovation Society"
                    />
                  </div>
                  <div>
                    <Label htmlFor="achievementRole">Role</Label>
                    <Input
                      id="achievementRole"
                      value={formData.achievementRole}
                      onChange={(e) => handleInputChange('achievementRole', e.target.value)}
                      placeholder="President"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="achievementStartDate">Start Date</Label>
                    <Input
                      id="achievementStartDate"
                      value={formData.achievementStartDate}
                      onChange={(e) => handleInputChange('achievementStartDate', e.target.value)}
                      placeholder="January 2021"
                    />
                  </div>
                  <div>
                    <Label htmlFor="achievementEndDate">End Date</Label>
                    <Input
                      id="achievementEndDate"
                      value={formData.achievementEndDate}
                      onChange={(e) => handleInputChange('achievementEndDate', e.target.value)}
                      placeholder="December 2021"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="achievementLocation">Location</Label>
                  <Input
                    id="achievementLocation"
                    value={formData.achievementLocation}
                    onChange={(e) => handleInputChange('achievementLocation', e.target.value)}
                    placeholder="University Campus"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="achievementPoint1">Achievement Point 1</Label>
                    <Textarea
                      id="achievementPoint1"
                      value={formData.achievementPoint1}
                      onChange={(e) => handleInputChange('achievementPoint1', e.target.value)}
                      placeholder="Led a team of 20 members in organizing tech events..."
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label htmlFor="achievementPoint2">Achievement Point 2</Label>
                    <Textarea
                      id="achievementPoint2"
                      value={formData.achievementPoint2}
                      onChange={(e) => handleInputChange('achievementPoint2', e.target.value)}
                      placeholder="Increased membership by 150% during tenure..."
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label htmlFor="achievementPoint3">Achievement Point 3</Label>
                    <Textarea
                      id="achievementPoint3"
                      value={formData.achievementPoint3}
                      onChange={(e) => handleInputChange('achievementPoint3', e.target.value)}
                      placeholder="Secured $10,000 in sponsorships for annual tech conference..."
                      rows={2}
                    />
                  </div>
                </div>
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