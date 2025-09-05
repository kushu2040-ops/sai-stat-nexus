import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Users, Eye, Filter, Medal, Star, TrendingUp, Video } from "lucide-react";

// Mock athlete data
const athletesData = [
  { id: 1, name: "Rajesh Kumar", sport: "Football/Soccer", state: "Maharashtra", age: 22, gender: "Male", performance: 94, medals: 12, videos: 15, testScores: { speed: 89, strength: 92, endurance: 88, agility: 95 }, tier: "Elite" },
  { id: 2, name: "Priya Sharma", sport: "Athletics", state: "Punjab", age: 20, gender: "Female", performance: 92, medals: 8, videos: 18, testScores: { speed: 94, strength: 85, endurance: 96, agility: 89 }, tier: "Elite" },
  { id: 3, name: "Arjun Singh", sport: "Swimming", state: "Karnataka", age: 24, gender: "Male", performance: 91, medals: 15, videos: 22, testScores: { speed: 87, strength: 89, endurance: 94, agility: 86 }, tier: "Elite" },
  { id: 4, name: "Meera Patel", sport: "Basketball", state: "Gujarat", age: 21, gender: "Female", performance: 89, medals: 6, videos: 12, testScores: { speed: 91, strength: 88, endurance: 84, agility: 93 }, tier: "Advanced" },
  { id: 5, name: "Vikram Das", sport: "Wrestling", state: "Haryana", age: 25, gender: "Male", performance: 88, medals: 9, videos: 14, testScores: { speed: 85, strength: 95, endurance: 87, agility: 83 }, tier: "Advanced" },
  { id: 6, name: "Anjali Reddy", sport: "Boxing", state: "Telangana", age: 23, gender: "Female", performance: 87, medals: 7, videos: 16, testScores: { speed: 88, strength: 86, endurance: 85, agility: 90 }, tier: "Advanced" },
  { id: 7, name: "Rohit Verma", sport: "Hockey", state: "Odisha", age: 26, gender: "Male", performance: 86, medals: 11, videos: 19, testScores: { speed: 84, strength: 87, endurance: 88, agility: 85 }, tier: "Advanced" },
  { id: 8, name: "Kavya Nair", sport: "Volleyball", state: "Kerala", age: 19, gender: "Female", performance: 85, medals: 5, videos: 10, testScores: { speed: 86, strength: 82, endurance: 83, agility: 89 }, tier: "Developing" },
  { id: 9, name: "Suresh Yadav", sport: "Judo", state: "Uttar Pradesh", age: 27, gender: "Male", performance: 84, medals: 4, videos: 13, testScores: { speed: 83, strength: 88, endurance: 82, agility: 84 }, tier: "Developing" },
  { id: 10, name: "Deepika Thakur", sport: "Karate", state: "Himachal Pradesh", age: 22, gender: "Female", performance: 83, medals: 6, videos: 11, testScores: { speed: 85, strength: 79, endurance: 81, agility: 87 }, tier: "Developing" },
  { id: 11, name: "Amit Shah", sport: "Baseball", state: "Delhi", age: 24, gender: "Male", performance: 90, medals: 10, videos: 17, testScores: { speed: 89, strength: 90, endurance: 88, agility: 92 }, tier: "Elite" },
  { id: 12, name: "Sita Kumari", sport: "Rugby", state: "Rajasthan", age: 21, gender: "Female", performance: 86, medals: 7, videos: 14, testScores: { speed: 84, strength: 88, endurance: 86, agility: 85 }, tier: "Advanced" },
  { id: 13, name: "Rahul Mishra", sport: "Cricket", state: "Madhya Pradesh", age: 23, gender: "Male", performance: 88, medals: 13, videos: 20, testScores: { speed: 87, strength: 85, endurance: 90, agility: 89 }, tier: "Advanced" },
  { id: 14, name: "Pooja Devi", sport: "Handball", state: "Bihar", age: 20, gender: "Female", performance: 82, medals: 4, videos: 9, testScores: { speed: 81, strength: 83, endurance: 80, agility: 84 }, tier: "Developing" },
  { id: 15, name: "Kiran Kumar", sport: "Softball", state: "Assam", age: 25, gender: "Male", performance: 85, medals: 8, videos: 15, testScores: { speed: 83, strength: 86, endurance: 84, agility: 87 }, tier: "Advanced" },
  { id: 16, name: "Nisha Patel", sport: "Kickboxing", state: "Goa", age: 22, gender: "Female", performance: 87, medals: 9, videos: 16, testScores: { speed: 88, strength: 84, endurance: 86, agility: 90 }, tier: "Advanced" },
  { id: 17, name: "Vinod Singh", sport: "Diving", state: "Uttarakhand", age: 24, gender: "Male", performance: 89, medals: 11, videos: 18, testScores: { speed: 86, strength: 88, endurance: 87, agility: 94 }, tier: "Elite" },
];

const sports = ["All Sports", "Football/Soccer", "Basketball", "Volleyball", "Baseball", "Rugby", "Cricket", "Hockey", "Handball", "Softball", "Athletics", "Boxing", "Wrestling", "Judo", "Karate", "Kickboxing", "Swimming", "Diving"];
const states = ["All States", "Maharashtra", "Punjab", "Karnataka", "Gujarat", "Haryana", "Telangana", "Odisha", "Kerala", "Uttar Pradesh", "Himachal Pradesh", "Delhi", "Rajasthan", "Madhya Pradesh", "Bihar", "Assam", "Goa", "Uttarakhand"];
const ageGroups = ["All Ages", "18-20", "21-23", "24-26", "27+"];
const genders = ["All Genders", "Male", "Female"];

