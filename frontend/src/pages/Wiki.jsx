import React, { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { Search, Book, ChevronRight } from "lucide-react";

const Wiki = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const wikiSections = [
    {
      title: "Getting Started",
      articles: [
        {
          title: "How to Join the Server",
          content: `To join AzureCraft Server, follow these simple steps:

1. Open your Minecraft Java Edition launcher
2. Make sure you're running version 1.20 or higher
3. Click "Multiplayer" from the main menu
4. Click "Add Server" or "Direct Connect"
5. Enter the server IP: play.azurecraft.com
6. Click "Join Server"

If you experience any connection issues, make sure your firewall isn't blocking Minecraft and that you have a stable internet connection.`
        },
        {
          title: "Spawn Area Guide",
          content: `The spawn area is your gateway to the AzureCraft experience:

**Key Locations:**
• Information boards with server rules and updates
• Teleportation hub with warps to different worlds
• Shops for buying essential items and tools
• Community bulletin board for events

**Important Commands:**
• /spawn - Return to spawn anytime
• /help - Get list of available commands
• /rules - Read server rules

The spawn area is a safe zone where PvP is disabled and griefing is not allowed.`
        },
        {
          title: "Basic Commands",
          content: `Essential commands every player should know:

**Navigation:**
• /spawn - Teleport to spawn area
• /home - Teleport to your home
• /sethome [name] - Set a home location
• /delhome [name] - Delete a home location
• /tpa [player] - Request teleport to another player
• /tpaccept - Accept teleport request

**Communication:**
• /msg [player] [message] - Send private message
• /r [message] - Reply to last message
• /discord - Get Discord server link

**Utility:**
• /balance - Check your money
• /time - Check server time
• /help - Get command help`
        }
      ]
    },
    {
      title: "Gameplay Features",
      articles: [
        {
          title: "Land Claims System",
          content: `Protect your builds with our land claiming system:

**How to Claim Land:**
1. Get a golden shovel (given to new players or craft one)
2. Right-click one corner of the area you want to claim
3. Right-click the opposite corner to complete the claim
4. A visualization will show your claimed area

**Claim Management:**
• /trust [player] - Allow a player to build in your claim
• /untrust [player] - Remove building permissions
• /abandonclaim - Remove the claim you're standing in
• /claimlist - See all your claims

**Claim Limits:**
• New players: 200 blocks per hour of playtime
• Trusted players: 500 blocks per hour
• Donators get bonus claim blocks`
        },
        {
          title: "Economy System",
          content: `Make money and trade with other players:

**Earning Money:**
• Jobs: /jobs browse - See available jobs
• Player shops: Sell items to other players
• Daily rewards: /daily - Claim daily bonuses
• Voting rewards: Vote for the server for money

**Spending Money:**
• Admin shops at spawn
• Player-run markets
• Claim blocks: /buyclaimblocks
• Special perks and items

**Trading:**
• Use /trade [player] for secure trading
• Player shops for automated selling
• Auction house: /ah for server-wide trading

Current exchange rate: 1 diamond = $100`
        },
        {
          title: "Player Shops",
          content: `Create your own shop to sell items:

**Setting Up a Chest Shop:**
1. Place a chest and fill it with items to sell
2. Place a sign on or near the chest
3. Write on the sign:
   Line 1: [SHOP]
   Line 2: Amount to sell (e.g., 1)
   Line 3: Price (e.g., B 10:5 S) - Buy 10, Sell 5
   Line 4: Item name (e.g., DIAMOND)

**Shop Management:**
• Check shop profits regularly
• Keep chests stocked
• Adjust prices based on demand
• Use /shopstats to see sales data

**Shop Rules:**
• No scam shops with misleading signs
• Keep prices reasonable
• Remove inactive shops after 30 days`
        }
      ]
    },
    {
      title: "Server Worlds",
      articles: [
        {
          title: "Main Survival World",
          content: `The primary world for survival gameplay:

**World Details:**
• Size: 10,000 x 10,000 blocks from spawn
• Difficulty: Hard mode
• PvP: Enabled outside spawn (3000 block radius)
• Griefing: Not allowed, use land claims

**Resources:**
• All vanilla structures and biomes
• Custom ore generation for balanced economy
• Rare materials available in designated mining world
• Mob spawners protected by land claims

**Building Guidelines:**
• Claim your land before building
• No inappropriate or offensive structures
• Respect other players' builds
• Use /rtp for random teleport to find building spots

The world border expands occasionally based on server population.`
        },
        {
          title: "Nether Access",
          content: `Navigate the dangerous Nether dimension:

**Nether Features:**
• Same 10,000 x 10,000 border as overworld
• Normal nether portal mechanics
• Land claims work in the Nether
• Enhanced loot in Nether fortresses

**Safety Tips:**
• Always carry fire resistance potions
• Build secure pathways to avoid ghasts
• Mark your portal coordinates
• Travel in groups for added security

**Resources:**
• Blaze spawners for XP farming
• Wither skeleton heads for beacons
• Nether quartz for building
• Glowstone for lighting

**PvP:** Enabled everywhere in the Nether - be cautious!`
        },
        {
          title: "End World",
          content: `Challenge the Ender Dragon and explore End Cities:

**End Access:**
• End portal located at spawn coordinates
• Additional End portals in strongholds
• /end command for trusted players

**Dragon Fight:**
• Ender Dragon respawns every Sunday at 8 PM EST
• All players can participate
• Rewards distributed to all participants
• Dragon egg goes to player with most damage

**End Cities:**
• Accessible after dragon defeat
• Contains shulker shells and elytra
• Use /rtp in End for random teleport
• Claim land to protect your End base

**Important:** The End resets monthly to ensure fresh resources for all players.`
        }
      ]
    },
    {
      title: "Staff & Support",
      articles: [
        {
          title: "Staff Team",
          content: `Meet our dedicated team of staff members:

**Staff Hierarchy:**
• **Owner** - Server owner and final decision maker
• **Admin** - Full server permissions, handles major issues
• **Moderator** - Chat moderation, player disputes, rule enforcement
• **Helper** - Assists new players, answers questions

**Current Staff Members:**
• Owner: ServerOwner
• Admins: AdminBob, AdminAlice
• Moderators: ModJohn, ModSarah, ModMike
• Helpers: HelperTom, HelperJenny

**Staff Guidelines:**
• Fair and unbiased treatment of all players
• Following proper punishment procedures
• Available during peak hours (3 PM - 11 PM EST)
• Always professional and helpful

Staff members are marked with colored names and prefixes in chat.`
        },
        {
          title: "Reporting Issues",
          content: `How to report problems or rule violations:

**In-Game Reporting:**
• /report [player] [reason] - Report rule violations
• /helpop [message] - Request staff assistance
• Take screenshots of evidence when possible

**Discord Reporting:**
• Use #report-players channel
• Include player name, time, and evidence
• Staff will investigate within 24 hours

**What to Report:**
• Cheating or hacking
• Harassment or inappropriate behavior
• Griefing outside of PvP zones
• Advertising other servers
• Real money trading

**False Reports:**
• Don't abuse the report system
• False reports may result in punishment
• Be honest and provide accurate information`
        },
        {
          title: "Appeals Process",
          content: `How to appeal bans or punishments:

**Appeal Requirements:**
• Wait at least 24 hours before appealing
• Be honest about what happened
• Show understanding of the rules
• Explain why you should be unbanned

**Appeal Process:**
1. Join our Discord server
2. Go to #ban-appeals channel
3. Use the provided template
4. Wait for staff review (3-5 days)
5. Accept or contest the decision

**Appeal Template:**
• IGN (In-Game Name):
• Ban reason:
• What happened:
• Why you should be unbanned:
• Will you follow rules in future:

**Important Notes:**
• Appeals for serious offenses (major hacking, harassment) may be denied
• Repeated offenses reduce chances of successful appeal
• Be patient - staff reviews all appeals carefully`
        }
      ]
    }
  ];

  const filteredSections = wikiSections.map(section => ({
    ...section,
    articles: section.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  const currentSection = filteredSections[activeSection];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="bg-slate-900/80 border-b border-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">
              Knowledge Base
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AzureCraft Wiki
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Complete documentation and guides for AzureCraft Server
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-slate-900/60 border-b border-slate-800 py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700 focus:border-blue-500 text-slate-200"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Numbered Navigation */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-slate-900/80 rounded-lg border border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Book className="w-5 h-5 mr-2 text-blue-400" />
                  Documentation
                </h3>
                <nav className="space-y-2">
                  {filteredSections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full flex items-center text-left p-3 rounded-lg transition-all duration-200 ${
                        activeSection === index
                          ? 'bg-blue-950/50 text-blue-400 border border-blue-500/30'
                          : 'hover:bg-slate-800/50 text-slate-300 hover:text-white'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 text-sm font-semibold ${
                        activeSection === index
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-700 text-slate-400'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium">{section.title}</span>
                      {activeSection === index && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            <div className="bg-slate-900/80 rounded-lg border border-slate-800 p-8">
              {currentSection && (
                <>
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white text-lg font-bold mr-4">
                        {activeSection + 1}
                      </div>
                      <h2 className="text-3xl font-bold text-white">{currentSection.title}</h2>
                    </div>
                    <p className="text-slate-400">
                      {currentSection.articles.length} article{currentSection.articles.length !== 1 ? 's' : ''} in this section
                    </p>
                  </div>

                  <div className="space-y-8">
                    {currentSection.articles.map((article, index) => (
                      <div key={index} className="border border-slate-700 rounded-lg p-6 bg-slate-800/30">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-sm flex items-center justify-center mr-3">
                            {index + 1}
                          </div>
                          {article.title}
                        </h3>
                        <div className="prose prose-invert prose-blue max-w-none">
                          {article.content.split('\n').map((paragraph, pIndex) => {
                            if (paragraph.trim() === '') return <br key={pIndex} />;
                            
                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                              return (
                                <h4 key={pIndex} className="text-lg font-semibold text-blue-400 mt-6 mb-3">
                                  {paragraph.replace(/\*\*/g, '')}
                                </h4>
                              );
                            }
                            
                            if (paragraph.startsWith('• ')) {
                              return (
                                <div key={pIndex} className="text-slate-300 ml-4 mb-2 flex items-start">
                                  <span className="text-blue-400 mr-2">•</span>
                                  <span>{paragraph.substring(2)}</span>
                                </div>
                              );
                            }
                            
                            return (
                              <p key={pIndex} className="text-slate-300 leading-relaxed mb-4">
                                {paragraph}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {currentSection.articles.length === 0 && searchTerm && (
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
                </>
              )}
            </div>

            {/* Bottom Help Section */}
            <div className="mt-8 bg-slate-900/80 rounded-lg border border-slate-800 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Need Additional Help?</h3>
                  <p className="text-slate-400">
                    Can't find what you're looking for? Our staff team is here to help.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Join Discord
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Contact Staff
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wiki;