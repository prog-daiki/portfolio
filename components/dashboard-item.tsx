"use client";

import { AppWindow, ArrowRight, Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

const tools = [
  {
    label: "Works",
    icon: AppWindow,
    href: 'works',
    color: 'text-violet-500',
    bgColor: "text-violet-500/10",
  },
  {
    label: 'Article',
    icon: Newspaper,
    href: '/article',
    color: 'text-pink-700',
    bgColor: 'text-pink-700/10',
  }
]


const DashboardItem = () => {
  const router = useRouter();

  return (
    <>
      <div className="px-4 md:px-20 lg:px-32 space-y-8">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4  flex items-center justify-between hover:shadow-md transition cursor-pointer
            border border-input bg-background hover:bg-white/10 hover:text-accent-foreground
            "
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </>
  )
}

export default DashboardItem
