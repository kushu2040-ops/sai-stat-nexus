import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target, Trophy, TrendingUp, Filter, Star, MapPin } from "lucide-react";

// Mock talent data
const talentData = [
  { id: 1, name: "Rajesh Kumar", sport: "Football/Soccer", state: "Maharashtra", age: 22, gender: "Male", potentialScore: 96, tier: "High", improvements: "+12%", recentAchievement: "National Championship Winner" },
  { id: 2, name: "Priya Sharma", sport: "Athletics", state: "Punjab", age: 20, gender: "Female", potentialScore: 94, tier: "High", improvements: "+15%", recentAchievement: "State Record Holder" },
  { id: 3, name: "Arjun Singh", sport: "Swimming", state: "Karnataka", age: 24, gender: "Male", potentialScore: 92, tier: "High", improvements: "+8%", recentAchievement: "Regional Champion" },
  { id: 4, name: "Meera Patel", sport: "Basketball", state: "Gujarat", age: 21, gender: "Female", potentialScore: 89, tier: "Medium", improvements: "+18%", recentAchievement: "District MVP" },
  { id: 5, name: "Vikram Das", sport: "Wrestling", state: "Haryana", age: 25, gender: "Male", potentialScore: 87, tier: "Medium", improvements: "+10%", recentAchievement: "State Quarter-finalist" },
  { id: 6, name: "Anjali Reddy", sport: "Boxing", state: "Telangana", age: 23, gender: "Female", potentialScore: 85, tier: "Medium", improvements: "+22%", recentAchievement: "Rising Star Award" },
  { id: 7, name: "Rohit Verma", sport: "Hockey", state: "Odisha", age: 26, gender: "Male", potentialScore: 84, tier: "Medium", improvements: "+6%", recentAchievement: "Team Captain" },
  { id: 8, name: "Kavya Nair", sport: "Volleyball", state: "Kerala", age: 19, gender: "Female", potentialScore: 82, tier: "Medium", improvements: "+25%", recentAchievement: "Youth Champion" },
  { id: 9, name: "Suresh Yadav", sport: "Judo", state: "Uttar Pradesh", age: 27, gender: "Male", potentialScore: 79, tier: "Low", improvements: "+14%", recentAchievement: "Regional Qualifier" },
  { id: 10, name: "Deepika Thakur", sport: "Karate", state: "Himachal Pradesh", age: 22, gender: "Female", potentialScore: 78, tier: "Low", improvements: "+20%", recentAchievement: "Local Tournament Winner" },
  { id: 11, name: "Amit Shah", sport: "Baseball", state: "Delhi", age: 24, gender: "Male", potentialScore: 91, tier: "High", improvements: "+11%", recentAchievement: "National Team Prospect" },
  { id: 12, name: "Sita Kumari", sport: "Rugby", state: "Rajasthan", age: 21, gender: "Female", potentialScore: 86, tier: "Medium", improvements: "+16%", recentAchievement: "State Champion" },
  { id: 13, name: "Rahul Mishra", sport: "Cricket", state: "Madhya Pradesh", age: 23, gender: "Male", potentialScore: 88, tier: "Medium", improvements: "+9%", recentAchievement: "League All-Star" },
  { id: 14, name: "Pooja Devi", sport: "Handball", state: "Bihar", age: 20, gender: "Female", potentialScore: 76, tier: "Low", improvements: "+28%", recentAchievement: "Fastest Improvement" },
  { id: 15, name: "Kiran Kumar", sport: "Softball", state: "Assam", age: 25, gender: "Male", potentialScore: 83, tier: "Medium", improvements: "+13%", recentAchievement: "Regional MVP" },
  { id: 16, name: "Nisha Patel", sport: "Kickboxing", state: "Goa", age: 22, gender: "Female", potentialScore: 87, tier: "Medium", improvements: "+17%", recentAchievement: "National Qualifier" },
  { id: 17, name: "Vinod Singh", sport: "Diving", state: "Uttarakhand", age: 24, gender: "Male", potentialScore: 90, tier: "High", improvements: "+12%", recentAchievement: "Technical Excellence Award" },
];

const sports = ["All Sports", "Football/Soccer", "Basketball", "Volleyball", "Baseball", "Rugby", "Cricket", "Hockey", "Handball", "Softball", "Athletics", "Boxing", "Wrestling", "Judo", "Karate", "Kickboxing", "Swimming", "Diving"];
const states = ["All States", "Maharashtra", "Punjab", "Karnataka", "Gujarat", "Haryana", "Telangana", "Odisha", "Kerala", "Uttar Pradesh", "Himachal Pradesh", "Delhi", "Rajasthan", "Madhya Pradesh", "Bihar", "Assam", "Goa", "Uttarakhand"];
const ageGroups = ["All Ages", "18-20", "21-23", "24-26", "27+"];
const genders = ["All Genders", "Male", "Female"];
const tiers = ["All Tiers", "High", "Medium", "Low"];
const sortOptions = ["Potential Score (High-Low)", "Potential Score (Low-High)", "Recent Improvements", "Name (A-Z)"];

const getTierBadge = (tier: string) => {
  switch (tier) {
    case "High":
      return { variant: "default" as const, color: "text-primary" };
    case "Medium":
      return { variant: "secondary" as const, color: "text-secondary" };
    case "Low":
      return { variant: "outline" as const, color: "text-muted-foreground" };
    default:
      return { variant: "outline" as const, color: "text-muted-foreground" };
  }
};

