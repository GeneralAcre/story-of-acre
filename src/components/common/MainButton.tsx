// src/app/link/page.tsx (or src/components/LinkButton.tsx)

"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // You'll need this for 'asChild' to work with Link

const AddButton = [
  { name: "Github", link: "https://github.com/GeneralAcre" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/sanpaphat-porntongprasert/" },
  { name: "Resume", link: "/Sanpaphat-Porntongprasert-Resume.pdf" },
];

export default function LinkButton() {
  return (
    <div className="flex justify-center items-center space-x-4">
      {AddButton.map((buttonData) => {
        const isResumeButton = buttonData.name === "Resume";
        if (isResumeButton) {
          return (
            <a
              key={buttonData.name}
              href={buttonData.link}
              download="Sanpaphat-Porntongprasert-Resume.pdf"
            >
              <Button>{buttonData.name}</Button>
            </a>
          );
        }
        return (
          <Link
            key={buttonData.name}
            href={buttonData.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>{buttonData.name}</Button>
          </Link>
        );
      })}
    </div>
  );
}