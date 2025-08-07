// Mock data for AzureCraft Server website
// This file contains placeholder data that will be replaced with real backend data

export const mockServerInfo = {
  name: "AzureCraft Server",
  ip: "play.azurecraft.com",
  version: "1.20+",
  players: {
    online: 342,
    max: 500
  },
  uptime: "99.9%",
  description: "Your Epic Minecraft Adventure Awaits"
};

export const mockStats = {
  totalPlayers: 500,
  uptime: "99.9%",
  supportHours: "24/7"
};

export const mockRules = [
  {
    category: "General Conduct",
    icon: "Shield",
    rules: [
      {
        title: "Don't cheat",
        description: "No use of hacks, exploits, or unauthorized modifications that give unfair advantages."
      },
      {
        title: "Respect all players",
        description: "Treat everyone with kindness and respect, regardless of their skill level or background."
      },
      {
        title: "No harassment or bullying",
        description: "Any form of harassment, bullying, or discriminatory behavior is strictly prohibited."
      }
    ]
  }
  // More rule categories would be added here
];

export const mockWikiArticles = [
  {
    id: 1,
    title: "How to Join the Server",
    category: "Getting Started",
    content: "To join AzureCraft Server, simply add 'play.azurecraft.com' to your server list in Minecraft.",
    lastUpdated: "2025-01-20",
    author: "AdminUser"
  },
  {
    id: 2,
    title: "Land Claims System",
    category: "Gameplay Features",
    content: "Use a golden shovel to claim land. Right-click two corners to create a claim.",
    lastUpdated: "2025-01-18",
    author: "ModeratorUser"
  }
  // More articles would be added here
];

export const mockDonationTiers = [
  {
    id: 1,
    name: "Supporter",
    price: 5,
    features: [
      "Supporter badge in chat",
      "Access to /hat command",
      "Priority support",
      "Supporter Discord role"
    ]
  },
  {
    id: 2,
    name: "VIP",
    price: 15,
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
    id: 3,
    name: "Premium",
    price: 25,
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

export const mockSocialLinks = [
  { name: "Discord", url: "https://discord.gg/azurecraft", icon: "Discord" },
  { name: "Twitter", url: "https://twitter.com/azurecraft", icon: "Twitter" },
  { name: "YouTube", url: "https://youtube.com/azurecraft", icon: "Youtube" },
  { name: "GitHub", url: "https://github.com/azurecraft", icon: "Github" }
];

// Note: This is mock data for frontend development
// In the full-stack implementation, this data will come from the backend API