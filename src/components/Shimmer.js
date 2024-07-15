const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="m-4 p-2 w-[300px] h-[360px] bg-gray-100 rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
