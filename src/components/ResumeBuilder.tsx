import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileText, Plus, Trash2, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  graduationDate: string;
  gpa?: string;
}

const ResumeBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: ''
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    { id: '1', company: '', position: '', startDate: '', endDate: '', description: '' }
  ]);

  const [education, setEducation] = useState<Education[]>([
    { id: '1', institution: '', degree: '', graduationDate: '', gpa: '' }
  ]);

  const [skills, setSkills] = useState('');
  const [summary, setSummary] = useState('');

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    setExperiences([...experiences, newExp]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      graduationDate: '',
      gpa: ''
    };
    setEducation([...education, newEdu]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const generateResume = () => {
    // TODO: Implement resume generation
    console.log('Generating resume...', { personalInfo, experiences, education, skills, summary });
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="backdrop-blur-md bg-card/80 shadow-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl shadow-lg">
                <FileText className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold gradient-text">Resume Builder</h1>
            </div>
            <Button onClick={generateResume} className="btn-primary">
              <Download className="h-5 w-5 mr-2" />
              Generate PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Personal Information */}
          <Card className="p-8 border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                <Input
                  id="name"
                  value={personalInfo.name}
                  onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                  placeholder="John Doe"
                  className="border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                  placeholder="john.doe@email.com"
                  className="border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  value={personalInfo.phone}
                  onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                  placeholder="+1 (555) 123-4567"
                  className="border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground font-medium">Location</Label>
                <Input
                  id="location"
                  value={personalInfo.location}
                  onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                  placeholder="San Francisco, CA"
                  className="border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website" className="text-foreground font-medium">Website</Label>
                <Input
                  id="website"
                  value={personalInfo.website}
                  onChange={(e) => setPersonalInfo({...personalInfo, website: e.target.value})}
                  placeholder="https://johndoe.com"
                  className="border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-foreground font-medium">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={personalInfo.linkedin}
                  onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                  placeholder="linkedin.com/in/johndoe"
                  className="border-border/50 focus:border-primary"
                />
              </div>
            </div>
          </Card>

          {/* Professional Summary */}
          <Card className="p-8 border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
              Professional Summary
            </h2>
            <div className="space-y-2">
              <Label htmlFor="summary" className="text-foreground font-medium">Summary</Label>
              <Textarea
                id="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Write a compelling professional summary that highlights your key achievements and expertise..."
                className="min-h-[120px] border-border/50 focus:border-primary resize-none"
              />
            </div>
          </Card>

          {/* Work Experience */}
          <Card className="p-8 border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
                Work Experience
              </h2>
              <Button onClick={addExperience} variant="outline" size="sm" className="border-primary/20 hover:bg-primary/10">
                <Plus className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {index > 0 && <Separator className="mb-6" />}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">Company</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        placeholder="Company Name"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">Position</Label>
                      <Input
                        value={exp.position}
                        onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                        placeholder="Job Title"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">Start Date</Label>
                      <Input
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">End Date</Label>
                      <Input
                        type="month"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                        placeholder="Present"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">Job Description</Label>
                    <Textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      placeholder="Describe your responsibilities and achievements..."
                      className="min-h-[100px] border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  {experiences.length > 1 && (
                    <Button
                      onClick={() => removeExperience(exp.id)}
                      variant="ghost"
                      size="sm"
                      className="absolute top-0 right-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8 border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
                Education
              </h2>
              <Button onClick={addEducation} variant="outline" size="sm" className="border-primary/20 hover:bg-primary/10">
                <Plus className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative">
                  {index > 0 && <Separator className="mb-6" />}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">Institution</Label>
                      <Input
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                        placeholder="University Name"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">Degree</Label>
                      <Input
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        placeholder="Bachelor of Science in Computer Science"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">Graduation Date</Label>
                      <Input
                        type="month"
                        value={edu.graduationDate}
                        onChange={(e) => updateEducation(edu.id, 'graduationDate', e.target.value)}
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">GPA (Optional)</Label>
                      <Input
                        value={edu.gpa}
                        onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                        placeholder="3.8/4.0"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  {education.length > 1 && (
                    <Button
                      onClick={() => removeEducation(edu.id)}
                      variant="ghost"
                      size="sm"
                      className="absolute top-0 right-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-8 border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
              Skills
            </h2>
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-foreground font-medium">Technical Skills</Label>
              <Textarea
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="List your technical skills, programming languages, tools, etc. (separated by commas)"
                className="min-h-[100px] border-border/50 focus:border-primary resize-none"
              />
            </div>
          </Card>

          {/* Generate Button */}
          <div className="flex justify-center pt-8">
            <Button onClick={generateResume} className="btn-primary text-xl px-12 py-4">
              <Download className="h-6 w-6 mr-3" />
              Generate Professional Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;