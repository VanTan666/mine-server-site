import React from "react";
import { Separator } from "./ui/separator";
import { Github, Twitter, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Discord", icon: Discord, url: "#", color: "hover:text-indigo-400" },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-400" },
    { name: "GitHub", icon: Github, url: "#", color: "hover:text-slate-300" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-blue-800/30 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Server Info */}
          <div className="text-center md:text-left">
            <p className="text-slate-300 text-sm">
              © 2025 AzureCraft Server. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              This site is owned and operated by AzureCraft Server
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-slate-500 text-sm hidden md:block">Follow us:</span>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`p-2 rounded-md bg-slate-900/50 text-slate-400 transition-all duration-200 ${social.color} hover:bg-slate-800/50 transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-blue-800/30" />
        
        <div className="text-center">
          <p className="text-slate-500 text-xs">
            Built with love for the Minecraft community | Server IP: play.azurecraft.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;