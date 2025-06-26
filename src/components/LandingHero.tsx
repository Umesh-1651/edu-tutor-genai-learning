
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  BookOpen, 
  Users, 
  Trophy, 
  ChartBar, 
  Sparkles,
  GraduationCap,
  Zap,
  Target,
  Play
} from "lucide-react";

interface LandingHeroProps {
  onLogin: (role: 'student' | 'educator') => void;
}

const LandingHero = ({ onLogin }: LandingHeroProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduTutor AI
              </h1>
              <p className="text-sm text-gray-600">Powered by IBM Watsonx</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            <Sparkles className="h-3 w-3 mr-1" />
            Free Tier Available
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Personalized Learning with Generative AI
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience adaptive quizzes, real-time analytics, and seamless Google Classroom integration powered by IBM Watsonx AI.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Generated Quizzes</h3>
              <p className="text-gray-600 text-sm">Personalized questions adapted to your learning level</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-gray-600 text-sm">Smart algorithms that adjust to your progress</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <ChartBar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-600 text-sm">Track performance with detailed insights</p>
            </div>
          </div>

          {/* Login Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              onClick={() => onLogin('student')}
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              Student Login
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-purple-200 hover:border-purple-300 px-8 py-3 text-lg"
              onClick={() => onLogin('educator')}
            >
              <Users className="h-5 w-5 mr-2" />
              Educator Login
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Built with Cutting-Edge Technology</h3>
          <p className="text-gray-600">Leveraging the best free-tier AI and cloud services</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center bg-white/60 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">IBM Watsonx</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Advanced AI for quiz generation</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/60 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Pinecone Vector DB</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Semantic search and storage</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/60 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Google Classroom</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Seamless LMS integration</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/60 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg">FastAPI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">High-performance backend</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
