import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Zap, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cybersecurity Protection"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-cyber-grid" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Zap className="w-4 h-4 text-accent mr-2" />
                <span className="text-sm text-accent font-medium">
                  Go Live in 9 Minutes
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-foreground">Enterprise-Grade </span>
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Cybersecurity
                </span>
                <br />
                <span className="text-foreground">for </span>
                <span className="text-accent">Startups</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete cybersecurity protection that used to take weeks now deployed in 9 minutes. 
                Endpoint, Network, and Cloud security with AI-powered automation.
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {[
                  "9-minute deployment vs weeks of setup",
                  "End-to-end protection for all attack surfaces",
                  "VAPT-as-a-Service & Compliance automation",
                  "AI-powered threat detection & response"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center animate-slide-in-right" style={{animationDelay: `${index * 0.2}s`}}>
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo">
                  <Button 
                    size="lg" 
                    className="bg-gradient-accent hover-glow transition-smooth shadow-cyber px-8 py-6 text-lg font-semibold"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Get Protected Now
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="cyber-border px-8 py-6 text-lg font-semibold transition-smooth"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Trusted by innovative startups</p>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-accent">99.9%</span>
                    <span className="text-sm text-muted-foreground ml-2">Uptime SLA</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-accent">&lt;1min</span>
                    <span className="text-sm text-muted-foreground ml-2">Response Time</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-accent">SOC 2</span>
                    <span className="text-sm text-muted-foreground ml-2">Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative animate-fade-in" style={{animationDelay: "0.3s"}}>
              {/* Floating Security Icons */}
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center animate-glow-pulse">
                  <Shield className="w-10 h-10 text-accent-foreground" />
                </div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-glow-pulse" style={{animationDelay: "1s"}}>
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Main Security Dashboard Mockup */}
                <div className="bg-gradient-card p-8 rounded-2xl shadow-card cyber-border">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">Security Dashboard</h3>
                      <div className="w-3 h-3 rounded-full bg-success animate-glow-pulse"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-accent">99.9%</div>
                        <div className="text-sm text-muted-foreground">Protection Rate</div>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-success">0</div>
                        <div className="text-sm text-muted-foreground">Active Threats</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Endpoint Security</span>
                        <span className="text-sm text-success">✓ Protected</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Network Security</span>
                        <span className="text-sm text-success">✓ Protected</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Cloud Security</span>
                        <span className="text-sm text-success">✓ Protected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;