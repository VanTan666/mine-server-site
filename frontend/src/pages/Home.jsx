import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Users, Server, Shield, Zap, ArrowRight, Copy } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Home = () => {
  const { toast } = useToast();

  const features = [
    {
      icon: Users,
      title: "Active Community",
      description: "Join hundreds of players in our thriving Minecraft community",
      color: "text-blue-400"
    },
    {
      icon: Server,
      title: "24/7 Uptime",
      description: "Our servers run around the clock with 99.9% uptime guarantee",
      color: "text-green-400"
    },
    {
      icon: Shield,
      title: "Anti-Cheat Protection",
      description: "Advanced protection systems ensure fair gameplay for everyone",
      color: "text-orange-400"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized servers with minimal lag for the best gaming experience",
      color: "text-purple-400"
    }
  ];

  const copyServerIP = () => {
    navigator.clipboard.writeText("play.azurecraft.com");
    toast({
      title: "Server IP Copied!",
      description: "play.azurecraft.com has been copied to your clipboard",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-slate-950 to-indigo-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">
              Welcome to AzureCraft
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Your Epic Minecraft
              <br />
              Adventure Awaits
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our thriving community of builders, explorers, and adventurers. Experience Minecraft like never before with custom gameplay, events, and an amazing community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center space-x-3 bg-slate-900/50 backdrop-blur-sm rounded-lg px-6 py-3 border border-blue-800/30">
                <span className="text-slate-400">Server IP:</span>
                <code className="text-blue-400 font-mono">play.azurecraft.com</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copyServerIP}
                  className="h-8 w-8 p-0 hover:bg-blue-900/30"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rules">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                  View Server Rules
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/wiki">
                <Button size="lg" variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-950/30 px-8 py-6 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-200">
                  Browse Wiki
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose AzureCraft?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experience the best Minecraft server with features designed for an amazing gameplay experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-slate-900/50 border-blue-800/30 hover:bg-slate-900/70 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 ${feature.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-950/20 to-indigo-950/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <div className="text-slate-400">Active Players</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">99.9%</div>
              <div className="text-slate-400">Server Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-400">24/7</div>
              <div className="text-slate-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join thousands of players who have already discovered the magic of AzureCraft Server.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donations">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                  Support the Server
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;