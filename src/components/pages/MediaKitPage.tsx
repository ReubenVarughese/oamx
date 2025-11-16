import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download, FileText, Image as ImageIcon, Video, Mail } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { MediaResources } from '@/entities';

export default function MediaKitPage() {
  const [mediaResources, setMediaResources] = useState<MediaResources[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediaResources = async () => {
      try {
        const { items } = await BaseCrudService.getAll<MediaResources>('mediaresources');
        setMediaResources(items);
      } catch (error) {
        console.error('Error fetching media resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaResources();
  }, []);

  const getResourceIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'image':
      case 'photo':
        return <ImageIcon className="h-6 w-6" />;
      case 'video':
        return <Video className="h-6 w-6" />;
      case 'document':
      case 'pdf':
        return <FileText className="h-6 w-6" />;
      default:
        return <Download className="h-6 w-6" />;
    }
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return 'N/A';
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
                Press & Media Kit
              </h1>
              <p className="font-paragraph text-xl text-primary-foreground mb-8 leading-relaxed opacity-90">
                Access high-quality media resources, press materials, and brand assets for coverage of OAMx events and initiatives. Everything you need to tell our story accurately and compellingly.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://static.wixstatic.com/media/c29efb_6bbe9a533aab4c7ea19693451bf50732~mv2.png?originWidth=576&originHeight=384"
                alt="Press and media resources for OAMx"
                className="w-full h-96 object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-foreground/10 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-secondary-foreground mb-2">
                  Fact Sheet
                </h3>
                <p className="font-paragraph text-sm text-secondary-foreground mb-4">
                  Key facts and figures about OAMx
                </p>
                <Button size="sm" className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="border-foreground/10 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-secondary-foreground mb-2">
                  Logo Package
                </h3>
                <p className="font-paragraph text-sm text-secondary-foreground mb-4">
                  High-resolution logos and brand assets
                </p>
                <Button size="sm" className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="border-foreground/10 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-secondary-foreground mb-2">
                  Video Assets
                </h3>
                <p className="font-paragraph text-sm text-secondary-foreground mb-4">
                  Event highlights and promotional videos
                </p>
                <Button size="sm" className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  View Gallery
                </Button>
              </CardContent>
            </Card>

            <Card className="border-foreground/10 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accentcyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-secondary-foreground mb-2">
                  Media Contact
                </h3>
                <p className="font-paragraph text-sm text-secondary-foreground mb-4">
                  Get in touch with our media team
                </p>
                <a href="mailto:media@oamx.org">
                  <Button size="sm" className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                    Contact
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About OAMx */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-4xl text-foreground mb-6">
                About OAMx
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-3">Mission</h3>
                  <p className="font-paragraph text-foreground leading-relaxed">
                    To accelerate the development and deployment of advanced mobility technologies by fostering collaboration between academia, industry, and government, positioning Ohio as a global leader in transportation innovation.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-3">Background</h3>
                  <p className="font-paragraph text-foreground leading-relaxed">
                    The Ohio Advanced Mobility Exchange (OAMx) evolved from the Ohio UAM Symposium, expanding its scope to encompass all forms of advanced transportation technologies including autonomous systems, urban air mobility, smart infrastructure, and sustainable mobility solutions.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl text-foreground mb-3">Key Facts</h3>
                  <ul className="space-y-2 font-paragraph text-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Founded: 2023 (evolved from Ohio UAM Symposium)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Location: Columbus, Ohio
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Annual Event Attendance: 500+ participants
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Partner Institutions: 20+ universities and organizations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-foreground/10">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">
                    Media Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-paragraph text-sm text-foreground font-semibold">General Media Inquiries</p>
                    <p className="font-paragraph text-foreground">media@oamx.org</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-foreground font-semibold">Event Coverage</p>
                    <p className="font-paragraph text-foreground">events@oamx.org</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-foreground font-semibold">Partnership Inquiries</p>
                    <p className="font-paragraph text-foreground">partnerships@oamx.org</p>
                  </div>
                  <div>
                    <p className="font-paragraph text-sm text-foreground font-semibold">Phone</p>
                    <p className="font-paragraph text-foreground">(614) 555-OAMX</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-foreground/10">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">
                    Usage Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-paragraph text-foreground text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Please use official OAMx logos and brand assets
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Credit photos and videos appropriately
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Contact us for interview requests
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accentcyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Share coverage with our team
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
              Media Resources
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
              High-quality assets for your coverage of OAMx events and initiatives.
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-accentcyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="font-paragraph text-secondary-foreground">Loading media resources...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaResources.map((resource) => (
                <Card key={resource._id} className="border-foreground/10">
                  <CardHeader>
                    {resource.previewImage && (
                      <Image
                        src={resource.previewImage}
                        alt={resource.resourceName || 'Media resource'}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        width={400}
                      />
                    )}
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-accentcyan rounded-full flex items-center justify-center mr-3">
                        {getResourceIcon(resource.resourceType || '')}
                      </div>
                      <div>
                        <CardTitle className="font-heading text-lg text-secondary-foreground">
                          {resource.resourceName}
                        </CardTitle>
                        <p className="font-paragraph text-sm text-accentcyan">
                          {resource.resourceType}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-paragraph text-secondary-foreground text-sm leading-relaxed mb-4">
                      {resource.resourceDescription}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-paragraph text-xs text-secondary-foreground opacity-70">
                        Published: {formatDate(resource.publicationDate)}
                      </span>
                    </div>
                    {resource.downloadUrl ? (
                      <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </a>
                    ) : (
                      <Button disabled className="w-full font-paragraph">
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!loading && mediaResources.length === 0 && (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-secondary-foreground mb-6">
                Media resources are being prepared. Check back soon or contact our media team for specific requests.
              </p>
              <a href="mailto:media@oamx.org">
                <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                  Contact Media Team
                </Button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Recent Press Releases
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest announcements and news from OAMx.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="border-foreground/10">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-xl text-foreground">
                    OAMx 2025 Conference Announces "Convergence" Theme
                  </h3>
                  <span className="font-paragraph text-sm text-foreground opacity-70 whitespace-nowrap ml-4">
                    November 2024
                  </span>
                </div>
                <p className="font-paragraph text-foreground leading-relaxed mb-4">
                  Ohio Advanced Mobility Exchange announces its 2025 conference theme focusing on the convergence of autonomous systems, urban air mobility, and smart infrastructure technologies.
                </p>
                <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-paragraph">
                  Read Full Release
                </Button>
              </CardContent>
            </Card>

            <Card className="border-foreground/10">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-xl text-foreground">
                    OAMx Launches Mentorship Program for 2025
                  </h3>
                  <span className="font-paragraph text-sm text-foreground opacity-70 whitespace-nowrap ml-4">
                    October 2024
                  </span>
                </div>
                <p className="font-paragraph text-foreground leading-relaxed mb-4">
                  New mentorship initiative will connect students and early-career professionals with industry leaders in advanced mobility sectors.
                </p>
                <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-paragraph">
                  Read Full Release
                </Button>
              </CardContent>
            </Card>

            <Card className="border-foreground/10">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-xl text-foreground">
                    Ohio UAM Symposium Evolves into OAMx
                  </h3>
                  <span className="font-paragraph text-sm text-foreground opacity-70 whitespace-nowrap ml-4">
                    September 2024
                  </span>
                </div>
                <p className="font-paragraph text-foreground leading-relaxed mb-4">
                  Expanding beyond urban air mobility to encompass all forms of advanced transportation technologies, the organization rebrands as Ohio Advanced Mobility Exchange.
                </p>
                <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-paragraph">
                  Read Full Release
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-heading text-4xl text-primary-foreground mb-6">
            Need Additional Resources?
          </h2>
          <p className="font-paragraph text-lg text-primary-foreground mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Our media team is here to help with interview requests, custom assets, and additional information for your coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:media@oamx.org">
              <Button className="bg-accentcyan text-primary hover:bg-accentcyan/90 font-paragraph">
                <Mail className="h-4 w-4 mr-2" />
                Contact Media Team
              </Button>
            </a>
            <Link to="/2025-event">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-paragraph">
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
                <Link to="/get-involved" className="block font-paragraph text-sm text-primary-foreground opacity-80 hover:text-accentcyan transition-colors">
                  Get Involved
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