const getPerformanceBadge = (performance: number) => {
  if (performance >= 90) return { variant: "default" as const, label: "Elite", color: "text-primary" };
  if (performance >= 85) return { variant: "secondary" as const, label: "Advanced", color: "text-secondary" };
  return { variant: "outline" as const, label: "Developing", color: "text-muted-foreground" };
};

const AthletesDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("All Ages");
  const [selectedGender, setSelectedGender] = useState("All Genders");

  const filteredAthletes = athletesData.filter(athlete => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === "All Sports" || athlete.sport === selectedSport;
    const matchesState = selectedState === "All States" || athlete.state === selectedState;
    const matchesGender = selectedGender === "All Genders" || athlete.gender === selectedGender;
    
    let matchesAge = true;
    if (selectedAgeGroup !== "All Ages") {
      switch (selectedAgeGroup) {
        case "18-20":
          matchesAge = athlete.age >= 18 && athlete.age <= 20;
          break;
        case "21-23":
          matchesAge = athlete.age >= 21 && athlete.age <= 23;
          break;
        case "24-26":
          matchesAge = athlete.age >= 24 && athlete.age <= 26;
          break;
        case "27+":
          matchesAge = athlete.age >= 27;
          break;
      }
    }
    
    return matchesSearch && matchesSport && matchesState && matchesAge && matchesGender;
  });

  return (
    <div className="space-y-6">
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Users className="h-5 w-5 text-primary" />
            Athletes Directory
          </CardTitle>
          <CardDescription>
            Comprehensive directory of all registered athletes with advanced search and filtering capabilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search athletes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
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
          </div>

          {/* Results Summary */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Showing {filteredAthletes.length} of {athletesData.length} athletes
          </div>

          {/* Athletes Table */}
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Athlete</TableHead>
                  <TableHead>Sport</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Medals</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAthletes.map((athlete) => {
                  const performanceBadge = getPerformanceBadge(athlete.performance);
                  return (
                    <TableRow key={athlete.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg" alt={athlete.name} />
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {athlete.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-foreground">{athlete.name}</div>
                            <div className="text-xs text-muted-foreground">{athlete.gender}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-foreground">{athlete.sport}</TableCell>
                      <TableCell className="text-muted-foreground">{athlete.state}</TableCell>
                      <TableCell className="text-muted-foreground">{athlete.age}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge variant={performanceBadge.variant} className="text-xs">
                            {performanceBadge.label}
                          </Badge>
                          <span className="text-sm font-medium text-foreground">{athlete.performance}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Medal className="h-3 w-3 text-warning" />
                          <span className="text-sm text-foreground">{athlete.medals}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1">
                              <Eye className="h-3 w-3" />
                              View Profile
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-3">
                                <Avatar className="h-12 w-12">
                                  <AvatarImage src="/placeholder.svg" alt={athlete.name} />
                                  <AvatarFallback className="bg-primary/10 text-primary">
                                    {athlete.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="text-xl font-bold">{athlete.name}</div>
                                  <div className="text-sm text-muted-foreground">{athlete.sport} • {athlete.state}</div>
                                </div>
                              </DialogTitle>
                              <DialogDescription>
                                Detailed performance profile and statistics
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="grid grid-cols-2 gap-6 mt-6">
                              <div className="space-y-4">
                                <h3 className="font-semibold text-foreground">Personal Information</h3>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Age:</span>
                                    <span className="text-foreground">{athlete.age} years</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Gender:</span>
                                    <span className="text-foreground">{athlete.gender}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">State:</span>
                                    <span className="text-foreground">{athlete.state}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Sport:</span>
                                    <span className="text-foreground">{athlete.sport}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <h3 className="font-semibold text-foreground">Performance Metrics</h3>
                                <div className="space-y-3">
                                  <div className="flex items-center gap-2">
                                    <Star className="h-4 w-4 text-warning" />
                                    <span className="text-sm text-muted-foreground">Overall Performance:</span>
                                    <Badge variant={getPerformanceBadge(athlete.performance).variant}>
                                      {athlete.performance}%
                                    </Badge>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Medal className="h-4 w-4 text-warning" />
                                    <span className="text-sm text-muted-foreground">Medals Won:</span>
                                    <span className="text-sm font-medium text-foreground">{athlete.medals}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Video className="h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Videos Uploaded:</span>
                                    <span className="text-sm font-medium text-foreground">{athlete.videos}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-6">
                              <h3 className="font-semibold text-foreground mb-4">Test Scores</h3>
                              <div className="grid grid-cols-2 gap-4">
                                {Object.entries(athlete.testScores).map(([test, score]) => (
                                  <div key={test} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                                    <span className="text-sm font-medium text-foreground capitalize">{test}</span>
                                    <div className="flex items-center gap-2">
                                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                                        <div 
                                          className="h-full bg-gradient-primary rounded-full transition-all duration-300" 
                                          style={{ width: `${score}%` }}
                                        />
                                      </div>
                                      <span className="text-sm font-medium text-foreground w-8">{score}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AthletesDirectory;