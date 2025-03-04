import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col p-6 pt-16 md:pt-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span>Last 30 Days</span>
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,892</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">+14.2%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Connection Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
              <span className="text-red-500">-2.1%</span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Connection Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.8s</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">+0.3s</span>
              <span className="ml-1">improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">User Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76.4%</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">+3.2%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Connection Performance</CardTitle>
            <CardDescription>Success rate by telecom operator</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { operator: "Telefónica", percentage: 92 },
                { operator: "Orange", percentage: 88 },
                { operator: "Vodafone", percentage: 84 },
                { operator: "Other", percentage: 79 },
              ].map((item) => (
                <div key={item.operator} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <div>{item.operator}</div>
                    <div className="font-medium">{item.percentage}%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Distribution</CardTitle>
            <CardDescription>User devices by platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-center justify-center">
              <div className="flex w-full max-w-[300px] flex-col">
                {[
                  { platform: "Telefónica", percentage: 27, color: "bg-emerald-500" },
                  { platform: "Orange", percentage: 22, color: "bg-blue-500" },
                  { platform: "Vodafone", percentage: 21, color: "bg-amber-500" },
                  { platform: "Other", percentage: 30, color: "bg-gray-500" },
                ].map((item) => (
                  <div key={item.platform} className="flex items-center gap-2 py-1">
                    <div className={`h-3 w-3 rounded-full ${item.color}`} />
                    <div className="flex-1 text-sm">{item.platform}</div>
                    <div className="text-sm font-medium">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="h-4 w-full rounded-full bg-secondary overflow-hidden flex">
                <div className="h-full bg-emerald-500" style={{ width: "27%" }} />
                <div className="h-full bg-blue-500" style={{ width: "22%" }} />
                <div className="h-full bg-amber-500" style={{ width: "21%" }} />
                <div className="h-full bg-gray-500" style={{ width: "30%" }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Connection Trends</CardTitle>
          <CardDescription>Daily connection success rate over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <div className="flex h-full flex-col justify-between">
              <div className="flex h-full w-full items-end gap-2 pb-6">
                {Array.from({ length: 30 }).map((_, i) => {
                  const height = 30 + Math.random() * 70
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-primary rounded-t-sm" style={{ height: `${height}%` }} />
                    </div>
                  )
                })}
              </div>
              <div className="flex w-full justify-between text-xs text-muted-foreground">
                <div>Mar 1</div>
                <div>Mar 15</div>
                <div>Mar 30</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
