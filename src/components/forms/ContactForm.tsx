import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ContactFormProps {
  data: any;
  updateData: (section: string, data: any) => void;
}

const ContactForm = ({ data, updateData }: ContactFormProps) => {
  const handleChange = (field: string, value: string) => {
    updateData('contact', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
          <Input
            id="name"
            value={data.NAME || ''}
            onChange={(e) => handleChange('NAME', e.target.value)}
            placeholder="John Doe"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
          <Input
            id="phone"
            value={data.PHONE || ''}
            onChange={(e) => handleChange('PHONE', e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={data.EMAIL || ''}
          onChange={(e) => handleChange('EMAIL', e.target.value)}
          placeholder="john.doe@email.com"
          className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="linkedin" className="text-sm font-medium text-gray-700">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            value={data.LINKEDIN || ''}
            onChange={(e) => handleChange('LINKEDIN', e.target.value)}
            placeholder="linkedin.com/in/johndoe"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="github" className="text-sm font-medium text-gray-700">GitHub Profile</Label>
          <Input
            id="github"
            value={data.GITHUB || ''}
            onChange={(e) => handleChange('GITHUB', e.target.value)}
            placeholder="github.com/johndoe"
            className="transition-all duration-200 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;