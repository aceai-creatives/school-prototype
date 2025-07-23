"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  GraduationCap,
  DollarSign,
  TrendingUp,
  UserPlus,
  Camera,
  BarChart3,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { mockData } from "@/lib/mock-data"

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const stats = [
    {
      title: "Total Students",
      value: mockData.students.length.toString(),
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Teachers",
      value: mockData.teachers.length.toString(),
      icon: GraduationCap,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Fee Collection",
      value: "$45,230",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Performance",
      value: "94%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between lg:hidden">
        <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={onLogout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}
        >
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
          </div>
          <nav className="p-4 space-y-2">
            {[
              { id: "dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "students", label: "Students", icon: Users },
              { id: "teachers", label: "Teachers", icon: GraduationCap },
              { id: "gallery", label: "Gallery", icon: Camera },
              { id: "analytics", label: "Analytics", icon: TrendingUp },
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveTab(item.id)
                  setSidebarOpen(false)
                }}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>
          <div className="absolute bottom-4 left-4 right-4">
            <Button variant="outline" className="w-full bg-transparent" onClick={onLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900 hidden lg:block">Dashboard</h1>
                <Button className="lg:hidden">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add New
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card
                    key={stat.title}
                    className="animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                        <div className={`p-2 rounded-full ${stat.bgColor}`}>
                          <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.recentActivities.slice(0, 5).map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{activity.title}</p>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                        </div>
                        <Badge variant="secondary">{activity.time}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "students" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Students</h1>
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Student
                </Button>
              </div>

              <div className="grid gap-4">
                {mockData.students.map((student, index) => (
                  <Card
                    key={student.id}
                    className="animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{student.name}</p>
                            <p className="text-sm text-gray-600">
                              Class {student.class} • Roll: {student.rollNumber}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={student.feeStatus === "paid" ? "default" : "destructive"}>
                            {student.feeStatus}
                          </Badge>
                          <p className="text-sm text-gray-600 mt-1">{student.attendance}% attendance</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "teachers" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Teachers</h1>
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Teacher
                </Button>
              </div>

              <div className="grid gap-4">
                {mockData.teachers.map((teacher, index) => (
                  <Card
                    key={teacher.id}
                    className="animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-medium">
                              {teacher.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{teacher.name}</p>
                            <p className="text-sm text-gray-600">
                              {teacher.subject} • {teacher.experience} years exp
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">${teacher.salary}</p>
                          <p className="text-sm text-gray-600">{teacher.performance}% performance</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
                <Button>
                  <Camera className="h-4 w-4 mr-2" />
                  Upload Photo
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {mockData.galleryImages.map((image, index) => (
                  <Card key={image.id} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-0">
                      <img
                        src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(image.title)}`}
                        alt={image.title}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <div className="p-3">
                        <p className="font-medium text-gray-900">{image.title}</p>
                        <p className="text-sm text-gray-600">{image.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>

              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Performance Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Excellent (90-100%)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                          </div>
                          <span className="text-sm">35%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Good (80-89%)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                          </div>
                          <span className="text-sm">40%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Average (70-79%)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                          </div>
                          <span className="text-sm">20%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Below Average (&lt;70%)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-red-600 h-2 rounded-full" style={{ width: "5%" }}></div>
                          </div>
                          <span className="text-sm">5%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Fee Collection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">$45,230</div>
                    <p className="text-sm text-gray-600">+12% from last month</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
