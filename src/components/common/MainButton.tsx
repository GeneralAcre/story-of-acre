// src/app/link/page.tsx (or src/components/LinkButton.tsx)

"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // You'll need this for 'asChild' to work with Link

const AddButton = [
  { name: "Github", link: "https://github.com/GeneralAcre" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/sanpaphat-porntongprasert/" },
  { name: "Resume", link: "https://drive.google.com/file/d/1awqIDkT6yxNsG2kos8e1v67X-Byh0nKN/view?usp=sharing" },
];

export default function LinkButton() {
  return (
    <div className="flex justify-center items-center space-x-4">
      {AddButton.map((buttonData) => {
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