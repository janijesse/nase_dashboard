"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Clock, TrendingUp, AlertTriangle, ArrowUpRight, ArrowDownRight, Coffee, MapPin } from "lucide-react"

export default function MonitoringPage() {
  const [timeRange, setTimeRange] = useState("today")

  return (
    <div className="flex flex-col p-6 pt-16 md:pt-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Event Monitoring</h1>
          <p className="text-muted-foreground mt-1">Real-time insights and analytics for active events</p>
        </div>
        <div className="flex gap-2">
          <Tabs defaultValue="today" className="w-full md:w-auto" onValueChange={setTimeRange}>
            <TabsList className="grid grid-cols-3 w-full md:w-auto">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* 1. Live Event Attendance & Capacity */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Live Event Attendance & Capacity</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="gradient-border-accent">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Attendees On-site</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                <span className="text-emerald-500">+24</span>
                <span className="ml-1">in last hour</span>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-border-accent">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Main Hall Capacity</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <div className="mt-2">
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-amber-500" style={{ width: "78%" }} />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-border-accent">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Entry/Exit Trend</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Entering</div>
                  <div className="text-xl font-bold text-emerald-500">+42</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Exiting</div>
                  <div className="text-xl font-bold text-red-500">-18</div>
                </div>
              </div>
              <div className="mt-2 h-10">
                <div className="flex h-full items-end gap-1">
                  {[35, 48, 42, 38, 30, 25, 42, 50, 42, 38, 42, 35].map((value, i) => (
                    <div key={i} className="flex-1 bg-primary rounded-t" style={{ height: `${value}%` }} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-border-accent">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Predicted Peak Times</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">12:30 PM</span>
                  <Badge variant="warning">Soon</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">4:15 PM</span>
                  <Badge>Later</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">6:00 PM</span>
                  <Badge>Later</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 2. Wait Time Forecasting & Crowd Flow */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Wait Time Forecasting & Crowd Flow</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Queue Lengths & Wait Times</CardTitle>
              <CardDescription>Current wait times at key locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { location: "Registration Desk", waitTime: "5 min", trend: "down" },
                  { location: "Main Food Court", waitTime: "12 min", trend: "up" },
                  { location: "VIP Lounge", waitTime: "3 min", trend: "stable" },
                  { location: "Restrooms (East)", waitTime: "2 min", trend: "stable" },
                  { location: "Merchandise Booth", waitTime: "8 min", trend: "up" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                    <div className="font-medium">{item.location}</div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{item.waitTime}</span>
                      {item.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-red-500" />
                      ) : item.trend === "down" ? (
                        <ArrowDownRight className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <span className="h-4 w-4 inline-block bg-muted rounded-full" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Crowd Density & Bottlenecks</CardTitle>
              <CardDescription>Areas with high traffic or congestion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-[250px] bg-muted/30 rounded-md overflow-hidden border">
                {/* Simple venue map visualization */}
                <div className="absolute inset-4 border border-dashed border-border rounded-md flex items-center justify-center text-muted-foreground">
                  Venue Map
                </div>

                {/* Hotspots */}
                <div className="absolute top-[30%] left-[20%] h-8 w-8 rounded-full bg-red-500/20 animate-pulse flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-red-500" />
                </div>
                <div className="absolute top-[40%] left-[60%] h-10 w-10 rounded-full bg-amber-500/20 animate-pulse flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-amber-500" />
                </div>
                <div className="absolute top-[70%] left-[40%] h-6 w-6 rounded-full bg-emerald-500/20 animate-pulse flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>

                {/* Legend */}
                <div className="absolute bottom-2 right-2 bg-background/80 p-2 rounded-md text-xs space-y-1">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span>High density</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-amber-500" />
                    <span>Medium density</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Low density</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-red-500">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-medium">Bottleneck at Main Entrance</span>
                </div>
                <div className="flex items-center gap-2 text-amber-500">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-medium">Increasing crowd at Food Court</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 3. Session & Activity Insights */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Session & Activity Insights</h2>
        <Card>
          <CardHeader>
            <CardTitle>Live Session Occupancy</CardTitle>
            <CardDescription>Current and upcoming sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Currently Running</h3>
                <div className="space-y-3">
                  {[
                    { name: "Keynote: Future of Tech", location: "Main Hall", time: "11:00 - 12:30", capacity: 85 },
                    { name: "Workshop: Mobile Development", location: "Room A", time: "11:00 - 13:00", capacity: 62 },
                    { name: "Panel: Industry Trends", location: "Room B", time: "11:30 - 12:30", capacity: 45 },
                  ].map((session, i) => (
                    <div key={i} className="border rounded-md p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{session.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {session.location}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {session.time}
                          </div>
                        </div>
                        <Badge
                          variant={
                            session.capacity > 80 ? "destructive" : session.capacity > 60 ? "warning" : "success"
                          }
                        >
                          {session.capacity}% Full
                        </Badge>
                      </div>
                      <div className="mt-2">
                        <div className="h-2 w-full rounded-full bg-secondary">
                          <div
                            className={`h-full rounded-full ${
                              session.capacity > 80
                                ? "bg-red-500"
                                : session.capacity > 60
                                  ? "bg-amber-500"
                                  : "bg-emerald-500"
                            }`}
                            style={{ width: `${session.capacity}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Upcoming Popular Sessions</h3>
                <div className="space-y-3">
                  {[
                    {
                      name: "AI in Business",
                      location: "Main Hall",
                      time: "14:00 - 15:30",
                      prediction: "High attendance",
                    },
                    {
                      name: "Networking Event",
                      location: "Lounge",
                      time: "16:00 - 17:30",
                      prediction: "Medium attendance",
                    },
                    {
                      name: "Closing Remarks",
                      location: "Main Hall",
                      time: "18:00 - 18:30",
                      prediction: "High attendance",
                    },
                  ].map((session, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                      <div>
                        <div className="font-medium">{session.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {session.time} • {session.location}
                        </div>
                      </div>
                      <Badge variant={session.prediction.includes("High") ? "warning" : "secondary"}>
                        {session.prediction}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Under-attended Sessions</h3>
                <div className="space-y-3">
                  {[
                    { name: "Technical Deep Dive", location: "Room C", time: "13:00 - 14:30", attendance: "32%" },
                    { name: "Career Development", location: "Room D", time: "15:00 - 16:00", attendance: "28%" },
                  ].map((session, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                      <div>
                        <div className="font-medium">{session.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {session.time} • {session.location}
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Promote
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 4. Food & Beverage Optimization */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Food & Beverage Optimization</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Current Wait Times</CardTitle>
              <CardDescription>Wait times at food vendors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { vendor: "Main Café", waitTime: "15 min", status: "busy" },
                  { vendor: "Food Truck Zone", waitTime: "8 min", status: "moderate" },
                  { vendor: "VIP Catering", waitTime: "3 min", status: "low" },
                  { vendor: "Snack Bar", waitTime: "5 min", status: "low" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="font-medium">{item.vendor}</div>
                    <Badge
                      variant={
                        item.status === "busy" ? "destructive" : item.status === "moderate" ? "warning" : "success"
                      }
                    >
                      {item.waitTime}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Times to Eat</CardTitle>
              <CardDescription>Forecasted lower wait times</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "1:30 PM - 2:00 PM", forecast: "5 min wait", location: "Main Café" },
                  { time: "2:45 PM - 3:15 PM", forecast: "3 min wait", location: "Food Truck Zone" },
                  { time: "4:00 PM - 5:00 PM", forecast: "No wait", location: "All Locations" },
                ].map((item, i) => (
                  <div key={i} className="border-b pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{item.time}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 ml-6">
                      {item.forecast} at {item.location}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stock Alerts</CardTitle>
              <CardDescription>Vendors running low on items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { vendor: "Main Café", item: "Sandwiches", remaining: "15%" },
                  { vendor: "Food Truck Zone", item: "Specialty Coffee", remaining: "20%" },
                  { vendor: "Snack Bar", item: "Energy Drinks", remaining: "10%" },
                ].map((alert, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                    <div>
                      <div className="font-medium">{alert.vendor}</div>
                      <div className="text-sm text-muted-foreground">{alert.item}</div>
                    </div>
                    <Badge variant="destructive">{alert.remaining} left</Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Contact Vendors
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

