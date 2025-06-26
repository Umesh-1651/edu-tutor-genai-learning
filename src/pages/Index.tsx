
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Brain, 
  Users, 
  Trophy, 
  ChartBar, 
  Sparkles,
  Play,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  GraduationCap
} from "lucide-react";
import StudentDashboard from "@/components/StudentDashboard";
import EducatorDashboard from "@/components/EducatorDashboard";
import QuizInterface from "@/components/QuizInterface";
import LandingHero from "@/components/LandingHero";

const Index = () => {
  const [userRole, setUserRole] = useState<'student' | 'educator' | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'quiz' | 'landing'>('landing');

  const handleLogin = (role: 'student' | 'educator') => {
    setUserRole(role);
    setCurrentView('dashboard');
  };

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentView('landing');
  };

  if (currentView === 'landing') {
    return <LandingHero onLogin={handleLogin} />;
  }

  if (currentView === 'quiz') {
    return <QuizInterface onBack={handleBackToDashboard} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduTutor AI
              </h1>
              <p className="text-xs text-gray-500">Personalized Learning Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered
            </Badge>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {userRole === 'student' && (
          <StudentDashboard onStartQuiz={handleStartQuiz} />
        )}
        {userRole === 'educator' && (
          <EducatorDashboard />
        )}
      </main>
    </div>
  );
};

export default Index;
