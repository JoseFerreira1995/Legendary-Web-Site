import Header from "../layout/Header";
import LandingPage from "../features/LandingPage";
import ThrophySection from "../features/TrophySection";
import ShowcaseSection from "../features/ShowcaseSection";

const navMenuItems = [
  { label: "Project Submission" },
  { label: "Award Manual" },
  { label: "Jury Panel" },
  { label: "Gallery" },
  { label: "Contacts" },
];
export default function MainPage() {

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header menuItem={navMenuItems}></Header>
        <LandingPage></LandingPage>
        <ThrophySection></ThrophySection>
        <ShowcaseSection></ShowcaseSection>
      </div>
    </>
  );
}
