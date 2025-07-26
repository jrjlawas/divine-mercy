import Hero from "../../divine-components/heroAdmin";
import Cta from "../../divine-components/cta";
import RaffleLists from "../../divine-components/raffleLists";
import Footer from "../../divine-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
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

  return (
    <>
      <Hero user={sessionStorage.getItem("user")} />
      <RaffleLists />
      <Cta />
      <Footer />
      <BackToTop />
    </>
  );
};
export default AdminPage;
