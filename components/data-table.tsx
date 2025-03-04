"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

interface DataTableProps<T> {
  data: T[]
  columns: {
    key: keyof T | string
    title: string
    render?: (value: any, item: T) => React.ReactNode
    className?: string
  }[]
  onEdit?: (item: T) => void
  onDelete?: (item: T) => void
  onView?: (item: T) => void
  actions?: boolean
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  onEdit,
  onDelete,
  onView,
  actions = true,
}: DataTableProps<T>) {
  const { toast } = useToast()
  const [hoveredRow, setHoveredRow] = useState<string | number | null>(null)

  const handleEdit = (item: T) => {
    if (onEdit) {
      onEdit(item)
    } else {
      toast({
        title: "Edit",
        description: `Editing item with ID: ${item.id}`,
      })
    }
  }

  const handleDelete = (item: T) => {
    if (onDelete) {
      onDelete(item)
    } else {
      toast({
        title: "Delete",
        description: `Deleting item with ID: ${item.id}`,
        variant: "destructive",
      })
    }
  }

  const handleView = (item: T) => {
    if (onView) {
      onView(item)
    } else {
      toast({
        title: "View",
        description: `Viewing item with ID: ${item.id}`,
      })
    }
  }

  const renderCell = (item: T, column: (typeof columns)[0]) => {
    const key = column.key as keyof T
    const value = item[key]

    if (column.render) {
      return column.render(value, item)
    }

    if (typeof value === "string" && value.toLowerCase() === "active") {
      return <Badge variant="success">Active</Badge>
    }

    if (typeof value === "string" && value.toLowerCase() === "inactive") {
      return <Badge variant="secondary">Inactive</Badge>
    }

    if (typeof value === "string" && value.toLowerCase() === "upcoming") {
      return <Badge variant="info">Upcoming</Badge>
    }

    if (typeof value === "string" && value.toLowerCase() === "completed") {
      return <Badge variant="secondary">Completed</Badge>
    }

    return value
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            {columns.map((column) => (
              <th
                key={column.key.toString()}
                className={cn("text-left py-3 px-4 font-medium text-muted-foreground", column.className)}
              >
                {column.title}
              </th>
            ))}
            {actions && <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b last:border-0 transition-colors hover:bg-muted/50"
              onMouseEnter={() => setHoveredRow(item.id)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              {columns.map((column) => (
                <td key={`${item.id}-${column.key.toString()}`} className={cn("py-3 px-4", column.className)}>
                  {renderCell(item, column)}
                </td>
              ))}
              {actions && (
                <td className="py-3 px-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleView(item)}>View details</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEdit(item)}>Edit</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => handleDelete(item)}
                        className="text-destructive focus:text-destructive"
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

