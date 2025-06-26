
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  Trophy, 
  Clock, 
  Target, 
  Zap,
  TrendingUp,
  Calendar,
  Star
} from "lucide-react";

interface StudentDashboardProps {
  onStartQuiz: () => void;
}

const StudentDashboard = ({ onStartQuiz }: StudentDashboardProps) => {
  const subjects = [
    { name: "Mathematics", progress: 75, quizzes: 12, level: "Intermediate" },
    { name: "Science", progress: 60, quizzes: 8, level: "Beginner" },
    { name: "History", progress: 90, quizzes: 15, level: "Advanced" },
    { name: "Literature", progress: 45, quizzes: 6, level: "Beginner" }
  ];

  const recentQuizzes = [
    { subject: "Mathematics", score: 85, date: "2 hours ago", difficulty: "Medium" },
    { subject: "Science", score: 92, date: "1 day ago", difficulty: "Easy" },
    { subject: "History", score: 78, date: "2 days ago", difficulty: "Hard" }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, Alex!</h2>
            <p className="text-blue-100 text-lg">Ready to continue your learning journey?</p>
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                <span>Level 12</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                <span>1,250 XP</span>
              </div>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-50"
            onClick={onStartQuiz}
          >
            <Play className="h-5 w-5 mr-2" />
            Start AI Quiz
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <Badge variant="secondary" className="bg-blue-200 text-blue-700">This Week</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">23</div>
            <p className="text-blue-700 text-sm">Quizzes Completed</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Target className="h-8 w-8 text-green-600" />
              <Badge variant="secondary" className="bg-green-200 text-green-700">Average</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">87%</div>
            <p className="text-green-700 text-sm">Quiz Accuracy</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <Badge variant="secondary" className="bg-purple-200 text-purple-700">Streak</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">15</div>
            <p className="text-purple-700 text-sm">Days Active</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Clock className="h-8 w-8 text-orange-600" />
              <Badge variant="secondary" className="bg-orange-200 text-orange-700">Today</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">2.5h</div>
            <p className="text-orange-700 text-sm">Study Time</p>
          </CardContent>
        </Card>
      </div>

      {/* Subject Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
            Subject Progress
          </CardTitle>
          <CardDescription>Track your learning progress across different subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{subject.name}</h4>
                  <Badge variant={subject.level === 'Advanced' ? 'default' : subject.level === 'Intermediate' ? 'secondary' : 'outline'}>
                    {subject.level}
                  </Badge>
                </div>
                <Progress value={subject.progress} className="mb-2" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{subject.progress}% complete</span>
                  <span>{subject.quizzes} quizzes</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-purple-600" />
            Recent Quiz Results
          </CardTitle>
          <CardDescription>Your latest quiz performance and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentQuizzes.map((quiz, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    quiz.score >= 90 ? 'bg-green-100' : quiz.score >= 80 ? 'bg-blue-100' : 'bg-orange-100'
                  }`}>
                    <Star className={`h-6 w-6 ${
                      quiz.score >= 90 ? 'text-green-600' : quiz.score >= 80 ? 'text-blue-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{quiz.subject}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>{quiz.date}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">{quiz.difficulty}</Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{quiz.score}%</div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
