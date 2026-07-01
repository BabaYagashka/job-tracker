"use client";

import { Board, Column } from "@/lib/models/models.types";
import {
  Calendar,
  CheckCircle2,
  Mic,
  XCircle,
  Award,
  MoreVertical,
  Trash2Icon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import CreateJobApplicationDialog from "./create-job-dialog";

interface KanbanBoardProps {
  board: Board;
  userId: string;
}

interface ColConfig {
  color: string;
  icon: React.ReactNode;
}

const COLUMN_CONFIG: Array<ColConfig> = [
  {
    color: "bg-sky-900",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    color: "bg-emerald-900",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: "bg-violet-900",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-amber-900",
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: "bg-rose-900",
    icon: <XCircle className="h-4 w-4" />,
  },
];

function DroppableColumn({
  column,
  config,
  boardId,
}: {
  column: Column;
  config: ColConfig;
  boardId: string;
}) {
  return (
    <Card className="w-full overflow-hidden rounded-xl border border-border shadow-sm ">
      {/* Colored header */}
      <CardHeader className={`${config.color} px-4 py-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            {config.icon}
            <CardTitle className="text-sm font-semibold text-white">
              {column.name}
            </CardTitle>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-white hover:bg-white/20 hover:text-white"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-destructive">
                <Trash2Icon className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      {/* White content area */}
      <CardContent className="min-h-40 bg-white p-0">
        <CreateJobApplicationDialog columnId={column._id} boardId={boardId} />
      </CardContent>
    </Card>
  );
}

export default function KanbanBoard({ board, userId }: KanbanBoardProps) {
  const columns = board.columns;

  return (
    <>
      <div className="flex flex-col gap-4">
        {columns.map((col, key) => {
          const config = COLUMN_CONFIG[key] || {
            color: "bg-sky-900",
            icon: <Calendar className="h-4 w-4" />,
          };
          return (
            <DroppableColumn
              key={key}
              column={col}
              config={config}
              boardId={board._id}
            />
          );
        })}
      </div>
    </>
  );
}
