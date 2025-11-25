const StatsSection = () => {
  const data = [
    {
      id: 101,
      title: "20M+",
      subtitle: "Active Users" 
    },
    {
      id: 102,
      title: "50,000+",
      subtitle: "Students Booked",
    },
    {
      id: 103,
      title: "10,000+",
      subtitle: "Properties",
    },
    {
      id: 104,
      title: "700+",
      subtitle: "Cities",
    }
  ]

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {data.map((item, index) => (
              <div 
                key={item.id} 
                className="flex flex-col items-center text-center relative"
              >
                {/* Divider line - hidden on mobile for first column, on desktop for last item */}
                {index < data.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                )}
                
                <h3 className="text-xl md:text-3xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 font-medium">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection