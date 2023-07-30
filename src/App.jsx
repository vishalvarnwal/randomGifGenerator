import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="h-screen background w-screen overflow-x-hidden flex flex-col items-center">
      <h1 className="bg-white rounded-md text-black font-bold text-3xl w-11/12 text-center mt-[40px] py-2">
        RANDOM GIFS
      </h1>
      <Random />
      <Tag />
    </div>
  );
}
