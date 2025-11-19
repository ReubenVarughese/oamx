import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { TeamMembers } from '@/entities';

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMembers[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const { items } = await BaseCrudService.getAll<TeamMembers>('teammembers');
        // Sort team members by creation date in Ascending order (most recent first)
        const sortedItems = items.sort((a, b) => {
          const dateA = new Date(a._createdDate || 0);
          const dateB = new Date(b._createdDate || 0);
          return dateA.getTime() - dateB.getTime();
        });
        setTeamMembers(sortedItems);
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <Link to="/" className="inline-flex items-center text-primary-foreground hover:text-accentcyan transition-colors mb-8 font-paragraph">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-heading text-5xl text-primary-foreground mb-6">
                Meet the Team
              </h1>
              <p className="font-paragraph text-xl text-primary-foreground mb-8 leading-relaxed opacity-90">
                The passionate individuals behind OAMx, dedicated to advancing Ohio's position as a leader in mobility innovation and bringing together the brightest minds in transportation technology.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_ef573406c25f46ad9670d9f35d7452b1~mv2.png?originWidth=576&originHeight=384"
                alt="OAMx team collaboration and leadership"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
              Our Leadership Team
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
              Experienced professionals from academia, industry, and government working together to shape the future of advanced mobility in Ohio.
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-accentcyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="font-paragraph text-secondary-foreground">Loading team members...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member._id} className="border-foreground/10 overflow-hidden">
                  <div className="relative">
                    {member.profilePicture ? (
                      <Image
                        src={member.profilePicture}
                        alt={member.name || 'Team member'}
                        className="w-full h-64 object-cover"
                        width={400}
                      />
                    ) : (
                      <div className="w-full h-64 bg-background flex items-center justify-center">
                        <div className="w-20 h-20 bg-accentcyan rounded-full flex items-center justify-center">
                          <span className="font-heading text-2xl text-primary">
                            {member.name?.charAt(0) || 'T'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl text-secondary-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="font-paragraph text-accentcyan mb-4 font-semibold">
                      {member.role}
                    </p>
                    {member.bio && (
                      <p className="font-paragraph text-secondary-foreground text-sm leading-relaxed mb-6">
                        {member.bio}
                      </p>
                    )}
                    <div className="flex space-x-3">
                      {member.email && (
                        <a href={`mailto:${member.email}`}>
                          <Button size="sm" variant="outline" className="border-foreground/20 text-secondary-foreground hover:bg-accentcyan hover:text-primary hover:border-accentcyan">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </a>
                      )}
                      {member.linkedinUrl && (
                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="border-foreground/20 text-secondary-foreground hover:bg-accentcyan hover:text-primary hover:border-accentcyan">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!loading && teamMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-secondary-foreground mb-6">
                Team member profiles are being updated. Check back soon to meet our leadership team.
              </p>
              <a href="mailto:info@oamx.org">
                <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  Contact Us
                </Button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl text-foreground mb-6">
                Our Commitment
              </h2>
              <p className="font-paragraph text-lg text-foreground mb-6 leading-relaxed">
                Our team is united by a shared vision: to position Ohio as a global leader in advanced mobility innovation. We bring together diverse expertise from academia, industry, and government to create meaningful connections and drive real progress.
              </p>
              <p className="font-paragraph text-lg text-foreground mb-8 leading-relaxed">
                Every member of our team is committed to fostering collaboration, supporting innovation, and building a sustainable future for transportation in Ohio and beyond.
              </p>
              <Link to="/about">
                <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  Learn More About OAMx
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_0d2856335f4a4232a9f8f80c70a8cbf8~mv2.png?originWidth=576&originHeight=384"
                alt="Team commitment to innovation and collaboration"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-primary-foreground mb-6">
              Advisory Network
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground max-w-3xl mx-auto leading-relaxed opacity-90">
              OAMx is supported by a network of advisors from leading universities, innovative companies, and government agencies who provide strategic guidance and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl text-primary">A</span>
              </div>
              <h3 className="font-heading text-xl text-primary-foreground mb-4">
                Academic Partners
              </h3>
              <p className="font-paragraph text-primary-foreground opacity-90 leading-relaxed">
                Leading researchers from Ohio State University and partner institutions providing cutting-edge research insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl text-primary">I</span>
              </div>
              <h3 className="font-heading text-xl text-primary-foreground mb-4">
                Industry Experts
              </h3>
              <p className="font-paragraph text-primary-foreground opacity-90 leading-relaxed">
                Senior executives and technical leaders from automotive, aerospace, and technology companies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl text-primary">G</span>
              </div>
              <h3 className="font-heading text-xl text-primary-foreground mb-4">
                Government Relations
              </h3>
              <p className="font-paragraph text-primary-foreground opacity-90 leading-relaxed">
                Policy experts and regulatory specialists helping navigate the complex landscape of transportation innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="font-paragraph text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in contributing to Ohio's advanced mobility future? We're always looking for passionate individuals to join our team and advisory network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:careers@oamx.org">
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </a>
            <Link to="/get-involved">
              <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-paragraph">
                Get Involved
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </Link>
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
                <Link to="/get-involved" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Get Involved
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