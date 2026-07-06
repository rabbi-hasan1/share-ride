import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronsDown } from "lucide-react";
import { useRef, useState } from "react";
import logo from "../assets/uber.png";
import ConfromRide from "../components/ConfromRide";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehicalPanel from "../components/VehicalPanel";

function CaptainHome() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehicalPanelRef = useRef(null);
  const confromRidePanelRef = useRef(null);
  const [vehicalPanelOpen, setVehicalPanelOpen] = useState(false);
  const [confromRidePanelOpen, setConfromRidePanelOpen] = useState(false);
  const panelRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "100%",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehicalPanelOpen) {
      gsap.to(vehicalPanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(vehicalPanelRef.current, {
        y: "100%",
      });
    }
  }, [vehicalPanelOpen]);

  useGSAP(() => {
    if (confromRidePanelOpen) {
      gsap.to(confromRidePanelRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(confromRidePanelRef.current, {
        y: "100%",
      });
    }
  }, [confromRidePanelOpen]);

  return (
    <div className="relative">
      <div>
        <img src={logo} className="w-16  absolute top-8 left-9" />
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="no image"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="w-full flex flex-col justify-end h-screen absolute  top-0">
        <div className=" w-full h-[20%] bg-white relative p-3 ">
          <h2 className="text-2xl font-medium p-2 px-12">Find a Trip</h2>
          <ChevronsDown
            onClick={() => setPanelOpen(!panelOpen)}
            className="absolute top-8 right-8"
          />
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="line w-1 h-19 bg-black absolute top-[38%] left-19 "></div>
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
              type="text"
              placeholder="Add a pick-up location"
              className=" w-[70%]  mx-12 border mb-4 border-gray-300 rounded-md bg-[#eeeeee] px-8 py-2"
            />{" "}
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
              type="text"
              placeholder="Enter your destination"
              className=" w-[70%] mx-12 border border-gray-300 rounded-md bg-[#eeeeee] px-8 py-2"
            />
          </form>
        </div>
        <div ref={panelRef} className=" w-full h-0 bg-white overflow-hidden ">
          <LocationSearchPanel
            setVehicalPanelOpen={setVehicalPanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
        <div
          ref={vehicalPanelRef}
          className="w-full  z-10 h-fit translate-y-full py-9 bg-white fixed bottom-0 "
        >
          <VehicalPanel
            setVehicalPanelOpen={setVehicalPanelOpen}
            setConfromRidePanelOpen={setConfromRidePanelOpen}
          />
        </div>
        <div
          ref={confromRidePanelRef}
          className="w-full  z-10 h-fit translate-y-full py-9 bg-white fixed bottom-0 "
        >
          <ConfromRide />
        </div>
      </div>
    </div>
  );
}

export default CaptainHome;
