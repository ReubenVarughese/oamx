import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, GraduationCap, Building2, Users, Mail, ExternalLink } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { InvolvementOpportunities } from '@/entities';

export default function GetInvolvedPage() {
  const [opportunities, setOpportunities] = useState<InvolvementOpportunities[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const { items } = await BaseCrudService.getAll<InvolvementOpportunities>('involvementopportunities');
        setOpportunities(items);
      } catch (error) {
        console.error('Error fetching opportunities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
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
            <Link to="/team" className="text-secondary-foreground hover:text-accentcyan transition-colors font-paragraph text-base">
              Team
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
                Get Involved
              </h1>
              <p className="font-paragraph text-xl text-primary-foreground mb-8 leading-relaxed opacity-90">
                Join Ohio's premier advanced mobility community. Whether you're a student, industry professional, or organization, there are multiple ways to contribute to the future of transportation.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_f366abe902ae4eaa923e20890456c04e~mv2.png?originWidth=576&originHeight=384"
                alt="Get involved with OAMx community"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Overview */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
              Pathways to Participation
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the involvement level that best fits your goals and expertise. Every contribution helps advance Ohio's mobility innovation ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Students & Researchers
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed mb-6">
                Present research, participate in competitions, and connect with industry mentors to accelerate your career in advanced mobility.
              </p>
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                Student Opportunities
              </Button>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Industry Professionals
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed mb-6">
                Share expertise, explore partnerships, and stay at the forefront of transportation technology developments.
              </p>
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                Industry Engagement
              </Button>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Organizations & Partners
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed mb-6">
                Sponsor events, collaborate on research initiatives, and help shape the future of mobility policy and implementation.
              </p>
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                Partnership Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Opportunities */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Current Opportunities
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              Explore specific ways to get involved with OAMx right now.
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-accentcyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="font-paragraph text-foreground">Loading opportunities...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {opportunities.map((opportunity) => (
                <Card key={opportunity._id} className="border-foreground/10 h-full">
                  <CardHeader>
                    {opportunity.heroImage && (
                      <Image
                        src={opportunity.heroImage}
                        alt={opportunity.opportunityName || 'Opportunity'}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        width={400}
                      />
                    )}
                    <CardTitle className="font-heading text-xl text-foreground">
                      {opportunity.opportunityName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="font-paragraph text-sm text-accentcyan mb-2">
                      {opportunity.targetAudience}
                    </p>
                    <p className="font-paragraph text-foreground leading-relaxed mb-4 flex-1">
                      {opportunity.shortDescription}
                    </p>
                    <div className="space-y-3">
                      {opportunity.contactEmail && (
                        <a href={`mailto:${opportunity.contactEmail}`}>
                          <Button variant="outline" className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background font-paragraph">
                            <Mail className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                        </a>
                      )}
                      {opportunity.applicationUrl && (
                        <a href={opportunity.applicationUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                            Apply Now
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!loading && opportunities.length === 0 && (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-foreground mb-6">
                New opportunities are being added regularly. Check back soon or contact us to learn about upcoming involvement options.
              </p>
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                Contact for More Info
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Student Focus Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary-foreground mb-6">
                Students & Early Career
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground mb-6 leading-relaxed opacity-90">
                OAMx is committed to nurturing the next generation of mobility innovators. We offer multiple pathways for students and early-career professionals to engage with cutting-edge research and industry leaders.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-primary-foreground opacity-90">
                    Present research at our annual conference
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-primary-foreground opacity-90">
                    Participate in student competitions and challenges
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-primary-foreground opacity-90">
                    Connect with industry mentors and potential employers
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-primary-foreground opacity-90">
                    Access exclusive workshops and training sessions
                  </p>
                </div>
              </div>
              <Link to="/mentorship">
                <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  Learn About Mentorship
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_11be3eb2b50447be8afd8febcd0110aa~mv2.png?originWidth=576&originHeight=384"
                alt="Student opportunities and mentorship"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partnership */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="https://static.wixstatic.com/media/c29efb_179ffdd85b4f4588a5c95d370671ad17~mv2.png?originWidth=576&originHeight=384"
                alt="Industry partnerships and collaboration"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
                Industry Partnership
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground mb-6 leading-relaxed">
                Partner with OAMx to access Ohio's vibrant mobility innovation ecosystem. From startups to Fortune 500 companies, our partners benefit from unique networking and collaboration opportunities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-secondary-foreground">
                    Showcase technologies and solutions to key stakeholders
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-secondary-foreground">
                    Collaborate on research and development initiatives
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-secondary-foreground">
                    Recruit top talent from leading universities
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-secondary-foreground">
                    Influence policy and regulatory discussions
                  </p>
                </div>
              </div>
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                Explore Partnerships
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-heading text-4xl text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-paragraph text-lg text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Have questions about involvement opportunities? Want to discuss a custom partnership? We're here to help you find the perfect way to contribute to Ohio's mobility future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@oamx.org">
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </a>
            <Link to="/2025-event">
              <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-paragraph">
                View 2025 Event
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