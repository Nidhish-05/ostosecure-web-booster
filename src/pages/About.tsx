import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  Target, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder", 
      expertise: "Former CISO at Fortune 500, 15+ years in cybersecurity",
      image: "👩‍💼",
      linkedin: "#"
    },
    {
      name: "Michael Rodriguez", 
      role: "CTO & Co-Founder",
      expertise: "Ex-Google Security Engineer, AI/ML Security Expert",
      image: "👨‍💻",
      linkedin: "#"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      expertise: "PhD in Cybersecurity, Published researcher in AI security",
      image: "👩‍🔬", 
      linkedin: "#"
    },
    {
      name: "James Park",
      role: "VP of Engineering",
      expertise: "Former startup CTO, Cloud security architecture specialist",
      image: "👨‍🔧",
      linkedin: "#"
    }
  ];

  const companyStats = [
    { value: "500+", label: "Startups Protected", icon: Shield },
    { value: "1M+", label: "Threats Blocked", icon: Target },
    { value: "99.9%", label: "Uptime SLA", icon: CheckCircle },
    { value: "24/7", label: "Expert Support", icon: Users }
  ];

  const milestones = [
    { year: "2023", event: "Company Founded", description: "Launched with mission to democratize cybersecurity for startups" },
    { year: "2023", event: "First 100 Customers", description: "Achieved product-market fit with rapid customer growth" },
    { year: "2024", event: "Series A Funding", description: "Raised $10M to accelerate product development" }, 
    { year: "2024", event: "AI Security Platform", description: "Launched industry-first AI-powered security automation" },
    { year: "2024", event: "500+ Customers", description: "Became the fastest-growing startup security platform" }
  ];

  const values = [
    {
      title: "Security First",
      description: "We believe every startup deserves enterprise-grade security from day one",
      icon: Shield
    },
    {
      title: "Startup Focused", 
      description: "Built by startup founders, for startup founders who understand the unique challenges",
      icon: Target
    },
    {
      title: "Innovation Driven",
      description: "Constantly pushing boundaries with AI-powered security and automation",
      icon: Award
    },
    {
      title: "Customer Obsessed",
      description: "Your success is our success. We're committed to making you more secure",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Users className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm text-accent font-medium">About Osto.one</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Empowering Startups with </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Enterprise-Grade Security
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            We're on a mission to democratize cybersecurity for startups. Founded by security experts 
            who understand the unique challenges of scaling secure businesses in today's threat landscape.
          </p>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every startup deserves the same level of cybersecurity protection as Fortune 500 companies. 
                But traditional security solutions are too complex, expensive, and time-consuming for fast-growing businesses.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                That's why we built Osto.one - to provide enterprise-grade cybersecurity that deploys in 9 minutes 
                instead of 9 weeks, giving startups the protection they need without slowing them down.
              </p>
              
              <div className="space-y-4">
                {[
                  "Make enterprise security accessible to all startups",
                  "Eliminate weeks of security setup with AI automation", 
                  "Provide 24/7 protection without requiring security experts",
                  "Enable startups to focus on growth, not security complexity"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="cyber-border shadow-card animate-slide-in-right">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  Company Impact
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">9 minutes</div>
                    <div className="text-sm text-muted-foreground">vs 9 weeks traditional setup</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-gradient-card p-4 rounded-lg">
                      <div className="text-xl font-bold text-accent mb-1">$2M+</div>
                      <div className="text-xs text-muted-foreground">Security costs saved</div>
                    </div>
                    <div className="bg-gradient-card p-4 rounded-lg">
                      <div className="text-xl font-bold text-success mb-1">Zero</div>
                      <div className="text-xs text-muted-foreground">Customer breaches</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Customer Satisfaction</span>
                      <span className="text-success">98%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Platform Reliability</span>
                      <span className="text-success">99.99%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Response Time</span>
                      <span className="text-accent">&lt;1min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Security Experts
            </h2>
            <p className="text-xl text-muted-foreground">
              World-class security professionals with decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-xl text-foreground">
                    {member.name}
                  </CardTitle>
                  <p className="text-accent font-medium">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.expertise}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                      <value.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to secure startups worldwide
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <span className="text-sm font-bold text-accent-foreground">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to secure your startup? Let's talk about your security needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center cyber-border hover-glow transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get in touch with our security experts
                </p>
                <Button variant="ghost" className="text-accent">
                  security@osto.one
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center cyber-border hover-glow transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Call Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our team
                </p>
                <Button variant="ghost" className="text-accent">
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center cyber-border hover-glow transition-smooth">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Visit Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our headquarters
                </p>
                <Button variant="ghost" className="text-accent text-sm">
                  San Francisco, CA
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Join the Security Revolution
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8">
            Ready to give your startup enterprise-grade security? 
            Let's build something secure together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-card hover-glow"
              >
                Get Protected Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;