import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EducationFormProps {
  data: any;
  updateData: (section: string, data: any) => void;
}

const EducationForm = ({ data, updateData }: EducationFormProps) => {
  const handleChange = (field: string, value: string) => {
    updateData('education', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="schoolName" className="text-sm font-medium text-gray-700">School/University Name</Label>
        <Input
          id="schoolName"
          value={data.schoolName || ''}
          onChange={(e) => handleChange('schoolName', e.target.value)}
          placeholder="University of California, Berkeley"
          className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="degree" className="text-sm font-medium text-gray-700">Degree</Label>
          <Input
            id="degree"
            value={data.degree || ''}
            onChange={(e) => handleChange('degree', e.target.value)}
            placeholder="Bachelor of Science in Computer Science"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dates" className="text-sm font-medium text-gray-700">Graduation Date</Label>
          <Input
            id="dates"
            value={data.dates || ''}
            onChange={(e) => handleChange('dates', e.target.value)}
            placeholder="May 2024"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="location" className="text-sm font-medium text-gray-700">Location</Label>
        <Input
          id="location"
          value={data.location || ''}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="Berkeley, CA"
          className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default EducationForm;