import { useState } from "react";
import { X, User, Settings, Bell, Palette, MapPin, Eye, Mail, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/contexts/ThemeContext";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel = ({ isOpen, onClose }: SettingsPanelProps) => {
  const { theme, setTheme } = useTheme();
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [showUnidentifiedTalent, setShowUnidentifiedTalent] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Settings className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Settings</h2>
              <p className="text-sm text-muted-foreground">Customize your dashboard</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* User Profile Section */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <User className="h-4 w-4" />
                User Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Dr. Rajesh Kumar</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      National Administrator
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Customization */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Palette className="h-4 w-4" />
                Dashboard Settings
              </CardTitle>
              <CardDescription>
                Personalize your dashboard experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Theme Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Theme</label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="high-contrast">High Contrast</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              {/* Default Region */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Default State/Region
                </label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="punjab">Punjab</SelectItem>
                    <SelectItem value="haryana">Haryana</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              {/* Show Unidentified Talent */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Show Unidentified Talent</p>
                    <p className="text-xs text-muted-foreground">Display unidentified athletes in the Athletes section</p>
                  </div>
                </div>
                <Switch
                  checked={showUnidentifiedTalent}
                  onCheckedChange={setShowUnidentifiedTalent}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notifications & Alerts */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Bell className="h-4 w-4" />
                Notifications & Alerts
              </CardTitle>
              <CardDescription>
                Manage how you receive updates and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Email Alerts */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email Alerts</p>
                    <p className="text-xs text-muted-foreground">Get notified when new talent is identified</p>
                  </div>
                </div>
                <Switch
                  checked={emailAlerts}
                  onCheckedChange={setEmailAlerts}
                />
              </div>

              <Separator />

              {/* In-App Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">In-App Notifications</p>
                    <p className="text-xs text-muted-foreground">Receive alerts for performance milestones</p>
                  </div>
                </div>
                <Switch
                  checked={inAppNotifications}
                  onCheckedChange={setInAppNotifications}
                />
              </div>
            </CardContent>
          </Card>

          {/* Save Settings Button */}
          <div className="pt-4">
            <Button className="w-full" onClick={onClose}>
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;