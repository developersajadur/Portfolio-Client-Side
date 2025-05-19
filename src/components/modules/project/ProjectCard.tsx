"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { LuGithub, LuArrowUpRight } from "react-icons/lu";
import { TProject } from "@/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const textLimit = (text: string, limit: number) =>
  text.length > limit ? text.substring(0, limit) + "..." : text;

const ProjectCard: React.FC<TProject> = ({
  name,
  description,
  technologies,
  liveUrl,
  clientSideUrl,
  serverSideUrl,
  imageUrl,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-all">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className="w-full h-[220px] object-cover rounded-t-md"
          />
          <CardHeader className="px-4 py-2 flex flex-col h-[130px] justify-between">
            <div>
              <CardTitle className="text-md">{textLimit(name, 30)}</CardTitle>
              <CardDescription>{textLimit(description, 70)}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-4 py-2">
            <div className="flex flex-wrap gap-2 mb-3">
              {technologies
                .join("")
                .split(",")
                .map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md"
                  >
                    {tech.trim()}
                  </span>
                ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent
        className="w-full bg-white dark:bg-gray-900 rounded-lg p-0"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <Card className="shadow-none">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className="w-full h-[220px] object-cover rounded-t-md"
          />
          <CardHeader className="px-4 py-2 flex flex-col justify-between">
            <div>
              <CardTitle className="text-md">{name}</CardTitle>
              <CardDescription className="h-32 overflow-y-auto p-2 dark:bg-gray-800 rounded-md">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-4 py-2">
            <div className="flex flex-wrap gap-2 mb-3">
              {technologies
                .join("")
                .split(",")
                .map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md"
                  >
                    {tech.trim()}
                  </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {clientSideUrl && (
                <a href={clientSideUrl} target="_blank">
                  <Button variant="ghost" size="sm" className="text-muted-foreground px-2 py-0">
                    <LuGithub className="cursor-pointer w-5 h-5" />
                    <span className="ml-1 text-xs">Client Side Repo</span>
                  </Button>
                </a>
              )}
              {serverSideUrl && (
                <a href={serverSideUrl} target="_blank">
                  <Button variant="ghost" size="sm" className="text-muted-foreground px-2 py-0">
                    <LuGithub className="cursor-pointer w-5 h-5" />
                    <span className="ml-1 text-xs">Server Side Repo</span>
                  </Button>
                </a>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank">
                  <Button variant="ghost" size="sm" className="text-muted-foreground px-2 py-0">
                    <LuArrowUpRight className="cursor-pointer w-5 h-5" />
                    <span className="ml-1 text-xs">Live</span>
                  </Button>
                </a>
              )}
            </div>

          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
