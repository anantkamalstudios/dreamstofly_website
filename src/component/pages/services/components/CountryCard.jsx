const CountryCard = ({ country }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 min-w-max group">
    <div className="flex items-center gap-4">
      <div className="relative">
        {country.image ? (
          <img
            src={country.image}
            alt={`${country.name} flag`}
            className="w-10 h-10 rounded-full object-cover shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow duration-300"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}

        <div
          className={`w-10 h-8 ${
            country.color
          } rounded-md flex items-center justify-center shadow-sm ${
            country.image ? "hidden" : "flex"
          }`}
        >
          <span
            className={`text-xs font-bold ${
              country.color.includes("white")
                ? "text-red-600"
                : country.color.includes("yellow")
                ? "text-black"
                : "text-white"
            }`}
          >
            {country.code}
          </span>
        </div>

        {!country.image && country.flag && (
          <div className="absolute -top-1 -right-1 text-sm opacity-70 rounded-full w-8 h-8 flex items-center justify-center bg-white shadow">
            {country.flag}
          </div>
        )}
      </div>

      <div>
        <span className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {country.name}
        </span>
      </div>
    </div>
  </div>
);

export default CountryCard;
