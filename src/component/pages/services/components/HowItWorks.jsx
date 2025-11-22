export default function HowItWorks({ steps }) {
  return (
    <div className="min-h-full flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-[0_12px_40px_0_rgba(0,115,223,0.16)] p-8 sm:p-12 lg:p-16">
        <h1 className="text-3xl font-medium sm:text-4xl lg:text-5xl text-center text-gray-800 mb-12 sm:mb-16">
          How it works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                p-5 shadow-sm rounded-xl bg-white
                transform-gpu transition-all duration-500  
                hover:-translate-y-2 hover:rotate-1 hover:scale-[1.03]
                hover:shadow-xl
              "
            >
              <div
                className={`flex flex-col items-center text-center ${
                  step.extraClasses || ""
                }`}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
                  <img src={step.img} alt={step.title} />
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
