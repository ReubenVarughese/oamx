import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Target, Calendar, Clock } from 'lucide-react';

export default function MentorshipPage() {
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

      {/* Hero Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <Link to="/get-involved" className="inline-flex items-center text-primary-foreground hover:text-accentcyan transition-colors mb-8 font-paragraph">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Get Involved
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-accentcyan text-primary font-paragraph mb-4">
                Coming Soon
              </Badge>
              <h1 className="font-heading text-5xl text-primary-foreground mb-6">
                Mentorship Program
              </h1>
              <p className="font-paragraph text-xl text-primary-foreground mb-8 leading-relaxed opacity-90">
                Connecting the next generation of mobility innovators with industry leaders and experienced researchers to accelerate career development and foster innovation.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_005d538795d84530b2073314d6290c39~mv2.png?originWidth=576&originHeight=384"
                alt="Mentorship program connecting students with industry leaders"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
              Program Overview
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
              Our mentorship program will create meaningful connections between students, early-career professionals, and established leaders in the advanced mobility sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                One-on-One Mentoring
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                Personalized guidance from industry professionals with expertise in autonomous systems, UAM, smart infrastructure, and policy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Career Development
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                Focused support for career planning, skill development, networking, and navigating the advanced mobility industry landscape.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Structured Program
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                Six-month program with regular check-ins, goal setting, and access to exclusive networking events and workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Mentees */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl text-foreground mb-6">
                For Mentees
              </h2>
              <p className="font-paragraph text-lg text-foreground mb-6 leading-relaxed">
                Whether you're an undergraduate student, graduate researcher, or early-career professional, our mentorship program provides the guidance and connections you need to advance in the mobility sector.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-foreground">
                    Career guidance and industry insights from experienced professionals
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-foreground">
                    Networking opportunities and introductions to key industry contacts
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-foreground">
                    Skill development workshops and technical training sessions
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-foreground">
                    Research collaboration opportunities and project feedback
                  </p>
                </div>
              </div>

              <Card className="border-accentcyan/20 bg-accentcyan/5">
                <CardContent className="p-6">
                  <h4 className="font-heading text-lg text-foreground mb-2">Eligibility</h4>
                  <p className="font-paragraph text-foreground text-sm">
                    Open to undergraduate students, graduate students, and professionals with less than 5 years of experience in mobility-related fields.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_7ca7954e677748c6a8467469a797033d~mv2.png?originWidth=576&originHeight=384"
                alt="Mentee opportunities and career development"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Mentors */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="https://static.wixstatic.com/media/c29efb_d98a9beca8cf4ac9beb7c32ce44bcddb~mv2.png?originWidth=576&originHeight=384"
                alt="Mentors providing leadership and guidance"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-4xl text-primary-foreground mb-6">
                For Mentors
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground mb-6 leading-relaxed opacity-90">
                Share your expertise and help shape the next generation of mobility innovators while expanding your own professional network and staying connected to cutting-edge research.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-primary-foreground opacity-90">
                    Give back to the community and help develop future industry leaders
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-primary-foreground opacity-90">
                    Stay connected to academic research and emerging technologies
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-primary-foreground opacity-90">
                    Expand your professional network and identify potential talent
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-paragraph text-primary-foreground opacity-90">
                    Flexible commitment with structured support and resources
                  </p>
                </div>
              </div>

              <Card className="border-accentcyan/20 bg-secondary">
                <CardContent className="p-6">
                  <h4 className="font-heading text-lg text-secondary-foreground mb-2">Commitment</h4>
                  <p className="font-paragraph text-secondary-foreground text-sm">
                    2-3 hours per month for 6 months, including regular meetings, program events, and optional workshops.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
              Program Timeline
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
              Our structured approach ensures meaningful connections and measurable outcomes for both mentors and mentees.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-primary font-bold">1</span>
              </div>
              <h3 className="font-heading text-lg text-secondary-foreground mb-2">Application</h3>
              <p className="font-paragraph text-sm text-secondary-foreground">
                Submit application and complete matching survey
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-primary font-bold">2</span>
              </div>
              <h3 className="font-heading text-lg text-secondary-foreground mb-2">Matching</h3>
              <p className="font-paragraph text-sm text-secondary-foreground">
                Careful pairing based on goals, interests, and expertise
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-primary font-bold">3</span>
              </div>
              <h3 className="font-heading text-lg text-secondary-foreground mb-2">Kickoff</h3>
              <p className="font-paragraph text-sm text-secondary-foreground">
                Program orientation and first mentor-mentee meeting
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-primary font-bold">4</span>
              </div>
              <h3 className="font-heading text-lg text-secondary-foreground mb-2">Engagement</h3>
              <p className="font-paragraph text-sm text-secondary-foreground">
                Regular meetings, workshops, and networking events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-foreground mb-6">
              What to Expect
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              We're developing a comprehensive program that will launch in early 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-foreground/10">
              <CardHeader>
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  Flexible Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-paragraph text-foreground leading-relaxed">
                  Virtual and in-person meeting options with scheduling that works for both mentors and mentees across different time zones and commitments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-foreground/10">
              <CardHeader>
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  Group Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-paragraph text-foreground leading-relaxed">
                  Monthly group sessions, workshops, and networking events to complement one-on-one mentoring relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-foreground/10">
              <CardHeader>
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  Goal Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-paragraph text-foreground leading-relaxed">
                  Structured goal-setting and progress tracking to ensure meaningful outcomes and measurable career development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-foreground/10">
              <CardHeader>
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  Program Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-paragraph text-foreground leading-relaxed">
                  Dedicated program coordinators, resources, and ongoing support to ensure successful mentoring relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-heading text-4xl text-primary-foreground mb-6">
            Express Your Interest
          </h2>
          <p className="font-paragraph text-lg text-primary-foreground mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Be among the first to know when applications open for our mentorship program. We'll notify you as soon as registration becomes available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mentorship@oamx.org?subject=Mentorship Program Interest">
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                Express Interest as Mentee
              </Button>
            </a>
            <a href="mailto:mentorship@oamx.org?subject=Mentor Application Interest">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-paragraph">
                Apply to be a Mentor
              </Button>
            </a>
          </div>
          <p className="font-paragraph text-sm text-primary-foreground opacity-70 mt-6">
            Program launch expected: Spring 2025
          </p>
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
                <Link to="/get-involved" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Get Involved
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