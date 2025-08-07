import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Heart, Crown, Star, Zap, Gift, ExternalLink, Shield, Users } from "lucide-react";

const Donations = () => {
  const donationTiers = [
    {
      name: "Supporter",
      price: "$5",
      color: "text-green-400",
      bgColor: "bg-green-950/30",
      borderColor: "border-green-500/30",
      icon: Heart,
      features: [
        "Supporter badge in chat",
        "Access to /hat command",
        "Priority support",
        "Supporter Discord role"
      ]
    },
    {
      name: "VIP",
      price: "$15",
      color: "text-blue-400",
      bgColor: "bg-blue-950/30",
      borderColor: "border-blue-500/30",
      icon: Star,
      popular: true,
      features: [
        "All Supporter benefits",
        "VIP badge and chat prefix",
        "Access to VIP world",
        "Extra home locations (10 total)",
        "/fly command in claimed areas",
        "VIP Discord role"
      ]
    },
    {
      name: "Premium",
      price: "$25",
      color: "text-purple-400",
      bgColor: "bg-purple-950/30",
      borderColor: "border-purple-500/30",
      icon: Crown,
      features: [
        "All VIP benefits",
        "Premium badge and chat prefix",
        "Access to Premium world",
        "Unlimited home locations",
        "/fly command everywhere",
        "Premium Discord role",
        "Monthly exclusive items"
      ]
    }
  ];

  const serverBenefits = [
    {
      icon: Shield,
      title: "Server Maintenance",
      description: "Keep our servers running 24/7 with high performance and security"
    },
    {
      icon: Zap,
      title: "Hardware Upgrades",
      description: "Invest in better hardware for lag-free gameplay experience"
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Fund special events, contests, and community activities"
    },
    {
      icon: Gift,
      title: "New Features",
      description: "Develop and implement new gameplay features and improvements"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-green-500/30 text-green-400 bg-green-950/30">
            Support the Server
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Help Keep AzureCraft Running
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Your donations help us maintain high-quality servers, develop new features, and create amazing experiences for our community. 
            Every contribution makes a difference!
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-blue-500/30 bg-blue-950/20">
          <Shield className="h-4 w-4 text-blue-400" />
          <AlertDescription className="text-slate-300">
            <strong className="text-blue-400">Important:</strong> All donations are voluntary and help support server costs. 
            Donations are non-refundable. Perks are subject to server rules and may be modified as needed.
          </AlertDescription>
        </Alert>

        {/* How Donations Help */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">How Your Donations Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serverBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-slate-900/50 border-blue-800/30 hover:bg-slate-900/70 transition-all duration-300 text-center">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-12 h-12 rounded-lg bg-blue-950/30 flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Donation Tiers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Support Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donationTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <Card key={index} className={`bg-slate-900/50 ${tier.borderColor} hover:bg-slate-900/70 transition-all duration-300 relative`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 hover:bg-blue-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 rounded-xl ${tier.bgColor} flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-8 h-8 ${tier.color}`} />
                    </div>
                    <CardTitle className="text-white text-xl">{tier.name}</CardTitle>
                    <div className={`text-3xl font-bold ${tier.color} mb-2`}>
                      {tier.price}
                      <span className="text-lg text-slate-400">/month</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-300">
                          <div className={`w-5 h-5 rounded-full ${tier.bgColor} flex items-center justify-center mr-3`}>
                            <div className={`w-2 h-2 rounded-full bg-current ${tier.color}`} />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full bg-gradient-to-r ${
                        tier.color.includes('green') ? 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' :
                        tier.color.includes('blue') ? 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' :
                        'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
                      } text-white`}
                    >
                      Choose {tier.name}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* One-time Donations */}
        <Card className="bg-slate-900/50 border-green-500/30 mb-8">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-3 rounded-lg bg-green-950/30">
                <Heart className="w-6 h-6 text-green-400" />
              </div>
              <CardTitle className="text-white text-xl">One-Time Donations</CardTitle>
            </div>
            <CardDescription className="text-slate-400">
              Prefer to make a one-time contribution? Every amount helps keep our servers running!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['$5', '$10', '$25', '$50'].map((amount) => (
                <Button key={amount} variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-950/30">
                  {amount}
                </Button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
              Make Custom Donation
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Payment Methods & FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/50 border-blue-800/30">
            <CardHeader>
              <CardTitle className="text-white">Payment Methods</CardTitle>
              <CardDescription className="text-slate-400">
                We accept various secure payment methods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-300">
                <li>• PayPal</li>
                <li>• Credit/Debit Cards (Visa, Mastercard, etc.)</li>
                <li>• Cryptocurrency (Bitcoin, Ethereum)</li>
                <li>• Bank Transfer</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-blue-800/30">
            <CardHeader>
              <CardTitle className="text-white">Donation FAQ</CardTitle>
              <CardDescription className="text-slate-400">
                Common questions about donations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Perks are activated within 24 hours</li>
                <li>• All donations are non-refundable</li>
                <li>• Monthly subscriptions can be cancelled anytime</li>
                <li>• Contact support if you don't receive your perks</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-green-950/20 to-blue-950/20 rounded-lg border border-green-500/20">
          <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Your support means everything to our community. Thanks to generous players like you, 
            we can continue providing an amazing Minecraft experience for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donations;