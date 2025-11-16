import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle } from 'lucide-react';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    title: '',
    attendeeType: '',
    dietaryRestrictions: '',
    accessibilityNeeds: '',
    emergencyContact: '',
    emergencyPhone: '',
    newsletter: false,
    terms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-3xl text-foreground mb-4">
            Registration Successful!
          </h1>
          <p className="font-paragraph text-lg text-foreground mb-8 leading-relaxed">
            Thank you for registering for OAMx 2025. You'll receive a confirmation email shortly with event details and next steps.
          </p>
          <div className="space-y-4">
            <Link to="/2025-event">
              <Button className="w-full bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                View Event Details
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background font-paragraph">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-secondary py-4 px-8 lg:px-16 border-b border-foreground/10">
        <div className="max-w-[100rem] mx-auto flex justify-between items-center">
          <Link to="/" className="font-heading text-2xl text-secondary-foreground">
            OAMx
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-secondary-foreground hover:text-accentcyan transition-colors font-paragraph text-base">
              Home
            </Link>
            <Link to="/about" className="text-secondary-foreground hover:text-accentcyan transition-colors font-paragraph text-base">
              About
            </Link>
            <Link to="/2025-event" className="text-secondary-foreground hover:text-accentcyan transition-colors font-paragraph text-base">
              2025 Event
            </Link>
            <Link to="/get-involved" className="text-secondary-foreground hover:text-accentcyan transition-colors font-paragraph text-base">
              Get Involved
            </Link>
            <Link to="/team" className="text-secondary-foreground hover:text-accentcyan transition-colors font-paragraph text-base">
              Team
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <Link to="/2025-event" className="inline-flex items-center text-primary-foreground hover:text-accentcyan transition-colors mb-8 font-paragraph">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to 2025 Event
          </Link>
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl text-primary-foreground mb-6">
              Register for OAMx 2025
            </h1>
            <p className="font-paragraph text-lg text-primary-foreground mb-8 leading-relaxed opacity-90">
              Secure your spot at Ohio's premier advanced mobility event. Join 500+ innovators, researchers, and industry leaders for three days of cutting-edge presentations and networking.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center text-primary-foreground">
                <Calendar className="h-5 w-5 mr-3 text-accentcyan" />
                <div>
                  <p className="font-paragraph text-sm opacity-80">Dates</p>
                  <p className="font-paragraph font-semibold">March 15-17, 2025</p>
                </div>
              </div>
              <div className="flex items-center text-primary-foreground">
                <MapPin className="h-5 w-5 mr-3 text-accentcyan" />
                <div>
                  <p className="font-paragraph text-sm opacity-80">Location</p>
                  <p className="font-paragraph font-semibold">Columbus, Ohio</p>
                </div>
              </div>
              <div className="flex items-center text-primary-foreground">
                <Users className="h-5 w-5 mr-3 text-accentcyan" />
                <div>
                  <p className="font-paragraph text-sm opacity-80">Expected</p>
                  <p className="font-paragraph font-semibold">500+ Attendees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-foreground/10">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-foreground">
                    Registration Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="font-heading text-lg text-foreground">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="font-paragraph text-foreground">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="font-paragraph"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="font-paragraph text-foreground">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="font-paragraph"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-paragraph text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="font-paragraph"
                        />
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="space-y-4">
                      <h3 className="font-heading text-lg text-foreground">Professional Information</h3>
                      <div>
                        <Label htmlFor="organization" className="font-paragraph text-foreground">
                          Organization *
                        </Label>
                        <Input
                          id="organization"
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => handleInputChange('organization', e.target.value)}
                          className="font-paragraph"
                        />
                      </div>
                      <div>
                        <Label htmlFor="title" className="font-paragraph text-foreground">
                          Job Title *
                        </Label>
                        <Input
                          id="title"
                          type="text"
                          required
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          className="font-paragraph"
                        />
                      </div>
                      <div>
                        <Label htmlFor="attendeeType" className="font-paragraph text-foreground">
                          Attendee Type *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('attendeeType', value)}>
                          <SelectTrigger className="font-paragraph">
                            <SelectValue placeholder="Select attendee type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="academic">Academic/Researcher</SelectItem>
                            <SelectItem value="industry">Industry Professional</SelectItem>
                            <SelectItem value="government">Government/Policy</SelectItem>
                            <SelectItem value="startup">Startup/Entrepreneur</SelectItem>
                            <SelectItem value="media">Media/Press</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Special Requirements */}
                    <div className="space-y-4">
                      <h3 className="font-heading text-lg text-foreground">Special Requirements</h3>
                      <div>
                        <Label htmlFor="dietaryRestrictions" className="font-paragraph text-foreground">
                          Dietary Restrictions
                        </Label>
                        <Textarea
                          id="dietaryRestrictions"
                          placeholder="Please describe any dietary restrictions or food allergies"
                          value={formData.dietaryRestrictions}
                          onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                          className="font-paragraph"
                        />
                      </div>
                      <div>
                        <Label htmlFor="accessibilityNeeds" className="font-paragraph text-foreground">
                          Accessibility Needs
                        </Label>
                        <Textarea
                          id="accessibilityNeeds"
                          placeholder="Please describe any accessibility accommodations needed"
                          value={formData.accessibilityNeeds}
                          onChange={(e) => handleInputChange('accessibilityNeeds', e.target.value)}
                          className="font-paragraph"
                        />
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="space-y-4">
                      <h3 className="font-heading text-lg text-foreground">Emergency Contact</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="emergencyContact" className="font-paragraph text-foreground">
                            Emergency Contact Name
                          </Label>
                          <Input
                            id="emergencyContact"
                            type="text"
                            value={formData.emergencyContact}
                            onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                            className="font-paragraph"
                          />
                        </div>
                        <div>
                          <Label htmlFor="emergencyPhone" className="font-paragraph text-foreground">
                            Emergency Contact Phone
                          </Label>
                          <Input
                            id="emergencyPhone"
                            type="tel"
                            value={formData.emergencyPhone}
                            onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                            className="font-paragraph"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preferences */}
                    <div className="space-y-4">
                      <h3 className="font-heading text-lg text-foreground">Preferences</h3>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="font-paragraph text-foreground text-sm">
                          Subscribe to OAMx newsletter for updates and future events
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                          required
                        />
                        <Label htmlFor="terms" className="font-paragraph text-foreground text-sm">
                          I agree to the terms and conditions and privacy policy *
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.terms}
                      className="w-full bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph text-base py-6"
                    >
                      {isSubmitting ? 'Processing Registration...' : 'Complete Registration'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing */}
              <Card className="border-foreground/10">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">
                    Registration Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-paragraph text-foreground">Students</span>
                    <span className="font-paragraph font-semibold text-foreground">$75</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-paragraph text-foreground">Academic</span>
                    <span className="font-paragraph font-semibold text-foreground">$150</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-paragraph text-foreground">Industry</span>
                    <span className="font-paragraph font-semibold text-foreground">$300</span>
                  </div>
                  <div className="border-t border-foreground/10 pt-4">
                    <p className="font-paragraph text-sm text-foreground opacity-80">
                      Early bird pricing available until February 1, 2025
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card className="border-foreground/10">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-paragraph text-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      All conference sessions and workshops
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Welcome reception and networking dinner
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Daily breakfast and lunch
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Conference materials and swag bag
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Access to presentation recordings
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-foreground/10">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-paragraph text-foreground mb-4">
                    Questions about registration or the event?
                  </p>
                  <a href="mailto:registration@oamx.org">
                    <Button variant="outline" className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background font-paragraph">
                      Contact Registration Team
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-16">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading text-xl text-primary-foreground mb-4">OAMx</h3>
              <p className="font-paragraph text-sm text-primary-foreground opacity-80 leading-relaxed">
                Ohio Advanced Mobility Exchange - Advancing the future of transportation.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-primary-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Home
                </Link>
                <Link to="/about" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  About
                </Link>
                <Link to="/2025-event" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  2025 Event
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg text-primary-foreground mb-4">Programs</h4>
              <div className="space-y-2">
                <Link to="/get-involved" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Get Involved
                </Link>
                <Link to="/mentorship" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Mentorship
                </Link>
                <Link to="/media-kit" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Media Kit
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg text-primary-foreground mb-4">Connect</h4>
              <div className="space-y-2">
                <Link to="/team" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Meet the Team
                </Link>
                <a href="mailto:info@oamx.org" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="font-paragraph text-sm text-primary-foreground opacity-60">
              © 2024 Ohio Advanced Mobility Exchange. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}