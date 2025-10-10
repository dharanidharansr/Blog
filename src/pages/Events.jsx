import React, { useRef } from "react";
import Background from "../components/Background";
import FunFacts from "../components/FunFacts";
import Resources from "../components/Resources";

const funFacts = [
  "- I play cricket sometimes",
  "- I am a fast cloner",
  "- I love exploring new tech",
];

const resources = [
  { name: "Writings", url: "/" },
  { name: "Resources", url: "/resources" },
  { name: "Instagram", url: "https://www.instagram.com/_patrick_bateman.18" },
  { name: "LinkedIn", url: "https://linkedin.com/in/dharanidharansr" },
];

const events = [
  { name: "Synergize'25", type: "paper presentation", result: "2nd Place", status: "second" },
  { name: "BYTS INDIA HACKATHON 1.0", type: "Hackathon", result: "Lost", status: "lost" },
  { name: "POC'25", type: "project presentation", result: "3rd Place", status: "third" },
  { name: "SIH 2024", type: "Hackathon", result: "Lost", status: "lost" },
  { name: "AI-Conclave 1.0", type: "workshop", result: "participated", status: "success" },
  { name: "Hacksphere'25", type: "Hackathon", result: "Lost", status: "lost" },
  { name: "Techno Cultural Fest - 2025", type: "project presentation", result: "Lost", status: "lost" },
   { name: "STEP'25", type: "workshop", result: "participated", status: "success" }
];

const getStatusColor = (status) => {
  switch (status) {
    case "first":
      return "text-yellow-400";
    case "second":
      return "text-gray-300";
    case "third":
      return "text-amber-600";
    case "success":
      return "text-green-400";
    case "lost":
      return "text-red-400";
    default:
      return "text-zinc-400";
  }
};

const getTypeColor = (type) => {
  switch (type.toLowerCase()) {
    case "hackathon":
      return "text-blue-400";
    case "workshop":
      return "text-purple-400";
    case "paper presentation":
      return "text-green-400";
    case "project presentation":
      return "text-orange-400";
    default:
      return "text-zinc-400";
  }
};

export default function EventsPage() {
  const birthDate = useRef(new Date("2006-11-13T23:59:00Z"));

  // Calculate statistics
  const totalEvents = events.length;
  const wins = events.filter(e => e.status === "first").length;
  const successfulParticipations = events.filter(e => e.status !== "lost").length;
  const successRate = ((successfulParticipations / totalEvents) * 100).toFixed(1);

  return (
    <Background>
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-4 py-8 font-sans flex flex-col min-h-screen">
        {/* Top columns */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
          <FunFacts birthDate={birthDate.current} facts={funFacts} />
          <div className="hidden sm:block">
            <Resources resources={resources} highlight="Events" />
          </div>
        </div>
        {/* Separator */}
        <hr className="border-t border-[#232323] my-6" />
        {/* Events results */}
        <div className="text-[#f5f5f7] text-md mx-2">
          My event journey - hackathons, conferences, workshops, and everything in between:
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse text-base sm:text-sm border border-[#232323]">
              <thead>
                <tr>
                  <th className="py-2 px-3 font-semibold text-zinc-400 border border-[#232323] bg-[#18181b]">
                    Event
                  </th>
                  <th className="py-2 px-3 font-semibold text-zinc-400 border border-[#232323] bg-[#18181b]">
                    Type
                  </th>
                  <th className="py-2 px-3 font-semibold text-zinc-400 border border-[#232323] bg-[#18181b]">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td className="py-2 px-3 text-zinc-400 border border-[#232323]">
                      {event.name}
                    </td>
                    <td className={`py-2 px-3 border border-[#232323] font-medium ${getTypeColor(event.type)}`}>
                      {event.type}
                    </td>
                    <td className={`py-2 px-3 border border-[#232323] font-medium ${getStatusColor(event.status)}`}>
                      {event.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12">
          <div className="grid grid-cols-3 gap-4 mx-2">
            <div className="bg-[#18181b] border border-[#232323] rounded-sm p-4 text-center">
              <div className="text-2xl font-bold text-[#f5f5f7]">{totalEvents}</div>
              <div className="text-sm text-zinc-400">Total Events</div>
            </div>
            <div className="bg-[#18181b] border border-[#232323] rounded-sm p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{wins}</div>
              <div className="text-sm text-zinc-400">Wins</div>
            </div>
            <div className="bg-[#18181b] border border-[#232323] rounded-sm p-4 text-center">
              <div className="text-2xl font-bold text-[#38bdf8]">{successRate}%</div>
              <div className="text-sm text-zinc-400">Success Rate</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 block sm:hidden">
          <Resources resources={resources} highlight="Events" />
        </div>
      </div>
    </Background>
  );
}
