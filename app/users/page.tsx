import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Filter, Search, UserPlus, Lock } from "lucide-react"
import { createHash } from 'crypto'

// Function to create a simple hash (for demonstration purposes only)
const simpleHash = (str) => {
  return createHash('sha256').update(str).digest('hex').substring(0, 8)
}

// Function to partially mask an email
const maskEmail = (email) => {
  const [username, domain] = email.split('@')
  return `${username.substring(0, 2)}***@${domain}`
}

export default function UsersPage() {
  // Mock data for users with hashed names and masked emails
  const users = [
    {
      id: 1,
      name: "Alejandro García",
      hashedName: simpleHash("Alejandro García"),
      email: "alex@example.com",
      maskedEmail: maskEmail("alex@example.com"),
      events: 8,
      lastActive: "2 hours ago",
      status: "Active",
      deviceName: "iPhone 15 Pro Max",
    },
    {
      id: 2,
      name: "Sara Martínez",
      hashedName: simpleHash("Sara Martínez"),
      email: "sarah@example.com",
      maskedEmail: maskEmail("sarah@example.com"),
      events: 12,
      lastActive: "1 day ago",
      status: "Active",
      deviceName: "Samsung Galaxy S23 Ultra",
    },
    {
      id: 3,
      name: "Miquel Puig",
      hashedName: simpleHash("Miquel Puig"),
      email: "michael@example.com",
      maskedEmail: maskEmail("michael@example.com"),
      events: 5,
      lastActive: "3 days ago",
      status: "Active",
      deviceName: "Google Pixel 8 Pro",
    },
    {
      id: 4,
      name: "Eva Rodríguez",
      hashedName: simpleHash("Eva Rodríguez"),
      email: "emily@example.com",
      maskedEmail: maskEmail("emily@example.com"),
      events: 3,
      lastActive: "1 week ago",
      status: "Inactive",
      deviceName: "OnePlus 11 Pro",
    },
    {
      id: 5,
      name: "David Fernández",
      hashedName: simpleHash("David Fernández"),
      email: "david@example.com",
      maskedEmail: maskEmail("david@example.com"),
      events: 7,
      lastActive: "2 days ago",
      status: "Active",
      deviceName: "Xiaomi 13 Ultra",
    },
    {
      id: 6,
      name: "Júlia Costa",
      hashedName: simpleHash("Júlia Costa"),
      email: "jessica@example.com",
      maskedEmail: maskEmail("jessica@example.com"),
      events: 0,
      lastActive: "2 weeks ago",
      status: "Inactive",
      deviceName: "OPPO Find X6 Pro",
    },
    {
      id: 7,
      name: "Rafael López",
      hashedName: simpleHash("Rafael López"),
      email: "ryan@example.com",
      maskedEmail: maskEmail("ryan@example.com"),
      events: 4,
      lastActive: "5 days ago",
      status: "Active",
      deviceName: "Sony Xperia 1 V",
    },
  ]

  return (
    <div className="flex flex-col p-6 pt-16 md:pt-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Users</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            <span>Add User</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,842</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,936</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Users (This Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+128</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>View and manage user accounts (data encrypted for security)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Name (Hashed)</th>
                  <th className="text-left py-3 px-4 font-medium">Email (Masked)</th>
                  <th className="text-left py-3 px-4 font-medium">Device</th>
                  <th className="text-left py-3 px-4 font-medium">Events Attended</th>
                  <th className="text-left py-3 px-4 font-medium">Last Active</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                          <Lock className="h-4 w-4" />
                        </div>
                        {user.hashedName}
                      </div>
                    </td>
                    <td className="py-3 px-4">{user.maskedEmail}</td>
                    <td className="py-3 px-4">{user.deviceName}</td>
                    <td className="py-3 px-4">{user.events}</td>
                    <td className="py-3 px-4">{user.lastActive}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit
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
