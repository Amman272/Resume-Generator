import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const AchievementsForm = ({ data, updateData }) => {
  const handleChange = (field, value) => {
    updateData('achievements', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="organizationName" className="text-sm font-medium text-gray-700">Organization/Institution</Label>
        <Input
          id="organizationName"
          value={data.organizationName || ''}
          onChange={(e) => handleChange('organizationName', e.target.value)}
          placeholder="IEEE Computer Society"
          className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="achievementRole" className="text-sm font-medium text-gray-700">Role/Position</Label>
          <Input
            id="achievementRole"
            value={data.achievementRole || ''}
            onChange={(e) => handleChange('achievementRole', e.target.value)}
            placeholder="Vice President"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="achievementLocation" className="text-sm font-medium text-gray-700">Location</Label>
          <Input
            id="achievementLocation"
            value={data.achievementLocation || ''}
            onChange={(e) => handleChange('achievementLocation', e.target.value)}
            placeholder="San Francisco, CA"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="achievementStartDate" className="text-sm font-medium text-gray-700">Start Date</Label>
          <Input
            id="achievementStartDate"
            value={data.achievementStartDate || ''}
            onChange={(e) => handleChange('achievementStartDate', e.target.value)}
            placeholder="January 2024"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="achievementEndDate" className="text-sm font-medium text-gray-700">End Date</Label>
          <Input
            id="achievementEndDate"
            value={data.achievementEndDate || ''}
            onChange={(e) => handleChange('achievementEndDate', e.target.value)}
            placeholder="Present"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-700">Key Achievements & Contributions</Label>
        <div className="space-y-3">
          <Textarea
            value={data.achievementPoint1 || ''}
            onChange={(e) => handleChange('achievementPoint1', e.target.value)}
            placeholder="• Led a team of 20+ members to organize technical workshops and events"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={2}
          />
          <Textarea
            value={data.achievementPoint2 || ''}
            onChange={(e) => handleChange('achievementPoint2', e.target.value)}
            placeholder="• Increased membership by 35% through innovative outreach programs"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={2}
          />
          <Textarea
            value={data.achievementPoint3 || ''}
            onChange={(e) => handleChange('achievementPoint3', e.target.value)}
            placeholder="• Secured $10,000 in sponsorship funding for annual technology conference"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

export default AchievementsForm;