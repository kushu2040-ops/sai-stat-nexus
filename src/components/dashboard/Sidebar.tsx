import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Users,
  Trophy,
  TrendingUp,
  Map,
  Settings,
  BarChart3,
  Target,
  Activity
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onSettingsClick: () => void;
}

const navigationItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "athletes", label: "Athletes", icon: Users, badge: "15.8K" },
  { id: "performance", label: "Performance", icon: Trophy },
  { id: "talent", label: "Talent ID", icon: Target, badge: "2.3K" },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "regional", label: "Regional", icon: Map },
  { id: "engagement", label: "Engagement", icon: Activity },
  { id: "system", label: "System", icon: TrendingUp },
];

const Sidebar = ({ activeSection, onSectionChange, onSettingsClick }: SidebarProps) => {
  return (
    <div className="fixed top-0 right-0 h-full w-64 bg-gradient-card border-l border-border shadow-lg overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Trophy className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-foreground">SAI Dashboard</h2>
            <p className="text-xs text-muted-foreground">Sports Authority of India</p>
          </div>
        </div>
      </div>
      
      <nav className="px-4 pb-4">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-10",
                activeSection === item.id 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
              onClick={() => onSectionChange(item.id)}
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge 
                  variant={activeSection === item.id ? "secondary" : "outline"} 
                  className="text-xs"
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>
        
        <div className="mt-8 pt-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-10 text-muted-foreground hover:text-foreground"
            onClick={onSettingsClick}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
