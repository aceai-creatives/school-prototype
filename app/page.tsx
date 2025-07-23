"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Users, BookOpen, BarChart3 } from "lucide-react"
import AdminDashboard from "@/components/admin-dashboard"
import TeacherDashboard from "@/components/teacher-dashboard"
import StudentDashboard from "@/components/student-dashboard"

type UserRole = "admin" | "teacher" | "student" | null

export default function Home() {
  const [currentUser, setCurrentUser] = useState<UserRole>(null)
  const [selectedRole, setSelectedRole] = useState<string>("")

  const handleLogin = () => {
    if (selectedRole) {
      setCurrentUser(selectedRole as UserRole)
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setSelectedRole("")
  }

  if (currentUser === "admin") {
    return <AdminDashboard onLogout={handleLogout} />
  }

  if (currentUser === "teacher") {
    return <TeacherDashboard onLogout={handleLogout} />
  }

  if (currentUser === "student") {
    return <StudentDashboard onLogout={handleLogout} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-4 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">School Management</h1>
          <p className="text-gray-600">Comprehensive school management system</p>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Student Management</p>
            </CardContent>
          </Card>
          <Card className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-4 text-center">
              <BookOpen className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Class Management</p>
            </CardContent>
          </Card>
          <Card className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-4 text-center">
              <BarChart3 className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Analytics</p>
            </CardContent>
          </Card>
          <Card className="animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-4 text-center">
              <GraduationCap className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Performance</p>
            </CardContent>
          </Card>
        </div>

        {/* Login Form */}
        <Card className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Select your role to access the dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" defaultValue="demo@school.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" defaultValue="demo123" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleLogin} className="w-full" disabled={!selectedRole}>
              Login
            </Button>
          </CardContent>
        </Card>

        {/* Demo Info */}
        <Card className="mt-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600 text-center">
              <strong>Demo Credentials:</strong>
              <br />
              Email: demo@school.com
              <br />
              Password: demo123
              <br />
              Select any role to explore!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
