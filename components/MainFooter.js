import Icons from "./Icons";

export default function MainFooter() {

  return (
    <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center justify-between">
      {/* Left side */}
      <div className="flex flex-col justify-center text-center mb-4">
        <span className="font-bold text-lg">Steve Suhr</span>
        <span className="text-sm text-gray-300">Senior Software Developer</span>
      </div>

      {/* Divider — always hidden */}
      {/* Removed since on smallest size it’s hidden */}

      {/* Right side */}
      <div className="flex space-x-6 pb-5">
        <Icons />
      </div>
    </div>
  );
}