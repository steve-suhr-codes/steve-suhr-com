import Icons from "./Icons";

export default function MainFooter() {

  return (
    <div className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row items-center sm:items-stretch justify-between">
        {/* Left side */}
        <div className="flex flex-col justify-center text-center sm:text-left mb-4 sm:mb-0">
        <span className="font-bold text-lg">Steve Suhr</span>
        <span className="text-sm text-gray-300">Senior Software Developer</span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px bg-gray-600 mx-6"></div>

        {/* Right side */}
        <div className="flex space-x-6 pb-5">
          <Icons />
        </div>
    </div>
  );
}