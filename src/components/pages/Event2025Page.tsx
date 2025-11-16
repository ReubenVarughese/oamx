import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, Users, Clock, ExternalLink, Download } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { OAMxEvents } from '@/entities';

export default function Event2025Page() {
  const [event, setEvent] = useState<OAMxEvents | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { items } = await BaseCrudService.getAll<OAMxEvents>('oamxevents');
        // Find the 2025 event or the most recent future event
        const event2025 = items.find(e => e.eventName?.includes('2025')) || items[0];
        setEvent(event2025);
      } catch (error) {
        console.error('Error fetching event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accentcyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground">Loading event details...</p>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return 'TBA';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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
            <Link to="/get-involved" className="text-secondary-foreground hover:text-accentcyan transition-colors font-paragraph text-base">
              Get Involved
            </Link>
            <Link to="/team" className="text-secondary-foreground hover:text-accentcyan transition-colors font-paragraph text-base">
              Team
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={event?.eventBannerImage || "https://static.wixstatic.com/media/c29efb_4d8e6a2d60e8407bae0dfcd3fcc7d485~mv2.png?originWidth=1920&originHeight=576"}
            alt="OAMx 2025 event banner"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-darkgrayoverlay opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-8 lg:px-16">
          <Link to="/" className="inline-flex items-center text-primary-foreground hover:text-accentcyan transition-colors mb-8 font-paragraph">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <Badge className="bg-accentcyan text-primary font-paragraph mb-4">
              {event?.eventType || 'Annual Conference'}
            </Badge>
            <h1 className="font-heading text-5xl lg:text-6xl text-primary-foreground mb-6">
              {event?.eventName || 'OAMx 2025: Convergence'}
            </h1>
            <p className="font-paragraph text-xl text-primary-foreground mb-8 leading-relaxed opacity-90 max-w-3xl">
              {event?.eventDescription || 'Join us for our most ambitious event yet, where autonomous systems, urban air mobility, and smart infrastructure converge to shape tomorrow\'s transportation landscape.'}
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center text-primary-foreground">
                <Calendar className="h-5 w-5 mr-2 text-accentcyan" />
                <span className="font-paragraph">
                  {formatDate(event?.eventStartDate)} - {formatDate(event?.eventEndDate)}
                </span>
              </div>
              <div className="flex items-center text-primary-foreground">
                <MapPin className="h-5 w-5 mr-2 text-accentcyan" />
                <span className="font-paragraph">{event?.eventLocation || 'Columbus, Ohio'}</span>
              </div>
              <div className="flex items-center text-primary-foreground">
                <Users className="h-5 w-5 mr-2 text-accentcyan" />
                <span className="font-paragraph">500+ Attendees Expected</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/registration">
                <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph text-base px-8 py-6">
                  Register Now
                </Button>
              </Link>
              {event?.scheduleUrl && (
                <a href={event.scheduleUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-paragraph">
                    View Schedule
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Event Theme */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
                Theme: {event?.eventTheme || 'Convergence'}
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground mb-6 leading-relaxed">
                The 2025 event explores the convergence of multiple transportation technologies and how their integration will reshape mobility ecosystems. From autonomous vehicles to urban air mobility, smart infrastructure to sustainable energy systems.
              </p>
              <p className="font-paragraph text-lg text-secondary-foreground mb-8 leading-relaxed">
                This year's theme emphasizes the critical importance of interdisciplinary collaboration and systems thinking in solving complex mobility challenges.
              </p>
              <Badge className="bg-accentcyan text-primary font-paragraph">
                {event?.eventCategory || 'Innovation & Technology'}
              </Badge>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_470ec7e85e7d4802847d2a0ce51e48c7~mv2.png?originWidth=576&originHeight=384"
                alt="Convergence theme visualization"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Event Highlights
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              Three days packed with cutting-edge presentations, interactive workshops, and networking opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-foreground/10">
              <CardHeader>
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  Keynote Speakers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-paragraph text-foreground leading-relaxed">
                  Industry leaders and visionaries sharing insights on the future of transportation technology and policy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-foreground/10">
              <CardHeader>
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  Technical Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-paragraph text-foreground leading-relaxed">
                  Deep-dive presentations on autonomous systems, UAM, smart infrastructure, and sustainable mobility solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-foreground/10">
              <CardHeader>
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  Interactive Workshops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-paragraph text-foreground leading-relaxed">
                  Hands-on sessions covering emerging technologies, policy frameworks, and collaborative problem-solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-primary-foreground mb-6">
              Schedule Overview
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground max-w-3xl mx-auto leading-relaxed opacity-90">
              A comprehensive three-day program designed to maximize learning and networking opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Day 1</h3>
              <h4 className="font-heading text-lg text-accentcyan mb-4">Opening & Foundations</h4>
              <ul className="space-y-2 font-paragraph text-secondary-foreground">
                <li>• Welcome & Opening Keynote</li>
                <li>• State of Advanced Mobility</li>
                <li>• Technology Showcase</li>
                <li>• Welcome Reception</li>
              </ul>
            </div>

            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Day 2</h3>
              <h4 className="font-heading text-lg text-accentcyan mb-4">Deep Dive Sessions</h4>
              <ul className="space-y-2 font-paragraph text-secondary-foreground">
                <li>• Autonomous Systems Track</li>
                <li>• Urban Air Mobility Track</li>
                <li>• Smart Infrastructure Track</li>
                <li>• Networking Dinner</li>
              </ul>
            </div>

            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Day 3</h3>
              <h4 className="font-heading text-lg text-accentcyan mb-4">Integration & Future</h4>
              <ul className="space-y-2 font-paragraph text-secondary-foreground">
                <li>• Convergence Workshops</li>
                <li>• Policy & Regulation Panel</li>
                <li>• Future Roadmap Session</li>
                <li>• Closing Ceremony</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            {event?.scheduleUrl ? (
              <a href={event.scheduleUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  Download Full Schedule
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            ) : (
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                Full Schedule Coming Soon
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
                Sponsorship Opportunities
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground mb-6 leading-relaxed">
                Partner with OAMx 2025 to showcase your organization's commitment to advancing mobility innovation. Our sponsorship packages offer excellent visibility and networking opportunities.
              </p>
              <p className="font-paragraph text-lg text-secondary-foreground mb-8 leading-relaxed">
                From title sponsorship to specialized track support, we offer flexible packages to meet your organization's goals and budget.
              </p>
              {event?.sponsorshipOpportunitiesUrl ? (
                <a href={event.sponsorshipOpportunitiesUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                    View Sponsorship Packages
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              ) : (
                <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  Contact for Sponsorship Info
                </Button>
              )}
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_9d12d86113a746638f3b62c95769aff4~mv2.png?originWidth=576&originHeight=384"
                alt="Sponsorship and partnership opportunities"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-heading text-4xl text-foreground mb-6">
            Secure Your Spot
          </h2>
          <p className="font-paragraph text-lg text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't miss this opportunity to be part of Ohio's premier advanced mobility event. Early bird pricing available for a limited time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/registration">
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph text-base px-8 py-6">
                Register for OAMx 2025
              </Button>
            </Link>
            {event?.registrationUrl && (
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-paragraph">
                  External Registration
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            )}
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
                <Link to="/get-involved" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Get Involved
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg text-primary-foreground mb-4">Programs</h4>
              <div className="space-y-2">
                <Link to="/registration" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Registration
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