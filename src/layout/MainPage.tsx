import Header from "./Header";
import LandingPage from "./LandingPage";

export default function MainPage() {
  const navMenuItems = [
    { label: "Project Submission" },
    { label: "Award Manual" },
    { label: "Jury Panel" },
    { label: "Gallery" },
    { label: "Contacts" },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header menuItem={navMenuItems}></Header>
        <LandingPage></LandingPage>
      </div>
    </>
  );
}
