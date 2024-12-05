import { ComparisonViewer } from "@/components/comparison-viewer";
import { comparisons } from "@/data/item-data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ComparisonViewer comparisons={comparisons} />
    </div>
  );
}
