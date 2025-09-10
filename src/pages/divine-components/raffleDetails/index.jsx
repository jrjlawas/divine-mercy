import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
import { useParams, useNavigate } from "react-router-dom";
// import Causes from "./components/Causes";

const RaffleDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!id) {
  //     navigate("/raffle"); // redirect if ID is missing
  //   }
  // }, [id, navigate]);
  return (
    <>
      <Hero />
      <SideBar raffleId={id} />
      {/* <Causes /> */}
    </>
  );
};
export default RaffleDetailsPage;
