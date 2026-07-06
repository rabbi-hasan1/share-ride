import { MapPin } from "lucide-react";

//dummy location data for now, will be replaced with actual data from api in future
const locationData = [
  {
    id: 1,
    location: "Shajahanpur thana ,Bogra, dhaka bangladesh",
  },
  {
    id: 2,
    location: "Shajahanpur thana ,Bogra, dhaka bangladesh",
  },
  {
    id: 3,
    location: "Shajahanpur thana ,Bogra, dhaka bangladesh",
  },
];

function LocationSearchPanel({ setPanelOpen, setVehicalPanelOpen }) {
  return (
    <div>
      {locationData.map((location) => (
        <div
          key={location.id}
          onClick={() => {
            setPanelOpen(false);
            setVehicalPanelOpen(true);
          }}
          className=" w-sm  border p-2 rounded-md active:border-2 cursor-pointer py-3  flex justify-start items-center gap-4 my-2 ml-6"
        >
          <div className="border w-fit border-gray-200 p-1 rounded-full">
            <MapPin size={20} />
          </div>
          <h3 className=" font-medium ">{location.location}</h3>
        </div>
      ))}
    </div>
  );
}

export default LocationSearchPanel;
