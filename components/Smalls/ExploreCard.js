import { Luggage } from "lucide-react";

export default function ExploreCard() {
    return (
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-pink-300 text-pink-500 font-semibold text-sm">
        Explore the world!
<Luggage size={20} />        
        {/*  <span className="material-icons text-pink-500">work</span> */}
      </button>
    );
  }
  