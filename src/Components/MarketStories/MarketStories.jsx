import SingleItem from "./SingleItem";

const MarketStories = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="lg:m-5 ">
      <div className=" hidden lg:block">
        <span className="capitalize text-4xl text-red-600 rounded-md font-semibold bg-gray-300 p-3 overflow-hidden">
          Market Stories
        </span>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        {items.map((item, i) => (
          <SingleItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default MarketStories;
