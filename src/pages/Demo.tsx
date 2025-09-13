import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Mail,
  Phone,
  Building,
  Target,
  Zap,
  FileCheck
} from "lucide-react";

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    employees: "",
    industry: "",
    phone: "",
    securityNeeds: "",
    timeline: "",
    interests: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted!",
      description: "Our security experts will contact you within 24 hours to schedule your personalized demo.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      employees: "",
      industry: "",
      phone: "",
      securityNeeds: "",
      timeline: "",
      interests: []
    });
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const securityAreas = [
    { id: "endpoint", label: "Endpoint Security", icon: Shield },
    { id: "network", label: "Network Security", icon: Target },
    { id: "cloud", label: "Cloud Security", icon: Zap },
    { id: "compliance", label: "Compliance & VAPT", icon: FileCheck }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "9-Minute Setup Demo",
      description: "See how we deploy enterprise security in minutes, not weeks"
    },
    {
      icon: Shield,
      title: "Live Threat Detection",
      description: "Watch our AI-powered system identify and block real threats"
    },
    {
      icon: Users,
      title: "Personalized Assessment",
      description: "Get custom recommendations for your startup's security needs"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Calendar className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm text-accent font-medium">Book Your Demo</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">See </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                9-Minute Security
              </span>
              <br />
              <span className="text-foreground">in Action</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Get a live demonstration of how Osto.one deploys enterprise-grade cybersecurity 
              for your startup in just 9 minutes. No sales pitch, just results.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="cyber-border shadow-card animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Request Your Security Demo
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form and our security experts will contact you within 24 hours 
                  to schedule your personalized demonstration.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                        placeholder="John Doe"
                        className="cyber-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        placeholder="john@company.com"
                        className="cyber-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input 
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                        placeholder="Acme Startup Inc."
                        className="cyber-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, role: value}))}>
                        <SelectTrigger className="cyber-border">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="founder">Founder/CEO</SelectItem>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="ciso">CISO</SelectItem>
                          <SelectItem value="it-manager">IT Manager</SelectItem>
                          <SelectItem value="security-engineer">Security Engineer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="employees">Company Size</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, employees: value}))}>
                        <SelectTrigger className="cyber-border">
                          <SelectValue placeholder="Number of employees" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-100">51-100</SelectItem>
                          <SelectItem value="101-500">101-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, industry: value}))}>
                        <SelectTrigger className="cyber-border">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fintech">Fintech</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="blockchain">Blockchain/Web3</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                      placeholder="+1 (555) 123-4567"
                      className="cyber-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Security Areas of Interest</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {securityAreas.map((area) => (
                        <div key={area.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={area.id}
                            onCheckedChange={(checked) => handleInterestChange(area.label, checked as boolean)}
                          />
                          <Label htmlFor={area.id} className="text-sm flex items-center">
                            <area.icon className="w-4 h-4 mr-2 text-accent" />
                            {area.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Implementation Timeline</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
                      <SelectTrigger className="cyber-border">
                        <SelectValue placeholder="When do you need security?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="securityNeeds">Current Security Challenges</Label>
                    <Textarea 
                      id="securityNeeds"
                      value={formData.securityNeeds}
                      onChange={(e) => setFormData(prev => ({...prev, securityNeeds: e.target.value}))}
                      placeholder="Tell us about your current security challenges, compliance requirements, or specific concerns..."
                      className="cyber-border"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-accent hover-glow text-lg py-6">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule My Security Demo
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    By submitting this form, you agree to receive communications from Osto.one. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Info Sidebar */}
            <div className="space-y-8 animate-slide-in-right">
              {/* What to Expect */}
              <Card className="cyber-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-success" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-bold text-accent-foreground">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Demo Scheduling</h4>
                      <p className="text-sm text-muted-foreground">We'll contact you within 24 hours to schedule your demo at a convenient time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-bold text-accent-foreground">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Live Demonstration</h4>
                      <p className="text-sm text-muted-foreground">30-minute live demo showing our 9-minute deployment and security features.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-bold text-accent-foreground">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Custom Assessment</h4>
                      <p className="text-sm text-muted-foreground">Personalized security recommendations based on your startup's specific needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-bold text-accent-foreground">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Free Trial Access</h4>
                      <p className="text-sm text-muted-foreground">Get access to our sandbox environment to test the platform yourself.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="cyber-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Prefer to Talk Directly?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <p className="font-semibold text-foreground">Call us directly</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <p className="font-semibold text-foreground">Email our experts</p>
                      <p className="text-sm text-muted-foreground">demo@osto.one</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <p className="font-semibold text-foreground">Visit our office</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="cyber-border shadow-card bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-4">
                    Trusted by 500+ Startups
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime SLA</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">Zero</div>
                      <div className="text-xs text-muted-foreground">Breaches</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">9min</div>
                      <div className="text-xs text-muted-foreground">Setup Time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;