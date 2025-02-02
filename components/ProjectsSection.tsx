"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedTabs } from "@/components/animated-tabs";
import { useState } from "react";

const projectTabs = [
  { id: "all", label: "Alle" },
  { id: "industrial", label: "Industrieel" },
  { id: "artistic", label: "Artistiek" },
  { id: "custom", label: "Op Maat" },
];

const projects = [
  {
    img: "images/project1.jpg",
    alt: "Precisielassen met atmosferische verlichting",
    title: "Artistiek Metaalwerk",
    description:
      "Gespecialiseerde lastechnieken met precieze controle voor unieke kunstwerken.",
    category: "artistic",
  },
  {
    img: "images/project2.jpg",
    alt: "Precisie slijpwerk",
    title: "Oppervlakteafwerking",
    description:
      "Professionele metaaloppervlaktebehandeling voor een perfecte afwerking.",
    category: "industrial",
  },
  {
    img: "images/project3.jpg",
    alt: "Industrieel lasproces",
    title: "Industriële Oplossingen",
    description:
      "Zware lasmogelijkheden voor grootschalige industriële toepassingen.",
    category: "industrial",
  },
  {
    img: "images/project1.jpg",
    alt: "Precisie snijden met vonken",
    title: "Op Maat Snijden",
    description:
      "Nauwkeurige metaalsnijdiensten voor specifieke klantvereisten.",
    category: "custom",
  },
  {
    img: "images/project2.jpg",
    alt: "Professionele metaalbewerking",
    title: "Professionele Fabricage",
    description:
      "Deskundige metaalfabricagediensten met oog voor detail en kwaliteit.",
    category: "industrial",
  },
  {
    img: "images/project3.jpg",
    alt: "Gespecialiseerd laswerk",
    title: "Gespecialiseerd Lassen",
    description:
      "Geavanceerde lastechnieken voor complexe en unieke projecten.",
    category: "custom",
  },
];

export function ProjectsSection() {
  const [activeProjectTab, setActiveProjectTab] = useState("all");

  const filteredProjects =
    activeProjectTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeProjectTab);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white tracking-tight">
          Onze Projecten
        </h2>
        <div className="mb-12">
          <AnimatedTabs tabs={projectTabs} onTabChange={setActiveProjectTab} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group bg-zinc-900/50 backdrop-blur-sm border-zinc-700 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.img || "/placeholder.svg"}
                  alt={project.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-zinc-900"
                  >
                    Meer Info
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white tracking-wide">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sky-400 text-sm uppercase tracking-wide">
                  {project.category}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
