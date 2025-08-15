import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ExperienceForm = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData('experience', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">Company Name</Label>
        <Input
          id="companyName"
          value={data.companyName || ''}
          onChange={(e) => handleChange('companyName', e.target.value)}
          placeholder="Google Inc."
          className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="role" className="text-sm font-medium text-gray-700">Job Title</Label>
          <Input
            id="role"
            value={data.role || ''}
            onChange={(e) => handleChange('role', e.target.value)}
            placeholder="Software Engineer"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium text-gray-700">Location</Label>
          <Input
            id="location"
            value={data.location || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="Mountain View, CA"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="startDate" className="text-sm font-medium text-gray-700">Start Date</Label>
          <Input
            id="startDate"
            value={data.startDate || ''}
            onChange={(e) => handleChange('startDate', e.target.value)}
            placeholder="June 2023"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate" className="text-sm font-medium text-gray-700">End Date</Label>
          <Input
            id="endDate"
            value={data.endDate || ''}
            onChange={(e) => handleChange('endDate', e.target.value)}
            placeholder="Present"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-700">Key Achievements & Responsibilities</Label>
        <div className="space-y-3">
          <Textarea
            value={data.experiencePoint1 || ''}
            onChange={(e) => handleChange('experiencePoint1', e.target.value)}
            placeholder="• Developed and deployed scalable web applications using React and Node.js"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={2}
          />
          <Textarea
            value={data.experiencePoint2 || ''}
            onChange={(e) => handleChange('experiencePoint2', e.target.value)}
            placeholder="• Collaborated with cross-functional teams to deliver high-quality software solutions"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={2}
          />
          <Textarea
            value={data.experiencePoint3 || ''}
            onChange={(e) => handleChange('experiencePoint3', e.target.value)}
            placeholder="• Improved application performance by 40% through code optimization and best practices"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;