import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ProjectsForm = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData('projects', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="projectName" className="text-sm font-medium text-gray-700">Project Name</Label>
        <Input
          id="projectName"
          value={data.projectName || ''}
          onChange={(e) => handleChange('projectName', e.target.value)}
          placeholder="E-commerce Platform"
          className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="technologies" className="text-sm font-medium text-gray-700">Technologies Used</Label>
          <Input
            id="technologies"
            value={data.technologies || ''}
            onChange={(e) => handleChange('technologies', e.target.value)}
            placeholder="React, Node.js, MongoDB, AWS"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectDate" className="text-sm font-medium text-gray-700">Project Date</Label>
          <Input
            id="projectDate"
            value={data.projectDate || ''}
            onChange={(e) => handleChange('projectDate', e.target.value)}
            placeholder="March 2024"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-700">Project Description & Key Features</Label>
        <div className="space-y-3">
          <Textarea
            value={data.projectPoint1 || ''}
            onChange={(e) => handleChange('projectPoint1', e.target.value)}
            placeholder="• Built a full-stack e-commerce platform with user authentication and payment processing"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={2}
          />
          <Textarea
            value={data.projectPoint2 || ''}
            onChange={(e) => handleChange('projectPoint2', e.target.value)}
            placeholder="• Implemented responsive design and optimized for mobile devices"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={2}
          />
          <Textarea
            value={data.projectPoint3 || ''}
            onChange={(e) => handleChange('projectPoint3', e.target.value)}
            placeholder="• Integrated third-party APIs for shipping and inventory management"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsForm;