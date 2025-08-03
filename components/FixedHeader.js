import Icons from './Icons';

export default function FixedHeader() {
    return (
      <header className="fixed inset-0 z-0 flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-blue-500 text-white">
        <img src="/images/Steve.jpeg" alt="Steve Suhr Profile Image" className="w-64 rounded-xl" />
        <h1 className="text-5xl font-bold mt-4 mx-10">Steve Suhr</h1>
        <p className="my-4 text-xl">Senior Software Engineer</p>
        <Icons />
      </header>
    );
}