import { MorphingText } from "@/components/magicui/morphing-text";
 
const texts = [
  ["SANPAPHAT", "PORNTONGPRASERT"], // Split into two parts
  "サンパパット ポントンプラサート"
];
 
export function MorphingTextDemo() {
  return <MorphingText texts={texts} />;
}