import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronsDown, User } from "lucide-react";
import { useRef, useState } from "react";
import logo from "../assets/uber.png";
import LocationSearchPanel from "../components/LocationSearchPanel";
function CaptainHome() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
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
          <LocationSearchPanel />
        </div>
        <div className="w-full h-fit py-9 bg-white fixed bottom-0 ">
          <h3 className="text-2xl font-medium ml-8 md:ml-96 pb-4 ">
            Chose a Vechicle
          </h3>
          <div className=" w-[90%] md:w-[60%] md:mx-auto mx-[5%] flex justify-between items-center border-2 my-4 p-4 rounded-lg active:border-amber-600 cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4G4b7q6HE1n6T3k1KUZ80Een98VGCkLX9MA&s"
              alt="UberGo"
              className="w-20"
            />

            <div className="flex-1 ml-8">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-lg">UberGo</h1>
                <User size={18} />
                <span>4</span>
              </div>

              <h2 className="text-sm font-medium">2 Minutes Away</h2>
              <h3 className="text-sm text-gray-500">
                Affordable, compact ride
              </h3>
            </div>

            <h3 className="font-semibold text-lg">193.20 tk</h3>
          </div>
          <div className=" w-[90%] md:w-[60%] md:mx-auto mx-[5%] flex justify-between items-center my-4 border-2 p-4 rounded-lg active:border-amber-600 cursor-pointer">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n"
              alt="UberGo"
              className="w-20"
            />

            <div className="flex-1 ml-8">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-lg">UberGo</h1>
                <User size={18} />
                <span>1</span>
              </div>

              <h2 className="text-sm font-medium">2 Minutes Away</h2>
              <h3 className="text-sm text-gray-500">
                Affordable, compact ride
              </h3>
            </div>

            <h3 className="font-semibold text-lg">65 tk</h3>
          </div>
          <div className="w-[90%] md:w-[60%] md:mx-auto mx-[5%] flex justify-between items-center my-4 border-2 p-4 rounded-lg active:border-amber-600 cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsHsUkqfZev5igOcp-YoZmhf7VKQUYseC3yhf5ljGfA&s"
              alt="UberGo"
              className="w-20"
            />

            <div className="flex-1 ml-8">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-lg">UberGo</h1>
                <User size={18} />
                <span>5</span>
              </div>

              <h2 className="text-sm font-medium">2 Minutes Away</h2>
              <h3 className="text-sm text-gray-500">
                Affordable, compact ride
              </h3>
            </div>

            <h3 className="font-semibold text-lg">30 tk</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptainHome;
