import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Shield, 
  Scan, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Database,
  Smartphone,
  Brain,
  AlertTriangle,
  FileSearch
} from "lucide-react";

const CloudSecurity = () => {
  const modules = [
    {
      id: "app-layer",
      title: "Application Layer Protection",
      icon: Globe,
      description: "Comprehensive web application and API security with real-time threat detection and automated response.",
      features: [
        {
          name: "Web Application Protection",
          description: "Advanced WAF with OWASP Top 10 protection, bot detection, and DDoS mitigation",
          capabilities: ["SQL injection protection", "XSS filtering", "Bot mitigation", "Rate limiting"]
        },
        {
          name: "API Security Module", 
          description: "Complete API security with authentication, authorization, and data validation",
          capabilities: ["API authentication", "Input validation", "Rate limiting", "Schema enforcement"]
        }
      ]
    },
    {
      id: "scanners",
      title: "Security Scanners",
      icon: Scan,
      description: "Automated vulnerability scanning across web applications, APIs, and mobile applications.",
      features: [
        {
          name: "Web Application Scanner",
          description: "Automated web application vulnerability assessment with OWASP compliance",
          capabilities: ["OWASP Top 10 scanning", "Business logic testing", "Authentication testing", "Session management"]
        },
        {
          name: "API Security Scanner",
          description: "Comprehensive API security testing and vulnerability assessment",
          capabilities: ["REST/GraphQL scanning", "Authentication bypass testing", "Data exposure detection", "Rate limit testing"]
        },
        {
          name: "Mobile App Scanner",
          description: "Static and dynamic analysis for iOS and Android applications",
          capabilities: ["SAST analysis", "DAST testing", "Binary analysis", "Runtime protection"]
        }
      ]
    },
    {
      id: "posture-management",
      title: "Posture Management",
      icon: Settings,
      description: "Continuous security posture assessment and management for cloud and AI infrastructure.",
      features: [
        {
          name: "Cloud Security Posture Management (CSPM)",
          description: "Continuous cloud infrastructure security monitoring and compliance",
          capabilities: ["Multi-cloud support", "Compliance monitoring", "Misconfiguration detection", "Automated remediation"]
        },
        {
          name: "AI Security Posture Management",
          description: "Specialized security for AI/ML pipelines and data processing workflows",
          capabilities: ["Model protection", "Data pipeline security", "AI bias detection", "ML governance"]
        }
      ]
    }
  ];

  const cloudProviders = [
    { name: "AWS", logo: "☁️", coverage: "Full Suite" },
    { name: "Azure", logo: "🔷", coverage: "Complete" },
    { name: "GCP", logo: "🟡", coverage: "All Services" },
    { name: "Multi-Cloud", logo: "🌐", coverage: "Unified" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Cloud className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm text-accent font-medium">Cloud Security</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Complete </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Cloud Security
              </span>
              <br />
              <span className="text-foreground">Suite</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Comprehensive cloud security across application layer, vulnerability scanners, 
              and posture management. Protect your entire cloud infrastructure with AI-powered insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/demo">
                <Button size="lg" className="bg-gradient-accent hover-glow px-8 py-6 text-lg">
                  Secure Cloud Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="cyber-border px-8 py-6 text-lg">
                View Architecture
              </Button>
            </div>

            {/* Cloud Provider Support */}
            <div className="grid md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-3xl mb-2">{provider.logo}</div>
                  <div className="text-sm text-foreground font-semibold">{provider.name}</div>
                  <div className="text-xs text-muted-foreground">{provider.coverage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Security Modules */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Three-Layer Cloud Security Architecture
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive protection across all cloud security dimensions
            </p>
          </div>

          <Tabs defaultValue="app-layer" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1 rounded-lg mb-12">
              {modules.map((module) => (
                <TabsTrigger 
                  key={module.id} 
                  value={module.id}
                  className="flex items-center space-x-2 data-[state=active]:bg-gradient-accent data-[state=active]:text-accent-foreground"
                >
                  <module.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{module.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {modules.map((module) => (
              <TabsContent key={module.id} value={module.id} className="space-y-8">
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <module.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{module.title}</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{module.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {module.features.map((feature, index) => (
                    <Card key={index} className="cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground mb-4">
                          {feature.name}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {feature.capabilities.map((capability, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                              <span className="text-foreground text-sm">{capability}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-card rounded-lg">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Status</span>
                            <div className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-success mr-2 animate-glow-pulse"></div>
                              <span className="text-success">Active</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Use Cases & Reports */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Real-World Use Cases
              </h2>
              
              <div className="space-y-6">
                <div className="bg-background/50 p-6 rounded-lg border-l-4 border-accent">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        API Vulnerability Discovery
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Automated scanning detected unauthenticated API endpoints exposing customer data. 
                        Immediate remediation prevented potential breach affecting 10,000+ users.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background/50 p-6 rounded-lg border-l-4 border-success">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Cloud Misconfiguration Prevention
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        CSPM identified S3 bucket with public read access containing sensitive documents. 
                        Automated remediation secured bucket within minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background/50 p-6 rounded-lg border-l-4 border-accent">
                  <div className="flex items-start">
                    <Brain className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        AI Model Security
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        AI Security Posture Management detected potential model poisoning attempt 
                        in ML pipeline, preventing compromised model deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Reports Dashboard */}
            <div className="animate-slide-in-right">
              <Card className="cyber-border shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <FileSearch className="w-5 h-5 mr-2" />
                    Security Reports Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Vulnerability Summary */}
                    <div className="bg-gradient-card p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Vulnerability Summary</h4>
                      <div className="grid grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-destructive">2</div>
                          <div className="text-xs text-muted-foreground">Critical</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-accent">5</div>
                          <div className="text-xs text-muted-foreground">High</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-muted-foreground">12</div>
                          <div className="text-xs text-muted-foreground">Medium</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-success">0</div>
                          <div className="text-xs text-muted-foreground">Fixed</div>
                        </div>
                      </div>
                    </div>

                    {/* Cloud Resources */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">Cloud Resources</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                          <div className="flex items-center">
                            <Database className="w-4 h-4 text-accent mr-3" />
                            <span className="text-sm text-foreground">Databases</span>
                          </div>
                          <span className="text-xs text-success">✓ Secured</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                          <div className="flex items-center">
                            <Globe className="w-4 h-4 text-accent mr-3" />
                            <span className="text-sm text-foreground">Web Apps</span>
                          </div>
                          <span className="text-xs text-success">✓ Protected</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                          <div className="flex items-center">
                            <Smartphone className="w-4 h-4 text-accent mr-3" />
                            <span className="text-sm text-foreground">Mobile Apps</span>
                          </div>
                          <span className="text-xs text-success">✓ Scanned</span>
                        </div>
                      </div>
                    </div>

                    {/* Compliance Status */}
                    <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Compliance Score</span>
                        <span className="text-lg font-bold text-success">94%</span>
                      </div>
                      <div className="mt-2 w-full bg-muted rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Why Choose Osto Cloud Security?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-12">
            Complete cloud protection with AI-powered scanning, posture management, 
            and real-time threat detection across your entire infrastructure.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">99.8%</div>
              <div className="text-accent-foreground/80">Vulnerability Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">&lt;5min</div>
              <div className="text-accent-foreground/80">Scan Completion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">Multi-Cloud</div>
              <div className="text-accent-foreground/80">Support</div>
            </div>
          </div>
          
          <Link to="/demo">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-6 text-lg font-semibold shadow-card hover-glow"
            >
              Secure Your Cloud Infrastructure
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CloudSecurity;