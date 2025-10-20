// It wrap the entire application so we can apply every single route in the app

import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel,located in the heart of the Italian Dolomites,surrounded bu beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by the wild oasis</footer>
      </body>
    </html>
  );
}
