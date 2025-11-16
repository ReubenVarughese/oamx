import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { ArrowLeft, Target, Users, Lightbulb, Globe } from 'lucide-react';

export default function AboutPage() {
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
          <Link to="/" className="inline-flex items-center text-primary-foreground hover:text-accentcyan transition-colors mb-8 font-paragraph">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-heading text-5xl text-primary-foreground mb-6">
                About OAMx
              </h1>
              <p className="font-paragraph text-xl text-primary-foreground mb-8 leading-relaxed opacity-90">
                The Ohio Advanced Mobility Exchange represents the evolution of transportation innovation in the Midwest, connecting visionaries to build tomorrow's mobility solutions.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_c435519ff508418385c08a642ff72767~mv2.png?originWidth=576&originHeight=384"
                alt="OAMx mission and vision"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl text-secondary-foreground mb-12 text-center">
              Our Evolution
            </h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                    From UAM Symposium to OAMx
                  </h3>
                  <p className="font-paragraph text-lg text-secondary-foreground leading-relaxed">
                    What began as the Ohio UAM Symposium has transformed into something far more comprehensive. Recognizing that the future of mobility extends beyond urban air mobility, we expanded our scope to encompass all forms of advanced transportation technologies.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://static.wixstatic.com/media/c29efb_f0fe2181631e45328a6aa7c133398965~mv2.png?originWidth=448&originHeight=256"
                    alt="Evolution from UAM Symposium to OAMx"
                    className="w-full h-64 object-cover rounded-lg"
                    width={500}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <Image
                    src="https://static.wixstatic.com/media/c29efb_7e99000e08ed4375b1d0bab0e4c823f5~mv2.png?originWidth=448&originHeight=256"
                    alt="Innovation ecosystem and collaboration"
                    className="w-full h-64 object-cover rounded-lg"
                    width={500}
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                    Building an Innovation Ecosystem
                  </h3>
                  <p className="font-paragraph text-lg text-secondary-foreground leading-relaxed">
                    Today, OAMx serves as Ohio's premier platform for advanced mobility innovation, bringing together researchers, industry leaders, policymakers, and students to collaborate on the transportation challenges of tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-secondary p-12 rounded-lg">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-3xl text-secondary-foreground mb-6">
                Our Mission
              </h3>
              <p className="font-paragraph text-lg text-secondary-foreground leading-relaxed">
                To accelerate the development and deployment of advanced mobility technologies by fostering collaboration between academia, industry, and government, positioning Ohio as a global leader in transportation innovation.
              </p>
            </div>

            <div className="bg-primary p-12 rounded-lg">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-3xl text-primary-foreground mb-6">
                Our Vision
              </h3>
              <p className="font-paragraph text-lg text-primary-foreground leading-relaxed opacity-90">
                A future where Ohio leads the transformation of transportation through innovative technologies that enhance safety, efficiency, and accessibility for all communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
              Our Core Values
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do at OAMx, from event planning to community building.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Collaboration
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                We believe the greatest innovations emerge when diverse perspectives come together to solve complex challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Innovation
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                We champion bold thinking and breakthrough technologies that have the potential to transform how we move.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Impact
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                We focus on solutions that create meaningful, positive change for communities and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ohio State Connection */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary-foreground mb-6">
                Rooted in Excellence
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground mb-6 leading-relaxed opacity-90">
                OAMx is proudly connected to The Ohio State University, leveraging world-class research capabilities and academic excellence to drive innovation in advanced mobility.
              </p>
              <p className="font-paragraph text-lg text-primary-foreground mb-8 leading-relaxed opacity-90">
                This partnership enables us to bridge the gap between cutting-edge research and real-world applications, ensuring that breakthrough discoveries translate into practical solutions.
              </p>
              <Link to="/team">
                <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  Meet Our Team
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_e10c00c188684c7cb3db49210f48c57e~mv2.png?originWidth=576&originHeight=384"
                alt="Ohio State University partnership and excellence"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-heading text-4xl text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="font-paragraph text-lg text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a researcher, industry professional, student, or policy maker, there's a place for you in shaping Ohio's transportation future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                Get Involved
              </Button>
            </Link>
            <Link to="/2025-event">
              <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-paragraph">
                Explore 2025 Event
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
                <Link to="/2025-event" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  2025 Event
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