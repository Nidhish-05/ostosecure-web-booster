import HeroSection from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Network, 
  Cloud, 
  FileCheck, 
  Clock, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Endpoint Security",
      description: "Next-gen antimalware, device control, and data leakage prevention for all endpoints.",
      link: "/endpoint-security"
    },
    {
      icon: Network,
      title: "Network Security", 
      description: "Zero Trust Network Access (ZTNA) and web filtering with real-time threat detection.",
      link: "/network-security"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Complete cloud protection with CSPM, app security, and vulnerability scanning.",
      link: "/cloud-security"
    },
    {
      icon: FileCheck,
      title: "Compliance & VAPT",
      description: "Automated compliance support and vulnerability assessment as a service.",
      link: "/compliance"
    }
  ];

  const stats = [
    { value: "9 min", label: "Deployment Time" },
    { value: "99.9%", label: "Threat Detection Rate" },
    { value: "100+", label: "Startups Protected" },
    { value: "24/7", label: "Monitoring" }
  ];

  const testimonials = [
    {
      quote: "Osto.one transformed our security posture in minutes, not months. Finally, enterprise-grade security that actually works for startups.",
      author: "Sarah Chen",
      role: "CTO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "The 9-minute deployment promise seemed too good to be true, but they delivered. Our investors are impressed with our security compliance.",
      author: "Mike Rodriguez",
      role: "Founder, CloudFlow",
      rating: 5
    },
    {
      quote: "Best security decision we've made. The AI-powered automation saves us hours of manual work every week.",
      author: "Emily Watson",
      role: "Head of Security, DataVault",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Cybersecurity Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything your startup needs to stay secure, from endpoints to cloud infrastructure.
              Deploy in 9 minutes and get enterprise-grade protection immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <Link to={feature.link}>
                    <Button variant="ghost" className="w-full justify-between group">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Startups Choose Osto.one
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "9-Minute Deployment",
                    description: "What used to take weeks of security setup now happens in 9 minutes. Get protected instantly."
                  },
                  {
                    icon: Zap,
                    title: "AI-Powered Automation", 
                    description: "Our AI handles threat detection, response, and compliance automatically, so your team can focus on building."
                  },
                  {
                    icon: Users,
                    title: "Startup-Focused",
                    description: "Built specifically for startups. No enterprise bloat, just the security you actually need."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-card p-8 rounded-2xl shadow-card animate-slide-in-right">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Security Checklist ✓
              </h3>
              <div className="space-y-4">
                {[
                  "Endpoint protection deployed",
                  "Network security configured", 
                  "Cloud infrastructure secured",
                  "Compliance frameworks activated",
                  "VAPT assessment scheduled",
                  "24/7 monitoring enabled",
                  "Incident response ready",
                  "Security team trained"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Trusted by Innovation Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of startups that trust Osto.one to keep them secure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Ready to Secure Your Startup?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8">
            Join the revolution in startup cybersecurity. Get enterprise-grade protection 
            deployed in 9 minutes, not 9 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-card hover-glow transition-smooth"
              >
                <Shield className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 transition-smooth"
            >
              <Clock className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;