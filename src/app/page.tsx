"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { km } from "date-fns/locale";
import { XCircle } from "lucide-react";
import React, { useState } from "react";

export default function Home() {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today);

  return (
    <React.Fragment>
      <Input />
      <Badge className="rounded-sm" variant="destructive">
        Active
      </Badge>
      <br />
      <Button className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 duration-280 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-608 dark:hover:bg-blue-700 dark:focus:ringblue-800">
        Click Me <XCircle className="pl-2" />
      </Button>
      <Calendar
        mode="single"
        required
        selected={selectedDay}
        onSelect={setSelectedDay}
        locale={km}
      />
    </React.Fragment>
  );
}
