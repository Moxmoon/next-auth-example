"use client"

import { agentsData } from "@/constants/config"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Agents = () => {
  return (
    <>
      <Button className="float-right mb-2 bg-indigo-700 hover:bg-indigo-600">
        Create Agent
      </Button>
      <Table>
        {/* <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Agent Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader> */}
        <TableBody>
          {agentsData.map((agent) => (
            <TableRow key={agent.id}>
              <TableCell className="w-[200px] font-medium">
                {agent.name}
              </TableCell>
              <TableCell className="w-[200px]">
                <Badge variant={agent.status === 1 ? "outline" : "destructive"}>
                  {agent.status === 1 ? "enable" : "unenable"}
                </Badge>
              </TableCell>
              <TableCell className="w-[100px]">
                <Button
                  variant="outline"
                  className="border-indigo-700 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700 active:bg-indigo-700 active:text-white"
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
export default Agents
