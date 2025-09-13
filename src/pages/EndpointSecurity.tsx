import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Monitor, 
  FileX, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  AlertTriangle,
  Smartphone,
  Laptop,
  Server
} from "lucide-react";

const EndpointSecurity = () => {
  const features = [
    {
      icon: Shield,
      title: "Next-Gen Antimalware Engine",
      description: "AI-powered threat detection that identifies and blocks zero-day attacks, ransomware, and advanced persistent threats in real-time.",
      benefits: [
        "99.9% threat detection accuracy",
        "Zero-day exploit protection", 
        "Behavioral analysis engine",
        "Cloud-based threat intelligence"
      ]
    },
    {
      icon: Monitor,
      title: "Device Control",
      description: "Complete control over USB devices, external storage, and peripheral connections to prevent data exfiltration and malware spread.",
      benefits: [
        "USB device whitelisting",
        "Removable media encryption",
        "Device usage monitoring",
        "Automatic threat quarantine"
      ]
    },
    {
      icon: FileX,
      title: "Application Control",
      description: "Whitelist and blacklist applications, control software installations, and prevent unauthorized program execution.",
      benefits: [
        "Application whitelisting",
        "Installation blocking",
        "Process monitoring",
        "Privilege escalation protection"
      ]
    },
    {
      icon: Lock,
      title: "Data Leakage Prevention",
      description: "Advanced DLP with PII detection, file encryption, and policy-based data protection across all endpoints.",
      benefits: [
        "PII pattern recognition",
        "File upload blocking", 
        "Email attachment scanning",
        "Policy enforcement automation"
      ]
    }
  ];

  const useCases = [
    {
      title: "File Upload Blocking",
      description: "Automatically detects and blocks sensitive data uploads to unauthorized platforms",
      example: "Employee tries to upload customer database to personal cloud storage → Blocked & Logged"
    },
    {
      title: "PII Detection",
      description: "Scans documents and communications for personally identifiable information",
      example: "Document containing SSNs detected in email → Encrypted & Flagged for review"
    },
    {
      title: "Policy Enforcement",
      description: "Enforces security policies across all endpoints with real-time monitoring",
      example: "Unauthorized software installation attempt → Blocked & IT team notified"
    }
  ];

  const deviceTypes = [
    { icon: Laptop, name: "Laptops", coverage: "Windows, macOS, Linux" },
    { icon: Smartphone, name: "Mobile Devices", coverage: "iOS, Android" },
    { icon: Server, name: "Servers", coverage: "Windows Server, Linux" },
    { icon: Monitor, name: "Workstations", coverage: "All desktop systems" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Shield className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm text-accent font-medium">Endpoint Security</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Complete </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Endpoint Protection
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Protect every device in your organization with next-generation antimalware, 
              device control, application management, and data leakage prevention.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button size="lg" className="bg-gradient-accent hover-glow px-8 py-6 text-lg">
                  Get Protected Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="cyber-border px-8 py-6 text-lg">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Endpoint Protection Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to secure endpoints across your organization
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`animate-slide-in-right ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="cyber-border shadow-card">
                    <CardContent className="p-8">
                      <div className="bg-gradient-card p-6 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-muted-foreground">Security Status</span>
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-success mr-2 animate-glow-pulse"></div>
                            <span className="text-sm text-success">Protected</span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-foreground">Threat Detection</span>
                            <span className="text-accent font-semibold">99.9%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-foreground">Response Time</span>
                            <span className="text-accent font-semibold">&lt;1s</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-foreground">Active Policies</span>
                            <span className="text-success font-semibold">24/7</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Real-World Protection Scenarios
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our endpoint security prevents actual threats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <AlertTriangle className="w-5 h-5 text-accent mr-2" />
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {useCase.description}
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-accent">
                    <p className="text-sm text-foreground font-mono">
                      {useCase.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Device Coverage */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Universal Device Protection
            </h2>
            <p className="text-xl text-muted-foreground">
              Secure every endpoint across your entire technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deviceTypes.map((device, index) => (
              <Card key={index} className="text-center cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <device.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {device.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {device.coverage}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Why Choose Osto Endpoint Security?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">99.9%</div>
              <div className="text-accent-foreground/80">Risk Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">24/7</div>
              <div className="text-accent-foreground/80">Real-time Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">SOC 2</div>
              <div className="text-accent-foreground/80">Compliance Support</div>
            </div>
          </div>
          
          <Link to="/demo">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-6 text-lg font-semibold shadow-card hover-glow"
            >
              Secure Your Endpoints Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EndpointSecurity;