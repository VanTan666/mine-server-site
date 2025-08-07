import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Shield, AlertTriangle, Users, MessageCircle, Building, Sword } from "lucide-react";

const Rules = () => {
  const ruleCategories = [
    {
      icon: Shield,
      title: "General Conduct",
      color: "text-blue-400",
      bgColor: "bg-blue-950/30",
      rules: [
        {
          rule: "Don't cheat",
          description: "No use of hacks, exploits, or unauthorized modifications that give unfair advantages."
        },
        {
          rule: "Respect all players",
          description: "Treat everyone with kindness and respect, regardless of their skill level or background."
        },
        {
          rule: "No harassment or bullying",
          description: "Any form of harassment, bullying, or discriminatory behavior is strictly prohibited."
        }
      ]
    },
    {
      icon: MessageCircle,
      title: "Chat & Communication",
      color: "text-green-400",
      bgColor: "bg-green-950/30",
      rules: [
        {
          rule: "Keep chat appropriate",
          description: "No inappropriate language, spam, or offensive content in public chat channels."
        },
        {
          rule: "No advertising",
          description: "Don't advertise other servers, Discord servers, or external content without permission."
        },
        {
          rule: "English in global chat",
          description: "Please use English in global chat channels to ensure everyone can participate."
        }
      ]
    },
    {
      icon: Building,
      title: "Building & Griefing",
      color: "text-purple-400",
      bgColor: "bg-purple-950/30",
      rules: [
        {
          rule: "No griefing",
          description: "Don't destroy, modify, or steal from other players' builds without permission."
        },
        {
          rule: "Claim your land",
          description: "Use the land claiming system to protect your builds and belongings."
        },
        {
          rule: "No inappropriate builds",
          description: "Don't create offensive, inappropriate, or lag-inducing structures."
        }
      ]
    },
    {
      icon: Sword,
      title: "PvP & Combat",
      color: "text-red-400",
      bgColor: "bg-red-950/30",
      rules: [
        {
          rule: "PvP only in designated areas",
          description: "Player vs Player combat is only allowed in designated PvP zones."
        },
        {
          rule: "No spawn killing",
          description: "Don't repeatedly kill players at spawn points or safe zones."
        },
        {
          rule: "Combat logging prohibited",
          description: "Don't log out during combat to avoid death or consequences."
        }
      ]
    }
  ];

  const penalties = [
    { offense: "First minor violation", penalty: "Warning", color: "bg-yellow-950/30 text-yellow-400" },
    { offense: "Repeated violations", penalty: "Temporary ban (1-7 days)", color: "bg-orange-950/30 text-orange-400" },
    { offense: "Major violations", penalty: "Permanent ban", color: "bg-red-950/30 text-red-400" }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">
            Server Guidelines
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            AzureCraft Server Rules
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            To ensure a fun and safe environment for all players, please read and follow these rules. 
            Ignorance of the rules is not an excuse for violations.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-blue-500/30 bg-blue-950/20">
          <Shield className="h-4 w-4 text-blue-400" />
          <AlertDescription className="text-slate-300">
            <strong className="text-blue-400">Important:</strong> All rules apply to both in-game chat and behavior. 
            Breaking these rules may result in warnings, temporary suspensions, or permanent bans.
          </AlertDescription>
        </Alert>

        {/* Rules Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {ruleCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card key={categoryIndex} className="bg-slate-900/50 border-blue-800/30 hover:bg-slate-900/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <IconComponent className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.rules.map((ruleItem, ruleIndex) => (
                      <div key={ruleIndex} className="border-l-2 border-blue-500/30 pl-4">
                        <h4 className={`font-semibold ${category.color} mb-1`}>
                          {ruleIndex + 1}. {ruleItem.rule}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {ruleItem.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Penalties Section */}
        <Card className="bg-slate-900/50 border-red-500/30 mb-12">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-red-950/30">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <CardTitle className="text-white text-xl">Penalties & Enforcement</CardTitle>
            </div>
            <CardDescription className="text-slate-400">
              Violations of server rules will result in the following consequences:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {penalties.map((penalty, index) => (
                <div key={index} className={`p-3 rounded-lg ${penalty.color} border border-current/20`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{penalty.offense}</span>
                    <span className="text-sm">{penalty.penalty}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Staff Contact */}
        <Alert className="border-green-500/30 bg-green-950/20">
          <Users className="h-4 w-4 text-green-400" />
          <AlertDescription className="text-slate-300">
            <strong className="text-green-400">Questions about the rules?</strong> Contact our staff team through Discord 
            or use the in-game support system. We're here to help ensure everyone has a great experience!
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Rules;