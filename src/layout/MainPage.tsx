import Header from "./Header";

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
      <Header menuItem={navMenuItems}></Header>
    </>
  );
}
