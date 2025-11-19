import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { ArrowRight, Calendar, Users, Rocket } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Bleed */}
      <section className="relative w-full min-h-screen flex items-center justify-start bg-primary overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/c29efb_3569a33fe098448794ac0564e59526b2~mv2.png?originWidth=1920&originHeight=1024"
            alt="Advanced mobility technology and innovation"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-darkgrayoverlay opacity-60"></div>
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 right-0 z-20 p-8">
          <div className="flex space-x-8">
            <Link to="/about" className="text-primary-foreground hover:text-accentcyan transition-colors font-paragraph text-base text-center">
              About
            </Link>
            <Link to="/2025-event" className="text-primary-foreground hover:text-accentcyan transition-colors font-paragraph text-base text-center">
              2025 Event
            </Link>
            <Link to="/get-involved" className="text-primary-foreground hover:text-accentcyan transition-colors font-paragraph text-base text-center">
              Get Involved
            </Link>
            <Link to="/team" className="text-primary-foreground hover:text-accentcyan transition-colors font-paragraph text-base text-center">
              Team
            </Link>
          </div>
        </nav>

        {/* Hero Content - Left Aligned */}
        <div className="relative z-10 max-w-[120rem] mx-auto px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="font-heading text-primary-foreground mb-6 text-left text-5xl lg:text-5xl">
              Ohio Air Mobility Exchange
            </h1>
            <p className="font-paragraph text-lg text-primary-foreground mb-8 leading-relaxed opacity-90">
              Connecting innovators, researchers, and industry leaders to shape the next generation of transportation technologies in Ohio and beyond.
            </p>
            <Link to="/2025-event">
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph text-base px-8 py-6 rounded-full">
                Explore 2025 Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* About OAMx Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl text-secondary-foreground mb-6">{"Advancing Mobility's Future"}</h2>

              <p className="font-paragraph text-lg text-secondary-foreground mb-8 leading-relaxed">
                Our mission is to foster collaboration between academia, industry, and government to accelerate the development and deployment of next-generation mobility solutions.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-paragraph">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_325173448ba34170b1fdf782eec77faf~mv2.png?originWidth=576&originHeight=576"
                alt="OAMx innovation and collaboration"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Key Features Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Driving Innovation Forward
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              From cutting-edge research to industry partnerships, OAMx serves as the catalyst for Ohio's transportation revolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">
                Annual Events
              </h3>
              <p className="font-paragraph text-base text-foreground leading-relaxed">
                Signature conferences bringing together the brightest minds in advanced mobility research and development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">
                Community Building
              </h3>
              <p className="font-paragraph text-base text-foreground leading-relaxed">
                Fostering connections between students, researchers, industry professionals, and policy makers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">
                Innovation Hub
              </h3>
              <p className="font-paragraph text-base text-foreground leading-relaxed">
                Accelerating the development of transformative transportation technologies and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 2025 Event Preview */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_d3744ac1c65d43f5adcc8cd3f24e9be1~mv2.png?originWidth=576&originHeight=576"
                alt="OAMx 2025 event preview"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
            <div>
              <h2 className="font-heading text-4xl text-primary-foreground mb-6">
                OAMx 2025: Convergence
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground mb-6 leading-relaxed opacity-90">
                Join us for our most ambitious event yet, where autonomous systems, urban air mobility, and smart infrastructure converge to shape tomorrow's transportation landscape.
              </p>
              <p className="font-paragraph text-lg text-primary-foreground mb-8 leading-relaxed opacity-90">
                Three days of cutting-edge presentations, hands-on workshops, and networking opportunities with industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/2025-event">
                  <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                    Event Details
                  </Button>
                </Link>
                <Link to="/registration">
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-paragraph">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="font-paragraph text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a student, researcher, industry professional, or policy maker, there's a place for you in the OAMx community.
          </p>
          <Link to="/get-involved">
            <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph text-base px-8 py-6 rounded-full">
              Get Involved Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
                <Link to="/about" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  About
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