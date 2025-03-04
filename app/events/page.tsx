import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Filter, Plus, Search } from "lucide-react"

export default function EventsPage() {
  // Mock data for events
  const events = [
    {
      id: 1,
      name: "Tech Conference 2024",
      date: "Mar 15, 2024",
      location: "London, UK",
      attendees: 342,
      status: "Active",
    },
    {
      id: 2,
      name: "Mobile Summit",
      date: "Mar 10, 2024",
      location: "Paris, France",
      attendees: 187,
      status: "Active",
    },
    {
      id: 3,
      name: "Developer Meetup",
      date: "Mar 5, 2024",
      location: "Berlin, Germany",
      attendees: 98,
      status: "Active",
    },
    {
      id: 4,
      name: "AI Workshop",
      date: "Feb 28, 2024",
      location: "Amsterdam, Netherlands",
      attendees: 156,
      status: "Completed",
    },
    {
      id: 5,
      name: "Networking Event",
      date: "Feb 22, 2024",
      location: "Madrid, Spain",
      attendees: 124,
      status: "Completed",
    },
    {
      id: 6,
      name: "Product Launch",
      date: "Apr 10, 2024",
      location: "Rome, Italy",
      attendees: 0,
      status: "Upcoming",
    },
    {
      id: 7,
      name: "Annual Conference",
      date: "May 15, 2024",
      location: "Vienna, Austria",
      attendees: 0,
      status: "Upcoming",
    },
  ]

  return (
    <div className="flex flex-col p-6 pt-16 md:pt-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Events</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          <span>New Event</span>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
        <Button variant="outline" className="gap-2">
          <CalendarDays className="h-4 w-4" />
          <span>Date Range</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Events</CardTitle>
          <CardDescription>Manage your events and track attendance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Name</th>
                  <th className="text-left py-3 px-4 font-medium">Date</th>
                  <th className="text-left py-3 px-4 font-medium">Location</th>
                  <th className="text-left py-3 px-4 font-medium">Attendees</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 px-4">{event.name}</td>
                    <td className="py-3 px-4">{event.date}</td>
                    <td className="py-3 px-4">{event.location}</td>
                    <td className="py-3 px-4">{event.attendees}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          event.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : event.status === "Upcoming"
                              ? "bg-blue-500/10 text-blue-500"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
