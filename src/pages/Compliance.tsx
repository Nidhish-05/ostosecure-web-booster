import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  FileCheck, 
  Shield, 
  Search, 
  CheckCircle, 
  ArrowRight,
  AlertTriangle,
  Clock,
  Users,
  Award,
  FileText,
  Settings
} from "lucide-react";

const Compliance = () => {
  const services = [
    {
      icon: FileText,
      title: "Security Questionnaire Automation",
      description: "Automated response generation for security questionnaires with AI-powered accuracy and consistency.",
      features: [
        "AI-powered response generation",
        "100+ framework templates", 
        "Automated evidence collection",
        "Response consistency validation"
      ],
      benefits: "Reduce questionnaire completion time from weeks to hours"
    },
    {
      icon: Search,
      title: "VAPT-as-a-Service",
      description: "Comprehensive Vulnerability Assessment and Penetration Testing with expert analysis and detailed reporting.",
      features: [
        "Automated vulnerability scanning",
        "Manual penetration testing",
        "Expert security analysis",
        "Detailed remediation guidance"
      ],
      benefits: "Complete security assessment without hiring expensive consultants"
    },
    {
      icon: Award,
      title: "Compliance Framework Support",
      description: "End-to-end compliance support for major regulatory frameworks including SOC 2, ISO 27001, and more.",
      features: [
        "SOC 2 Type I & II preparation",
        "ISO 27001 implementation",
        "GDPR compliance guidance", 
        "Custom framework mapping"
      ],
      benefits: "Achieve compliance certification 3x faster"
    }
  ];

  const frameworks = [
    { name: "SOC 2", icon: "🛡️", status: "Supported", coverage: "Type I & II" },
    { name: "ISO 27001", icon: "🏆", status: "Supported", coverage: "Full Implementation" },
    { name: "GDPR", icon: "🇪🇺", status: "Supported", coverage: "Data Protection" },
    { name: "HIPAA", icon: "🏥", status: "Supported", coverage: "Healthcare" },
    { name: "PCI DSS", icon: "💳", status: "Supported", coverage: "Payment Security" },
    { name: "NIST", icon: "🔒", status: "Supported", coverage: "Cybersecurity Framework" }
  ];

  const vaptProcess = [
    {
      step: "1",
      title: "Scoping & Planning",
      description: "Define assessment scope and create customized testing plan",
      duration: "1-2 days"
    },
    {
      step: "2", 
      title: "Automated Scanning",
      description: "Comprehensive automated vulnerability discovery and analysis",
      duration: "2-3 days"
    },
    {
      step: "3",
      title: "Manual Testing", 
      description: "Expert penetration testing and validation of findings",
      duration: "3-5 days"
    },
    {
      step: "4",
      title: "Reporting & Remediation",
      description: "Detailed reports with prioritized remediation guidance",
      duration: "2-3 days"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <FileCheck className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm text-accent font-medium">Compliance & VAPT</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Compliance
              </span>
              <span className="text-foreground"> & </span>
              <br />
              <span className="text-foreground">Security Testing</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Automated compliance support, security questionnaire responses, and comprehensive 
              VAPT services. Get certified faster and stay secure with expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/demo">
                <Button size="lg" className="bg-gradient-accent hover-glow px-8 py-6 text-lg">
                  Start Compliance Journey
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="cyber-border px-8 py-6 text-lg">
                Schedule VAPT Assessment
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-fade-in">
                <div className="text-3xl font-bold text-accent mb-2">3x</div>
                <div className="text-sm text-muted-foreground">Faster Compliance</div>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: "0.1s"}}>
                <div className="text-3xl font-bold text-accent mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Time Reduction</div>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: "0.2s"}}>
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Frameworks</div>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: "0.3s"}}>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Compliance & Security Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to achieve and maintain compliance
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-card p-4 rounded-lg border-l-4 border-accent">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-accent mr-3" />
                      <span className="text-foreground font-semibold">{service.benefits}</span>
                    </div>
                  </div>
                </div>

                <Card className={`cyber-border shadow-card animate-slide-in-right ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Service Dashboard
                      </h4>
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-success animate-glow-pulse mr-2"></div>
                        <span className="text-sm text-success">Active & Monitoring</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-card p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Completion Rate</span>
                          <span className="text-sm text-accent">94%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '94%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Active Projects</span>
                          <span className="text-accent">12</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Completed Assessments</span>
                          <span className="text-success">156</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Avg. Response Time</span>
                          <span className="text-accent">2.3 hrs</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Supported Compliance Frameworks
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert support for major regulatory and security frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <Card key={index} className="text-center cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{framework.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {framework.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {framework.coverage}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 border border-success/20">
                    <CheckCircle className="w-3 h-3 text-success mr-2" />
                    <span className="text-xs text-success">{framework.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VAPT Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              VAPT Assessment Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive security testing with expert analysis and actionable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vaptProcess.map((step, index) => (
              <Card key={index} className="cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted/50">
                    <Clock className="w-3 h-3 text-accent mr-2" />
                    <span className="text-xs text-foreground">{step.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Security Assessment Form */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Quick Security Assessment
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a preliminary security evaluation and compliance readiness score
            </p>
          </div>

          <Card className="cyber-border shadow-card">
            <CardHeader>
              <CardTitle className="text-center text-foreground">
                Security Questionnaire Sample
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Your company name"
                    className="cyber-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input 
                    id="industry" 
                    placeholder="e.g., Fintech, Healthcare"
                    className="cyber-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="employees">Number of Employees</Label>
                <Input 
                  id="employees" 
                  placeholder="e.g., 50-100"
                  className="cyber-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="frameworks">Target Compliance Frameworks</Label>
                <Textarea 
                  id="frameworks"
                  placeholder="e.g., SOC 2, ISO 27001, GDPR..."
                  className="cyber-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenges">Current Security Challenges</Label>
                <Textarea 
                  id="challenges"
                  placeholder="Describe your main security concerns and compliance goals..."
                  className="cyber-border"
                />
              </div>

              <Button className="w-full bg-gradient-accent hover-glow text-lg py-6">
                <Shield className="w-5 h-5 mr-2" />
                Get Your Security Assessment
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                This form demonstrates our automated questionnaire system. 
                Real assessments include 100+ detailed security questions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Ready to Achieve Compliance?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-12">
            Let our experts guide you through compliance requirements and security assessments. 
            Get certified 3x faster with automated processes and expert support.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">90%</div>
              <div className="text-accent-foreground/80">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">100+</div>
              <div className="text-accent-foreground/80">Certified Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">24/7</div>
              <div className="text-accent-foreground/80">Expert Support</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-card hover-glow"
              >
                Start Compliance Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10"
            >
              Schedule VAPT Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;