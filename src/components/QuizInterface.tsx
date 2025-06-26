
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Clock, 
  Brain, 
  CheckCircle2, 
  XCircle,
  Sparkles,
  Trophy,
  RotateCcw
} from "lucide-react";

interface QuizInterfaceProps {
  onBack: () => void;
}

const QuizInterface = ({ onBack }: QuizInterfaceProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const quiz = {
    title: "Algebra Fundamentals",
    subject: "Mathematics",
    difficulty: "Intermediate",
    totalQuestions: 5,
    questions: [
      {
        question: "What is the value of x in the equation 2x + 8 = 20?",
        options: ["x = 4", "x = 6", "x = 8", "x = 10"],
        correctAnswer: "x = 6",
        explanation: "To solve 2x + 8 = 20, subtract 8 from both sides to get 2x = 12, then divide by 2 to get x = 6."
      },
      {
        question: "Which of the following is equivalent to 3(x + 4)?",
        options: ["3x + 4", "3x + 12", "x + 12", "3x + 7"],
        correctAnswer: "3x + 12",
        explanation: "Using the distributive property: 3(x + 4) = 3x + 3(4) = 3x + 12."
      },
      {
        question: "If y = 2x - 3, what is y when x = 5?",
        options: ["y = 7", "y = 8", "y = 9", "y = 10"],
        correctAnswer: "y = 7",
        explanation: "Substitute x = 5 into y = 2x - 3: y = 2(5) - 3 = 10 - 3 = 7."
      },
      {
        question: "What is the slope of the line y = -2x + 5?",
        options: ["-2", "2", "5", "-5"],
        correctAnswer: "-2",
        explanation: "In the slope-intercept form y = mx + b, the coefficient of x (m) is the slope. Here, m = -2."
      },
      {
        question: "Solve for x: x² - 9 = 0",
        options: ["x = 3", "x = -3", "x = ±3", "x = 9"],
        correctAnswer: "x = ±3",
        explanation: "x² - 9 = 0 can be factored as (x-3)(x+3) = 0, giving x = 3 or x = -3, so x = ±3."
      }
    ]
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < quiz.totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(newAnswers[currentQuestion + 1] || "");
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || "");
    }
  };

  const calculateScore = () => {
    const correct = answers.filter((answer, index) => 
      answer === quiz.questions[index].correctAnswer
    ).length;
    return Math.round((correct / quiz.totalQuestions) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = answers.filter((answer, index) => 
      answer === quiz.questions[index].correctAnswer
    ).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
              <CardDescription>Great job on completing the {quiz.title} quiz</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Summary */}
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">{score}%</div>
                <div className="text-lg text-gray-600">
                  {correctAnswers} out of {quiz.totalQuestions} questions correct
                </div>
                <Badge 
                  variant={score >= 80 ? 'default' : score >= 60 ? 'secondary' : 'destructive'}
                  className="mt-2"
                >
                  {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs Improvement'}
                </Badge>
              </div>

              {/* Question Review */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Review Your Answers</h3>
                {quiz.questions.map((question, index) => {
                  const isCorrect = answers[index] === question.correctAnswer;
                  return (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600 mt-1" />
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium mb-2">Question {index + 1}</h4>
                          <p className="text-gray-700 mb-3">{question.question}</p>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-600">Your answer:</span>
                              <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600'}>
                                {answers[index] || 'Not answered'}
                              </span>
                            </div>
                            {!isCorrect && (
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Correct answer:</span>
                                <span className="text-green-600 font-medium">{question.correctAnswer}</span>
                              </div>
                            )}
                          </div>
                          <div className="mt-2 p-3 bg-blue-50 rounded border border-blue-200">
                            <p className="text-sm text-blue-800">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <Button variant="outline">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button onClick={onBack}>
                  Continue Learning
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2">
              <Clock className="h-4 w-4 text-orange-600" />
              <span className="font-medium">{formatTime(timeLeft)}</span>
            </div>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              <Brain className="h-3 w-3 mr-1" />
              AI-Generated
            </Badge>
          </div>
        </div>

        {/* Quiz Header */}
        <Card className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">{quiz.title}</CardTitle>
                <CardDescription className="text-blue-100">
                  {quiz.subject} • {quiz.difficulty} Level
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{currentQuestion + 1}</div>
                <div className="text-blue-100">of {quiz.totalQuestions}</div>
              </div>
            </div>
            <Progress 
              value={(currentQuestion + 1) / quiz.totalQuestions * 100} 
              className="mt-4 bg-blue-500/30" 
            />
          </CardHeader>
        </Card>

        {/* Question Card */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <Badge variant="outline">Question {currentQuestion + 1}</Badge>
            </div>
            <CardTitle className="text-xl leading-relaxed">
              {quiz.questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {quiz.questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer text-base"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: quiz.totalQuestions }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentQuestion 
                        ? 'bg-blue-600' 
                        : answers[index] 
                          ? 'bg-green-500' 
                          : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button 
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {currentQuestion === quiz.totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizInterface;
