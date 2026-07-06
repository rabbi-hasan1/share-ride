import { ArrowDown, DollarSign, MapPin } from "lucide-react";

function ConfirmRide() {
  return (
    <div className="w-full flex flex-col  p-4">
      <ArrowDown size={30} className="mb-2 mx-auto pt-0" />

      <h3 className="text-2xl text-left font-medium mb-4">Confirm Ride</h3>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4G4b7q6HE1n6T3k1KUZ80Een98VGCkLX9MA&s"
        alt="Ride"
        className="w-full max-w-md rounded-lg object-cover"
      />

      <div className="w-full max-w-md flex items-center gap-3 mt-6 border-b pb-4">
        <MapPin size={22} className="mt-1 text-red-500" />

        <div>
          <h2 className="text-lg font-semibold">562/11A</h2>
          <p className="text-gray-600">
            Shajahanpur Thana, Bogra, Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="w-full max-w-md flex items-center gap-3 mt-6 border-b pb-4">
        <MapPin size={22} className="mt-1 text-red-500" />

        <div>
          <h2 className="text-lg font-semibold">562/11A</h2>
          <p className="text-gray-600">
            Shajahanpur Thana, Bogra, Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="w-full max-w-md flex items-center gap-3 mt-6  pb-4">
        <DollarSign size={22} className="mt-1 text-red-500" />

        <div>
          <h2 className="text-lg font-semibold">$20</h2>
          <p className="text-gray-600">Estimated fare for this ride</p>
        </div>
      </div>

      <button className="w-full cursor-pointer max-w-md bg-blue-500 text-white py-3 rounded-lg mt-6">
        Confirm Ride
      </button>
    </div>
  );
}

export default ConfirmRide;