const TalentIdentification = () => {
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("All Ages");
  const [selectedGender, setSelectedGender] = useState("All Genders");
  const [selectedTier, setSelectedTier] = useState("All Tiers");
  const [sortBy, setSortBy] = useState("Potential Score (High-Low)");

  let filteredTalent = talentData.filter(talent => {
    const matchesSport = selectedSport === "All Sports" || talent.sport === selectedSport;
    const matchesState = selectedState === "All States" || talent.state === selectedState;
    const matchesGender = selectedGender === "All Genders" || talent.gender === selectedGender;
    const matchesTier = selectedTier === "All Tiers" || talent.tier === selectedTier;
    
    let matchesAge = true;
    if (selectedAgeGroup !== "All Ages") {
      switch (selectedAgeGroup) {
        case "18-20":
          matchesAge = talent.age >= 18 && talent.age <= 20;
          break;
        case "21-23":
          matchesAge = talent.age >= 21 && talent.age <= 23;
          break;
        case "24-26":
          matchesAge = talent.age >= 24 && talent.age <= 26;
          break;
        case "27+":
          matchesAge = talent.age >= 27;
          break;
      }
    }
    
    return matchesSport && matchesState && matchesAge && matchesGender && matchesTier;
  });

  // Sort filtered data
  filteredTalent = filteredTalent.sort((a, b) => {
    switch (sortBy) {
      case "Potential Score (High-Low)":
        return b.potentialScore - a.potentialScore;
      case "Potential Score (Low-High)":
        return a.potentialScore - b.potentialScore;
      case "Recent Improvements":
        return parseInt(b.improvements.replace("+", "").replace("%", "")) - parseInt(a.improvements.replace("+", "").replace("%", ""));
      case "Name (A-Z)":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const tierCounts = {
    High: filteredTalent.filter(t => t.tier === "High").length,
    Medium: filteredTalent.filter(t => t.tier === "Medium").length,
    Low: filteredTalent.filter(t => t.tier === "Low").length,
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">High Potential</p>
                <p className="text-2xl font-bold text-primary">{tierCounts.High}</p>
              </div>
              <Trophy className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card border-2 border-warning/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Medium Potential</p>
                <p className="text-3xl font-black text-warning drop-shadow-sm">{tierCounts.Medium}</p>
              </div>
              <Target className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Developing Talent</p>
                <p className="text-2xl font-bold text-warning">{tierCounts.Low}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Target className="h-5 w-5 text-primary" />
            Talent Identification Dashboard
          </CardTitle>
          <CardDescription>
            Comprehensive dashboard for managing and tracking identified athletic talent
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Select value={selectedSport} onValueChange={setSelectedSport}>
              <SelectTrigger>
                <SelectValue placeholder="Sport" />
              </SelectTrigger>
              <SelectContent>
                {sports.map((sport) => (
                  <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
              <SelectTrigger>
                <SelectValue placeholder="Age Group" />
              </SelectTrigger>
              <SelectContent>
                {ageGroups.map((group) => (
                  <SelectItem key={group} value={group}>{group}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedGender} onValueChange={setSelectedGender}>
              <SelectTrigger>
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                {genders.map((gender) => (
                  <SelectItem key={gender} value={gender}>{gender}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedTier} onValueChange={setSelectedTier}>
              <SelectTrigger>
                <SelectValue placeholder="Talent Tier" />
              </SelectTrigger>
              <SelectContent>
                {tiers.map((tier) => (
                  <SelectItem key={tier} value={tier}>{tier}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results Summary */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Showing {filteredTalent.length} identified talents
          </div>

          {/* Talent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTalent.map((talent) => {
              const tierBadge = getTierBadge(talent.tier);
              return (
                <Card key={talent.id} className="hover:shadow-lg transition-shadow bg-background/50 border border-border/50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12 ring-2 ring-border">
                            <AvatarImage src="/placeholder.svg" alt={talent.name} />
                            <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                              {talent.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-foreground">{talent.name}</h3>
                            <p className="text-sm text-muted-foreground">{talent.sport}</p>
                          </div>
                        </div>
                        <Badge variant={tierBadge.variant} className="text-xs">
                          {talent.tier}
                        </Badge>
                      </div>

                      {/* Location & Demographics */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {talent.state}
                        </div>
                        <span>•</span>
                        <span>{talent.age} years</span>
                        <span>•</span>
                        <span>{talent.gender}</span>
                      </div>

                      {/* Potential Score */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Potential Score</span>
                          <span className="text-xl font-bold text-primary">{talent.potentialScore}</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-700 shadow-sm" 
                            style={{ 
                              width: `${Math.max((talent.potentialScore - 60) / 40 * 100, 5)}%` // Normalize to 60-100 range for better visual difference
                            }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground text-right">
                          {talent.potentialScore}/100
                        </div>
                      </div>

                      {/* Recent Achievement */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-warning" />
                          <span className="text-sm font-medium text-foreground">Recent Achievement</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{talent.recentAchievement}</p>
                      </div>

                      {/* Improvement */}
                      <div className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-success" />
                          <span className="text-sm font-medium text-foreground">Recent Improvement</span>
                        </div>
                        <Badge variant="outline" className="text-success border-success">
                          {talent.improvements}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TalentIdentification;