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
    
    // Experience (dynamic array)
    experiences: [{
      id: Date.now(),
      companyName: '',
      experienceLocation: '',
      role: '',
      startDate: '',
      endDate: '',
      experiencePoints: ['', '', '']
    }],
    
    // Projects (dynamic array)
    projects: [{
      id: Date.now() + 1,
      projectName: '',
      technologies: '',
      projectDate: '',
      projectPoints: ['', '', '']
    }],
    
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateExperience = (expId, field, value) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp =>
        exp.id === expId ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const updateExperiencePoint = (expId, pointIndex, value) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp =>
        exp.id === expId ? {
          ...exp,
          experiencePoints: exp.experiencePoints.map((point, idx) =>
            idx === pointIndex ? value : point
          )
        } : exp
      )
    }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [...prev.experiences, {
        id: Date.now(),
        companyName: '',
        experienceLocation: '',
        role: '',
        startDate: '',
        endDate: '',
        experiencePoints: ['', '', '']
      }]
    }));
  };

  const removeExperience = (expId) => {
    if (formData.experiences.length > 1) {
      setFormData(prev => ({
        ...prev,
        experiences: prev.experiences.filter(exp => exp.id !== expId)
      }));
    }
  };

  const updateProject = (projId, field, value) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === projId ? { ...proj, [field]: value } : proj
      )
    }));
  };

  const updateProjectPoint = (projId, pointIndex, value) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === projId ? {
          ...proj,
          projectPoints: proj.projectPoints.map((point, idx) =>
            idx === pointIndex ? value : point
          )
        } : proj
      )
    }));
  };

  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, {
        id: Date.now(),
        projectName: '',
        technologies: '',
        projectDate: '',
        projectPoints: ['', '', '']
      }]
    }));
  };

  const removeProject = (projId) => {
    if (formData.projects.length > 1) {
      setFormData(prev => ({
        ...prev,
        projects: prev.projects.filter(proj => proj.id !== projId)
      }));
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
      experiences: [{
        id: Date.now(),
        companyName: '',
        experienceLocation: '',
        role: '',
        startDate: '',
        endDate: '',
        experiencePoints: ['', '', '']
      }],
      projects: [{
        id: Date.now() + 1,
        projectName: '',
        technologies: '',
        projectDate: '',
        projectPoints: ['', '', '']
      }],
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

  function showData(){
    console.log('Form Data:', formData);
  }
async function sendBack(){
const Result= await axios.post(" http://localhost:3000/form",{
  formData:formData
})
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
                {formData.experiences.map((experience, index) => (
                  <div key={experience.id} className="border border-border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-foreground">Experience {index + 1}</h3>
                      {formData.experiences.length > 1 && (
                        <Button
                          onClick={() => removeExperience(experience.id)}
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`companyName-${experience.id}`}>Company Name</Label>
                        <Input
                          id={`companyName-${experience.id}`}
                          value={experience.companyName}
                          onChange={(e) => updateExperience(experience.id, 'companyName', e.target.value)}
                          placeholder="Tech Company Inc."
                        />
                      </div>
                      <div>
                        <Label htmlFor={`experienceLocation-${experience.id}`}>Location</Label>
                        <Input
                          id={`experienceLocation-${experience.id}`}
                          value={experience.experienceLocation}
                          onChange={(e) => updateExperience(experience.id, 'experienceLocation', e.target.value)}
                          placeholder="San Francisco, CA"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor={`role-${experience.id}`}>Role</Label>
                      <Input
                        id={`role-${experience.id}`}
                        value={experience.role}
                        onChange={(e) => updateExperience(experience.id, 'role', e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`startDate-${experience.id}`}>Start Date</Label>
                        <Input
                          id={`startDate-${experience.id}`}
                          value={experience.startDate}
                          onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                          placeholder="January 2022"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`endDate-${experience.id}`}>End Date</Label>
                        <Input
                          id={`endDate-${experience.id}`}
                          value={experience.endDate}
                          onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {experience.experiencePoints.map((point, pointIndex) => (
                        <div key={pointIndex}>
                          <Label htmlFor={`experiencePoint${pointIndex}-${experience.id}`}>
                            Experience Point {pointIndex + 1}
                          </Label>
                          <Textarea
                            id={`experiencePoint${pointIndex}-${experience.id}`}
                            value={point}
                            onChange={(e) => updateExperiencePoint(experience.id, pointIndex, e.target.value)}
                            placeholder={`Experience point ${pointIndex + 1}...`}
                            rows={2}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
                {formData.projects.map((project, index) => (
                  <div key={project.id} className="border border-border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-foreground">Project {index + 1}</h3>
                      {formData.projects.length > 1 && (
                        <Button
                          onClick={() => removeProject(project.id)}
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`projectName-${project.id}`}>Project Name</Label>
                        <Input
                          id={`projectName-${project.id}`}
                          value={project.projectName}
                          onChange={(e) => updateProject(project.id, 'projectName', e.target.value)}
                          placeholder="E-commerce Platform"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`projectDate-${project.id}`}>Project Date</Label>
                        <Input
                          id={`projectDate-${project.id}`}
                          value={project.projectDate}
                          onChange={(e) => updateProject(project.id, 'projectDate', e.target.value)}
                          placeholder="March 2023"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor={`technologies-${project.id}`}>Technologies</Label>
                      <Input
                        id={`technologies-${project.id}`}
                        value={project.technologies}
                        onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      {project.projectPoints.map((point, pointIndex) => (
                        <div key={pointIndex}>
                          <Label htmlFor={`projectPoint${pointIndex}-${project.id}`}>
                            Project Point {pointIndex + 1}
                          </Label>
                          <Textarea
                            id={`projectPoint${pointIndex}-${project.id}`}
                            value={point}
                            onChange={(e) => updateProjectPoint(project.id, pointIndex, e.target.value)}
                            placeholder={`Project point ${pointIndex + 1}...`}
                            rows={2}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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