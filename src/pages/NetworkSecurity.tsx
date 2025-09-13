import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Network, 
  Shield, 
  Filter, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Lock,
  Globe,
  Monitor
} from "lucide-react";

const NetworkSecurity = () => {
  const features = [
    {
      icon: Lock,
      title: "Zero Trust Network Access (ZTNA)",
      description: "Implement true zero trust architecture with identity-based access controls, continuous verification, and least-privilege principles.",
      capabilities: [
        "Identity-based access control",
        "Continuous user verification", 
        "Least-privilege access",
        "Dynamic policy enforcement"
      ]
    },
    {
      icon: Filter,
      title: "Advanced Web Filtering",
      description: "Comprehensive web content filtering with real-time threat analysis, category blocking, and bandwidth management.",
      capabilities: [
        "Real-time URL categorization",
        "Malware & phishing protection",
        "Bandwidth optimization",
        "Custom policy creation"
      ]
    },
    {
      icon: Eye,
      title: "Traffic Analysis & Monitoring",
      description: "Deep packet inspection with AI-powered anomaly detection, providing complete visibility into network communications.",
      capabilities: [
        "Deep packet inspection",
        "Anomaly detection",
        "Traffic visualization",
        "Performance analytics"
      ]
    },
    {
      icon: Shield,
      title: "Threat Detection & Response",
      description: "Real-time threat detection with automated response capabilities and integration with threat intelligence feeds.",
      capabilities: [
        "Real-time threat detection",
        "Automated response actions",
        "Threat intelligence integration", 
        "Incident correlation"
      ]
    }
  ];

  const networkStats = [
    { value: "99.99%", label: "Network Uptime" },
    { value: "<50ms", label: "Latency Impact" },
    { value: "1M+", label: "Threats Blocked Daily" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Network className="w-4 h-4 text-accent mr-2" />
                <span className="text-sm text-accent font-medium">Network Security</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Zero Trust
                </span>
                <br />
                <span className="text-foreground">Network Protection</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Secure your network with ZTNA, advanced web filtering, and real-time threat detection. 
                Complete visibility and control over all network communications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/demo">
                  <Button size="lg" className="bg-gradient-accent hover-glow px-8 py-6 text-lg">
                    <Shield className="w-5 h-5 mr-2" />
                    Secure Network Now
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="cyber-border px-8 py-6 text-lg">
                  <Monitor className="w-5 h-5 mr-2" />
                  View Demo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {networkStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Visualization */}
            <div className="animate-slide-in-right">
              <Card className="cyber-border shadow-card bg-gradient-card">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Network Security Dashboard
                    </h3>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-success animate-glow-pulse mr-2"></div>
                      <span className="text-sm text-success">All Systems Protected</span>
                    </div>
                  </div>

                  {/* Network Diagram */}
                  <div className="relative">
                    <div className="grid grid-cols-3 gap-4 items-center">
                      {/* Internet */}
                      <div className="col-span-3 text-center">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Globe className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <span className="text-xs text-muted-foreground">Internet</span>
                      </div>

                      {/* Security Layer */}
                      <div className="col-span-3 flex justify-center items-center my-4">
                        <div className="flex-1 border-t border-accent opacity-50"></div>
                        <div className="px-4 py-2 bg-gradient-accent rounded-full mx-4">
                          <Shield className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div className="flex-1 border-t border-accent opacity-50"></div>
                      </div>

                      {/* Internal Network */}
                      <div className="text-center">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-1">
                          <Monitor className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xs text-foreground">Devices</span>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-1">
                          <Network className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xs text-foreground">Servers</span>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-1">
                          <Globe className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xs text-foreground">Cloud</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Threats Blocked Today</span>
                      <span className="text-accent font-semibold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Active Connections</span>
                      <span className="text-success font-semibold">156</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Response Time</span>
                      <span className="text-accent font-semibold">42ms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Network Security Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive protection for modern network architectures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="cyber-border hover-glow transition-smooth animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {feature.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground mb-6">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Network Visualization Interactive */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Real-Time Network Monitoring
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete visibility into your network traffic and security status
            </p>
          </div>

          <Card className="cyber-border shadow-card">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Traffic Overview */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Traffic Overview</h3>
                  <div className="space-y-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Bandwidth Usage</span>
                        <span className="text-sm text-accent">78%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Security Score</span>
                        <span className="text-sm text-success">95%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Threat Detection */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Threat Detection</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-success mr-3"></div>
                        <span className="text-sm text-foreground">Malware Blocked</span>
                      </div>
                      <span className="text-sm text-accent">247</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-success mr-3"></div>
                        <span className="text-sm text-foreground">Phishing Attempts</span>
                      </div>
                      <span className="text-sm text-accent">89</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-success mr-3"></div>
                        <span className="text-sm text-foreground">Suspicious IPs</span>
                      </div>
                      <span className="text-sm text-accent">12</span>
                    </div>
                  </div>
                </div>

                {/* Network Status */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Network Status</h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-gradient-accent/10 rounded-lg border border-accent/20">
                      <div className="text-2xl font-bold text-accent mb-1">99.99%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    
                    <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                      <div className="text-2xl font-bold text-success mb-1">42ms</div>
                      <div className="text-sm text-muted-foreground">Avg Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Enterprise-Grade Network Security
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8">
            Protect your network infrastructure with zero trust architecture 
            and real-time threat detection that scales with your business.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">&lt;1min</div>
              <div className="text-accent-foreground/80">Threat Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">Zero</div>
              <div className="text-accent-foreground/80">Network Breaches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-foreground mb-2">99.99%</div>
              <div className="text-accent-foreground/80">Network Uptime</div>
            </div>
          </div>
          
          <Link to="/demo">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-6 text-lg font-semibold shadow-card hover-glow"
            >
              Secure Your Network
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NetworkSecurity;