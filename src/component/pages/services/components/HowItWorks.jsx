import Heading from "../../../../common/Heading";

export default function HowItWorks({ steps }) {
  return (
    <div className="min-h-full flex items-center justify-center px-4 sm:px-12 py-8 ">
      <div className="w-full bg-white rounded-2xl shadow-[0_5px_10px_0_rgba(0,115,223,0.16)] p-8 sm:p-12 lg:p-16">
        <Heading text="How It Works" className="text-center mb-12 sm:mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                p-5 shadow-sm rounded-xl bg-white border border-gray-200
                transform-gpu transition-all duration-300 hover:-translate-y-2
              "
            >
              <div className="flex flex-col items-center text-center ">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
                  <img src={step.icon} alt={step.title} />
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed ">
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
