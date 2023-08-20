import { BottomlineSection } from "./components/bottomline";
import { MidlineSection } from "./components/midline-section";
import { ToplineSection } from "./components/topline-section";

export const Header = () => {
  return (
    <header>
      <ToplineSection />
      <MidlineSection />
      <BottomlineSection />
    </header>
  );
}
