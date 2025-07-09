"use client"; // This ensures the component is a Client Component for interactivity

import { Button } from "@/components/ui/button";

// The array of button data
const AddButton = [
  { name: "Github", link: "https://github.com/GeneralAcre" },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sanpaphat-porntongprasert-0b239b321/overlay/contact-info/",
  },
];

export default function LinkButton() {
  return (
    <div className="flex justify-center items-center space-x-4">
      {/* Map over the AddButton array to render multiple Buttons */}
      {AddButton.map((buttonData) => (
        // Wrap the Button component with an <a> tag for direct navigation
        <a
          key={buttonData.name} // Key should still be on the outermost mapped element
          href={buttonData.link} // The actual link URL
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Recommended for security when using target="_blank"
          // You might want to add some styling to the <a> tag if it affects layout,
          // but the Button component's styling should largely take over.
        >
          <Button
            // The Button component itself no longer needs the onClick for navigation
            // or the data-link prop, as the <a> tag handles it.
            // You can still pass other props like 'variant' or 'size' if your Button component supports them.
            // Example: variant="outline" size="lg"
          >
            {buttonData.name} {/* This will display "Github" or "Linkedin" */}
          </Button>
        </a>
      ))}
    </div>
  );
}

