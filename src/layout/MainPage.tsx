import ContentPage from "./ContentPage";
import Header from "./Header";
import LandingPage from "./LandingPage";

export default function MainPage() {

  // Criar ficheiro para colocar todas as const ou props
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
        <ContentPage></ContentPage>
      </div>
    </>
  );
}
