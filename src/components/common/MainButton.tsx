// src/app/link/page.tsx (or src/components/LinkButton.tsx)

"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // You'll need this for 'asChild' to work with Link

const AddButton = [
  { name: "Github", link: "https://github.com/GeneralAcre" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/sanpaphat-porntongprasert-0b239b321/overlay/contact-info/" },
  { name: "Resume", link: "https://drive.google.com/drive/u/3/folders/15jSRsKVAzv75epQmutLIzA_yjgoYTniX" },
];

export default function LinkButton() {
  return (
    <div className="flex justify-center items-center space-x-4">
      {AddButton.map((buttonData) => {
        const isResumeButton = buttonData.name === "Resume";
        const target = isResumeButton ? "_self" : "_blank";
        const rel = isResumeButton ? undefined : "noopener noreferrer";
        return (
          <Link
            key={buttonData.name}
            href={buttonData.link}
            passHref
            target={target}
            rel={rel}
            {...(isResumeButton && { download: "Sanpaphat_Porntongprasert_Resume.pdf" })}
          >

            <Button>
              {buttonData.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}