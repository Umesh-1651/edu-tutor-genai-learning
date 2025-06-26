
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2,
  Clock,
  BarChart3,
  Download,
  Filter
} from "lucide-react";

const EducatorDashboard = () => {
  const classStats = [
    { metric: "Total Students", value: "127", change: "+12", trend: "up" },
    { metric: "Active Today", value: "89", change: "+5", trend: "up" },
    { metric: "Avg. Quiz Score", value: "84%", change: "+3%", trend: "up" },
    { metric: "Completion Rate", value: "92%", change: "-2%", trend: "down" }
  ];

  const studentPerformance = [
    { name: "Emma Johnson", avatar: "/placeholder.svg", score: 94, quizzes: 15, status: "excellent" },
    { name: "Michael Chen", avatar: "/placeholder.svg", score: 88, quizzes: 12, status: "good" },
    { name: "Sofia Rodriguez", avatar: "/placeholder.svg", score: 76, quizzes: 8, status: "needs-help" },
    { name: "David Kim", avatar: "/placeholder.svg", score: 92, quizzes: 14, status: "excellent" },
    { name: "Aisha Patel", avatar: "/placeholder.svg", score: 68, quizzes: 6, status: "needs-help" }
  ];

  const subjectAnalytics = [
    { subject: "Mathematics", avgScore: 82, totalQuizzes: 156, struggling: 8 },
    { subject: "Science", avgScore: 87, totalQuizzes: 143, struggling: 5 },
    { subject: "History", avgScore: 79, totalQuizzes: 128, struggling: 12 },
    { subject: "Literature", avgScore: 91, totalQuizzes: 134, struggling: 3 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Educator Dashboard</h2>
            <p className="text-indigo-100 text-lg">Monitor student progress and performance insights</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-white text-indigo-600 hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Class Statistics */}
      <div className="grid md:grid-cols-4 gap-6">
        {classStats.map((stat, index) => (
          <Card key={index} className="bg-white">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription className="text-sm font-medium">{stat.metric}</CardDescription>
                <Badge variant={stat.trend === 'up' ? 'default' : 'destructive'} className="text-xs">
                  {stat.change}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="flex items-center mt-2">
                <TrendingUp className={`h-4 w-4 mr-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                <span className="text-sm text-gray-600">vs last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="students" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="students" className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Student Performance
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center">
            <BarChart3 className="h-4 w-4 mr-2" />
            Subject Analytics
          </TabsTrigger>
          <TabsTrigger value="insights" className="flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            AI Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Student Performance Overview</CardTitle>
              <CardDescription>Monitor individual student progress and identify those who need additional support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentPerformance.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{student.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>{student.quizzes} quizzes completed</span>
                          <Badge 
                            variant={
                              student.status === 'excellent' ? 'default' : 
                              student.status === 'good' ? 'secondary' : 'destructive'
                            }
                            className="text-xs"
                          >
                            {student.status === 'excellent' ? 'Excellent' : 
                             student.status === 'good' ? 'Good' : 'Needs Help'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{student.score}%</div>
                      <div className="text-sm text-gray-500">Avg Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Subject Performance Analytics</CardTitle>
              <CardDescription>Detailed breakdown of performance across different subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {subjectAnalytics.map((subject, index) => (
                  <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">{subject.subject}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{subject.totalQuizzes} total quizzes</span>
                        <Badge variant={subject.struggling <= 5 ? 'default' : 'destructive'}>
                          {subject.struggling} struggling
                        </Badge>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">{subject.avgScore}%</div>
                        <div className="text-sm text-gray-600">Average Score</div>
                      </div>
                      <div>
                        <Progress value={subject.avgScore} className="mb-2" />
                        <div className="text-sm text-gray-600">Class Performance</div>
                      </div>
                      <div className="flex items-center justify-end space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm">Generate Quiz</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
                  Students Needing Attention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="font-medium text-orange-900">Sofia Rodriguez</div>
                    <div className="text-sm text-orange-700">Struggling with Mathematics concepts</div>
                  </div>
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="font-medium text-orange-900">Aisha Patel</div>
                    <div className="text-sm text-orange-700">Low engagement in recent quizzes</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="font-medium text-green-900">Emma Johnson</div>
                    <div className="text-sm text-green-700">Consistently high performance across all subjects</div>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="font-medium text-green-900">David Kim</div>
                    <div className="text-sm text-green-700">Excellent improvement in Mathematics</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EducatorDashboard;
