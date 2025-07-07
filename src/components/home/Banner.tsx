/* eslint-disable @next/next/no-img-element */
export default function Banner() {
  return (
    <div className="relative w-full  ">
      {/* Background image */}
      <img
        src="/home/banner.png"
        alt="Banner"
        className="w-full h-auto block"
      />

      {/* Overlay content
      <div className="absolute inset-0 flex items-center justify-center text-white p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to My Website</h1>
          <p className="mt-4">Here is some content on top of the banner</p>
        </div>
      </div> */}
    </div>
  );
}
