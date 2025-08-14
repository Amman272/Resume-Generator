import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface SkillsFormProps {
  data: any;
  updateData: (section: string, data: any) => void;
}

const SkillsForm = ({ data, updateData }: SkillsFormProps) => {
  const handleChange = (field: string, value: string) => {
    updateData('skills', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="languages" className="text-sm font-medium text-gray-700">Programming Languages</Label>
        <Textarea
          id="languages"
          value={data.languages || ''}
          onChange={(e) => handleChange('languages', e.target.value)}
          placeholder="JavaScript, Python, Java, TypeScript, C++, SQL"
          className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
          rows={3}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="technologiesFrameworks" className="text-sm font-medium text-gray-700">Frameworks & Technologies</Label>
        <Textarea
          id="technologiesFrameworks"
          value={data.technologiesFrameworks || ''}
          onChange={(e) => handleChange('technologiesFrameworks', e.target.value)}
          placeholder="React, Node.js, Express, MongoDB, PostgreSQL, AWS, Docker, Kubernetes"
          className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
          rows={3}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="developerTools" className="text-sm font-medium text-gray-700">Developer Tools</Label>
        <Textarea
          id="developerTools"
          value={data.developerTools || ''}
          onChange={(e) => handleChange('developerTools', e.target.value)}
          placeholder="Git, GitHub, VS Code, Postman, Figma, Jira, Jenkins, CI/CD"
          className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
          rows={3}
        />
      </div>
    </div>
  );
};

export default SkillsForm;