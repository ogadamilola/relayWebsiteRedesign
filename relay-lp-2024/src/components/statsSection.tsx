"use client";

import { Separator } from "@/components/ui/separator";

interface Stats {
  title: string;
  percentage: string;
  description: string;
}

interface StatsSectionProps {
  stats: Stats[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="relative section text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stats, index) => (
          <div
            key={index}
            className="flex flex-col align-start text-start text-black bg-relaydigital-silver rounded-2xl gap-2 p-5"
          >
            <h3 className="text-p3 text-relaydigital-blue font-bold">
              {stats.title}
            </h3>
            <Separator
              orientation="horizontal"
              className="bg-relaydigital-blue"
            />
            <p className="text-h4 font-geometos-soft font-extrabold">
              {stats.percentage}
            </p>
            <p className="text-p3">{stats.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
