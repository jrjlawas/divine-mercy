import Hero from "../../divine-components/heroAdmin";
import Cta from "../../divine-components/cta";

import RaffleLists from "../../divine-components/raffleLists";
import RaffleRegister from "../../divine-components/raffleRegister";

import Footer from "../../divine-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RaffleEdit from "../../divine-components/raffleEdit";

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState("list");
  const [selectedRaffleId, setSelectedRaffleId] = useState(null);

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (!storedUser) {
      navigate("/church-login"); // Redirect to login if not logged in
    } else {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const savedSection = sessionStorage.getItem("activeSection");
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);
  const handleNavigation = (section) => {
    setActiveSection(section);
    sessionStorage.setItem("activeSection", section);
  };

  const handleEditClick = (raffleId) => {
    setSelectedRaffleId(raffleId);
    setActiveSection("edit");
  };

  const renderBodyComponent = () => {
    switch (activeSection) {
      case "register":
        return <RaffleRegister />;
      case "edit":
        return <RaffleEdit id={selectedRaffleId} />;
      case "list":
      default:
        return <RaffleLists onEditClick={handleEditClick} />;
    }
  };

  return (
    <>
      <Hero
        user={sessionStorage.getItem("user")}
        onNavigate={handleNavigation}
      />
      {renderBodyComponent()}
      <Cta />
      <Footer />
      <BackToTop />
    </>
  );
};
export default AdminPage;
