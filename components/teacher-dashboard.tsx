"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Camera, CheckCircle, Clock, LogOut, Menu, X } from "lucide-react"
import { mockData } from "@/lib/mock-data"

interface TeacherDashboardProps {
  onLogout: () => void
}

export default function TeacherDashboard({ onLogout }: TeacherDashboardProps) {
  const [activeTab, setActiveTab] = useState("classes")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between lg:hidden">
        <h1 className="text-xl font-bold text-gray-900">Teacher Dashboard</h1>
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
            <h2 className="text-2xl font-bold text-gray-900">Teacher Panel</h2>
            <p className="text-sm text-gray-600">Welcome, Ms. Johnson</p>
          </div>
          <nav className="p-4 space-y-2">
            {[
              { id: "classes", label: "My Classes", icon: BookOpen },
              { id: "attendance", label: "Attendance", icon: CheckCircle },
              { id: "timetable", label: "Timetable", icon: Calendar },
              { id: "gallery", label: "Gallery", icon: Camera },
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
          {activeTab === "classes" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-2xl font-bold text-gray-900 hidden lg:block">My Classes</h1>

              <div className="grid gap-4">
                {mockData.teacherClasses.map((classItem, index) => (
                  <Card
                    key={classItem.id}
                    className="animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{classItem.name}</h3>
                          <p className="text-sm text-gray-600">{classItem.subject}</p>
                        </div>
                        <Badge variant="secondary">{classItem.students} students</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Next class: {classItem.nextClass}</span>
                        <span>Room: {classItem.room}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "attendance" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
                <Button>Mark Attendance</Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Today's Attendance - Class 10A</CardTitle>
                  <CardDescription>Mathematics • {new Date().toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockData.students.slice(0, 8).map((student, index) => (
                      <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-medium">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{student.name}</p>
                            <p className="text-sm text-gray-600">Roll: {student.rollNumber}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <X className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "timetable" && (
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-2xl font-bold text-gray-900">My Timetable</h1>

              <div className="grid gap-4">
                {mockData.teacherTimetable.map((slot, index) => (
                  <Card key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex flex-col items-center">
                            <Clock className="h-5 w-5 text-blue-600 mb-1" />
                            <span className="text-sm font-medium">{slot.time}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{slot.subject}</p>
                            <p className="text-sm text-gray-600">
                              {slot.class} • Room {slot.room}
                            </p>
                          </div>
                        </div>
                        <Badge variant={slot.status === "upcoming" ? "default" : "secondary"}>{slot.status}</Badge>
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
                {mockData.galleryImages.slice(0, 6).map((image, index) => (
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
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
