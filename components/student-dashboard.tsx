"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Camera, CreditCard, Bell, TrendingUp, LogOut, Menu, X, CheckCircle } from "lucide-react"
import { mockData } from "@/lib/mock-data"

interface StudentDashboardProps {
  onLogout: () => void
}

export default function StudentDashboard({ onLogout }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState("performance")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const studentData = mockData.students[0] // Using first student as current user

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between lg:hidden">
        <h1 className="text-xl font-bold text-gray-900">Student Dashboard</h1>
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
            <h2 className="text-2xl font-bold text-gray-900">Student Panel</h2>
            <p className="text-sm text-gray-600">Welcome, {studentData.name}</p>
            <p className="text-xs text-gray-500">
              Class {studentData.class} • Roll: {studentData.rollNumber}
            </p>
          </div>
          <nav className="p-4 space-y-2">
            {[
              { id: "performance", label: "Performance", icon: TrendingUp },
              { id: "attendance", label: "Attendance", icon: CheckCircle },
              { id: "gallery", label: "Gallery", icon: Camera },
              { id: "fees", label: "Fee Payment", icon: CreditCard },
              { id: "notifications", label: "Notifications", icon: Bell },
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
          {activeTab === "performance" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-2xl font-bold text-gray-900 hidden lg:block">Academic Performance</h1>

              {/* Overall Performance Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Overall Performance</CardTitle>
                  <CardDescription>Current semester progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">85%</span>
                    <Badge variant="default">Excellent</Badge>
                  </div>
                  <Progress value={85} className="mb-2" />
                  <p className="text-sm text-gray-600">You're performing excellently! Keep up the good work.</p>
                </CardContent>
              </Card>

              {/* Subject-wise Performance */}
              <div className="grid gap-4">
                {mockData.studentGrades.map((subject, index) => (
                  <Card
                    key={subject.subject}
                    className="animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">{subject.subject}</h3>
                          <p className="text-sm text-gray-600">Grade: {subject.grade}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-gray-900">{subject.marks}%</span>
                        </div>
                      </div>
                      <Progress value={subject.marks} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "attendance" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-2xl font-bold text-gray-900">Attendance Record</h1>

              <Card>
                <CardHeader>
                  <CardTitle>Overall Attendance</CardTitle>
                  <CardDescription>Current semester attendance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{studentData.attendance}%</span>
                    <Badge variant={studentData.attendance >= 75 ? "default" : "destructive"}>
                      {studentData.attendance >= 75 ? "Good" : "Low"}
                    </Badge>
                  </div>
                  <Progress value={studentData.attendance} className="mb-2" />
                  <p className="text-sm text-gray-600">
                    {studentData.attendance >= 75
                      ? "Great attendance! You meet the minimum requirement."
                      : "Your attendance is below 75%. Please improve to avoid academic issues."}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["January", "February", "March", "April"].map((month, index) => (
                      <div key={month} className="flex items-center justify-between">
                        <span className="font-medium">{month}</span>
                        <div className="flex items-center gap-3">
                          <Progress value={85 + index * 2} className="w-24" />
                          <span className="text-sm font-medium">{85 + index * 2}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-2xl font-bold text-gray-900">School Gallery</h1>

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

          {activeTab === "fees" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-2xl font-bold text-gray-900">Fee Payment</h1>

              <Card>
                <CardHeader>
                  <CardTitle>Fee Status</CardTitle>
                  <CardDescription>Current semester fee information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-lg font-medium">Total Fee: $2,500</p>
                      <p className="text-sm text-gray-600">Due Date: March 31, 2024</p>
                    </div>
                    <Badge variant={studentData.feeStatus === "paid" ? "default" : "destructive"}>
                      {studentData.feeStatus}
                    </Badge>
                  </div>
                  {studentData.feeStatus === "pending" && (
                    <Button className="w-full">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Pay Now
                    </Button>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockData.paymentHistory.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{payment.description}</p>
                          <p className="text-sm text-gray-600">{payment.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">${payment.amount}</p>
                          <Badge variant="default" className="text-xs">
                            Paid
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>

              <div className="space-y-4">
                {mockData.notifications.map((notification, index) => (
                  <Card key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`p-2 rounded-full ${notification.type === "important" ? "bg-red-100" : "bg-blue-100"}`}
                          >
                            <Bell
                              className={`h-4 w-4 ${notification.type === "important" ? "text-red-600" : "text-blue-600"}`}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{notification.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">{notification.time}</p>
                          {notification.type === "important" && (
                            <Badge variant="destructive" className="mt-1">
                              Important
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
