import { ArrowDown, User } from "lucide-react";

function VehicalPanel({ setConfromRidePanelOpen, setVehicalPanelOpen }) {
  return (
    <div>
      <ArrowDown
        onClick={() => setVehicalPanelOpen(false)}
        size={30}
        className="mx-auto mt-0.5"
      />
      <h3 className="text-2xl font-medium ml-8 md:ml-96 pb-4 ">
        Choose a Vehicle
      </h3>
      <div
        onClick={() => setConfromRidePanelOpen(true)}
        className=" w-[90%] md:w-[60%] md:mx-auto mx-[5%] flex justify-between items-center border-2 my-4 p-4 rounded-lg active:border-amber-600 cursor-pointer"
      >
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
          <h3 className="text-sm text-gray-500">Affordable, compact ride</h3>
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
          <h3 className="text-sm text-gray-500">Affordable, compact ride</h3>
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
          <h3 className="text-sm text-gray-500">Affordable, compact ride</h3>
        </div>

        <h3 className="font-semibold text-lg">30 tk</h3>
      </div>
    </div>
  );
}

export default VehicalPanel;
