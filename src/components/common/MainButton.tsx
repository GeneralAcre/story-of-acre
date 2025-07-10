// src/app/link/page.tsx (or src/components/LinkButton.tsx)

"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // You'll need this for 'asChild' to work with Link

const AddButton = [
  { name: "Github", link: "https://github.com/GeneralAcre" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/sanpaphat-porntongprasert-0b239b321/overlay/contact-info/" },
];

export default function LinkButton() {
  return (
    <div className="flex justify-center items-center space-x-4">
      {AddButton.map((buttonData) => (
        <Link
          key={buttonData.name}
          href={buttonData.link}
          passHref // Pass the href down to the underlying <a> tag
          target="_blank" // Still opens in new tab
          rel="noopener noreferrer" // Security
        >
          <Button >
            {buttonData.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}