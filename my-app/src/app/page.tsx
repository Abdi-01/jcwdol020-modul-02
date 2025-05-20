import Button from "@/components/Button";
import Image from "next/image";

// Functional component
export default function Home() {
  const titleButtons = [
    "Read More 1",
    "Read More 2",
    "Read More 3",
    "Read More 4",
  ]

  function printButton() {
    const buttonGroup = titleButtons.map((value: string, index: number) => {
      return <Button title={value} />
    })

    return buttonGroup;
  }
  return (
    <div>
      <div id="container" style={{ backgroundColor: "red", height: "200px" }}>
        <h1 className="text-9xl font-extrabold text-indigo-50">Intro my App</h1>
        {/* Memanggil component button dari folder components */}
        {printButton()}
      </div>
      <div id="container" style={{ backgroundColor: "red", height: "200px" }}>
        <h1 className="text-9xl font-extrabold text-indigo-50">Intro my App</h1>
      </div>
    </div>
  );
}
