import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>The Wild Oasis Website.welcome to paradise</h1>
      <Link href="/cabins">Explore luxury cabins</Link>;
    </div>
  );
}
