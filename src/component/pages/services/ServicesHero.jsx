export default function ServicesHero({ hero, counter }) {
  return (
    <div className="bg-gray-100 pb-6 md:pb-8 lg:pb-12">
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 relative overflow-visible h-auto md:h-[87vh] lg:h-[100vh] xl:h-[90vh]">
        <div className="max-w-full mx-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-8 md:py-0">
            <div className="text-white space-y-4 lg:space-y-6 px-5 sm:px-8 md:px-16 flex flex-col justify-center">
              <div>
                <p className=" text-xs sm:text-sm font-medium mb-4 lg:mb-6 tracking-wider text-white">
                  {hero?.subtitle}
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide">
                  {hero?.title}
                </h1>
              </div>

              <div
                className="text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed  text-white text-color-white"
                dangerouslySetInnerHTML={{ __html: hero?.description }}
              ></div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-white text-blue-600 px-6 sm:px-10 py-2.5 sm:py-3 font-medium hover:bg-blue-50 flex items-start justify-center gap-2 text-sm transition-all ">
                  {hero?.button_text}
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Side - Girl Image with Orange Quarter Circle */}
            <div className="relative flex items-end justify-end h-full min-h-[400px] md:min-h-0">
              {/* Orange Quarter Circle Background - Positioned behind girl */}
              <div
                className="absolute bottom-0 right-0 rounded-tl-full pointer-events-none"
                style={{
                  width: "55%",
                  height: "55%",
                  backgroundColor: "#EB662B",
                  zIndex: 1,
                }}
              ></div>

              {/* Girl Image - On top of orange circle */}
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}${hero?.image}`}
                alt="Graduate student"
                className="relative w-full h-full object-contain object-bottom rounded-tl-[40px] sm:rounded-tl-[60px] lg:rounded-tl-[100px]"
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
        </div>

        {/* Stats Card - Overlapping bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] sm:w-[85%] max-w-6xl z-30">
          <div className="bg-white shadow-xl border border-gray-100 py-2 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-start lg:border-r border-[#003E79]">
                <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#003E79] mb-1 sm:mb-2">
                  {counter[1]?.counter_value}
                </h3>
                <p className=" text-gray-700 text-xs sm:text-sm lg:text-base">
                  {counter[1]?.counter_text}
                </p>
              </div>

              <div className="text-start lg:border-r border-[#003E79]">
                <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#003E79] mb-1 sm:mb-2">
                  {counter[2]?.counter_value}
                </h3>
                <p className=" text-gray-700 text-xs sm:text-sm lg:text-base">
                  {counter[2]?.counter_text}
                </p>
              </div>

              <div className="text-start lg:border-r border-[#003E79] pt-4 sm:pt-6 lg:pt-0">
                <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#003E79] mb-1 sm:mb-2">
                  {counter[3]?.counter_value}
                </h3>
                <p className="  text-gray-700 text-xs sm:text-sm lg:text-base">
                  {counter[3]?.counter_text}
                </p>
              </div>

              <div className=" text-start border-t-2 lg:border-t-0 border-gray-200 pt-4 sm:pt-6 lg:pt-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#003E79] mb-1 sm:mb-2">
                  {counter[4]?.counter_value}
                </h3>
                <p className=" text-gray-700 text-xs sm:text-sm lg:text-base">
                  {counter[4]?.counter_text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for overlapping stats - Responsive height */}
      <div className="h-20 sm:h-10 md:h-28 lg:h-16 bg-gray-100"></div>
    </div>
  );
}
