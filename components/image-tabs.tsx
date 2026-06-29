"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize"); //organize , hired , boards
  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4 ">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex gap-2 justify-center b-8">
          <Button
            onClick={() => setActiveTab("organize")}
            className={`hover:bg-primary hover:text-white ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Organize Applications
          </Button>
          <Button
            onClick={() => setActiveTab("hired")}
            className={`hover:bg-primary hover:text-white ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Get Hired
          </Button>
          <Button
            onClick={() => setActiveTab("boards")}
            className={`hover:bg-primary hover:text-white ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Manage Boards
          </Button>
        </div>
        <div className="m-4 relative shadow-xl mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200">
          {activeTab === "organize" && (
            <Image
              src="/hero-images/img1.png"
              alt="Organize Applications"
              width={1200}
              height={800}
            />
          )}
          {activeTab === "hired" && (
            <Image
              src="/hero-images/img2.png"
              alt="Get Hired"
              width={1200}
              height={800}
            />
          )}
          {activeTab === "boards" && (
            <Image
              src="/hero-images/img3.png"
              alt="Manage Boards"
              width={1200}
              height={800}
            />
          )}
        </div>
      </div>
    </div>
  </section>)
}
