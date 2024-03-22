import SingleItem from "./SingleItem";

const MarketStories = () => {
  // This Array Items Use For Maping
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="lg:m-5 ">
      <div className=" hidden lg:block">
        {/* This Is The Title Of Large Device */}
        <span className="capitalize text-4xl text-red-600 rounded-md font-semibold bg-gray-300 p-3 overflow-hidden">
          Market Stories
        </span>
      </div>
      {/* This Div Use For Map Data */}
      <div className="mt-8 flex flex-col gap-8">
        {items.map((item, i) => (
          // This Is The Component Use For Show Single Item
          <SingleItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default MarketStories;
