const OurCommitments = () => {
  const items = [
    {
      img: "/mnt/data/Group 1000009660.png",
      title: "Easy Process",
    },
    {
      img: "/mnt/data/Group 1000009660.png",
      title: "Affordable Service",
    },
    {
      img: "/mnt/data/Group 1000009660.png",
      title: "Expert Guidance",
    },
    {
      img: "/mnt/data/Group 1000009660.png",
      title: "24/7 Service",
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <h2 className="text-3xl font-bold text-center">Our commitments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 mt-28">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 pt-16 relative flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 rounded-full border-4 border-blue-600 absolute -top-20 bg-white flex items-center       justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mt-24">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCommitments;
