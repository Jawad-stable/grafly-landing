import { ThemeProvider } from "next-themes";
import LandingPage from "@/pages/LandingPage";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LandingPage />
    </ThemeProvider>
  );
}
