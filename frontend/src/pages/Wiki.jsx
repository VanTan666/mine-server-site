import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search, Book, Map, Wrench, Crown, Pickaxe, Home } from "lucide-react";

const Wiki = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const wikiSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Home,
      color: "text-green-400",
      bgColor: "bg-green-950/30",
      articles: [
        {
          title: "How to Join the Server",
          description: "Step-by-step guide to connecting to AzureCraft Server",
          content: "To join AzureCraft Server, simply add 'play.azurecraft.com' to your server list in Minecraft. Make sure you're using the correct version (Java Edition 1.20+)."
        },
        {
          title: "Spawn Area Guide",
          description: "Everything you need to know about the spawn area",
          content: "The spawn area contains shops, information boards, and teleportation hubs. Use /spawn to return here anytime."
        },
        {
          title: "Basic Commands",
          description: "Essential commands every player should know",
          content: "Key commands: /spawn, /home, /sethome, /tpa [player], /help, /rules, /discord"
        }
      ]
    },
    {
      id: "gameplay",
      title: "Gameplay Features",
      icon: Pickaxe,
      color: "text-blue-400",
      bgColor: "bg-blue-950/30",
      articles: [
        {
          title: "Land Claims System",
          description: "How to protect your builds and items",
          content: "Use a golden shovel to claim land. Right-click two corners to create a claim. Use /abandonclaim to remove claims you no longer need."
        },
        {
          title: "Economy System",
          description: "Earning and spending money on the server",
          content: "Earn money through jobs, selling items at spawn shops, or trading with other players. Use /balance to check your money."
        },
        {
          title: "Player Shops",
          description: "Creating and managing your own shop",
          content: "Set up chest shops to sell items to other players. Place a sign on a chest with [SHOP] format to create automated trading."
        }
      ]
    },
    {
      id: "worlds",
      title: "Server Worlds",
      icon: Map,
      color: "text-purple-400",
      bgColor: "bg-purple-950/30",
      articles: [
        {
          title: "Main Survival World",
          description: "The primary world where most gameplay happens",
          content: "The main survival world has a 10,000 block border. Build freely, but remember to claim your land to protect it."
        },
        {
          title: "Nether Access",
          description: "How to access and navigate the Nether",
          content: "Nether portals work normally. The Nether world is also protected by the same claiming system as the overworld."
        },
        {
          title: "End World",
          description: "Information about the End dimension",
          content: "The End is accessible through the End Portal. The Ender Dragon respawns weekly for all players to challenge."
        }
      ]
    },
    {
      id: "staff",
      title: "Staff & Support",
      icon: Crown,
      color: "text-yellow-400",
      bgColor: "bg-yellow-950/30",
      articles: [
        {
          title: "Staff Team",
          description: "Meet our dedicated staff members",
          content: "Our staff team includes Administrators, Moderators, and Helpers. They're here to assist players and maintain server quality."
        },
        {
          title: "Reporting Issues",
          description: "How to report problems or rule violations",
          content: "Use /report [player] [reason] in-game or contact staff through Discord. Include screenshots or evidence when possible."
        },
        {
          title: "Appeals Process",
          description: "How to appeal bans or punishments",
          content: "Submit ban appeals through our Discord server. Include your username, reason for ban, and why you believe it should be lifted."
        }
      ]
    }
  ];

  const filteredSections = wikiSections.map(section => ({
    ...section,
    articles: section.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.articles.length > 0 || searchTerm === "");

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">
            Knowledge Base
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AzureCraft Wiki
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive guide to everything AzureCraft Server. Find tutorials, guides, and helpful information to enhance your gameplay experience.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <div className="flex items-center space-x-2 bg-slate-900/50 border border-blue-800/30 rounded-lg p-3">
            <Search className="w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search the wiki..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0 bg-transparent focus:ring-0 text-slate-300 placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Wiki Content */}
        <Tabs defaultValue="getting-started" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-900/50 border border-blue-800/30">
            {wikiSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="flex items-center space-x-2 text-slate-300 data-[state=active]:bg-blue-950/30 data-[state=active]:text-blue-400"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{section.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {filteredSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <TabsContent key={section.id} value={section.id} className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg ${section.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    <p className="text-slate-400">Essential information and guides</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.articles.map((article, index) => (
                    <Card key={index} className="bg-slate-900/50 border-blue-800/30 hover:bg-slate-900/70 transition-all duration-300 hover:transform hover:scale-[1.02]">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{article.title}</CardTitle>
                        <CardDescription className="text-slate-400">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          {article.content}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-blue-500/30 text-blue-400 hover:bg-blue-950/30"
                        >
                          <Book className="w-4 h-4 mr-2" />
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {section.articles.length === 0 && searchTerm && (
                  <div className="text-center py-12">
                    <div className="text-slate-400 mb-4">No articles found matching "{searchTerm}"</div>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchTerm("")}
                      className="border-blue-500/30 text-blue-400 hover:bg-blue-950/30"
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Help Section */}
        <Card className="mt-12 bg-slate-900/50 border-blue-500/30">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-blue-950/30">
                <Wrench className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-white">Need More Help?</CardTitle>
                <CardDescription className="text-slate-400">
                  Can't find what you're looking for?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Join Discord Support
              </Button>
              <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-950/30">
                Contact Staff In-Game
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wiki;