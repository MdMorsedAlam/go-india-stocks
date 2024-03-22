import Card from "./Card";

const Disscussion = () => {
  // This Array Data Use For Maping
  const data = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
  return (
    <div className="mt-5">
      <div className=" hidden lg:block">
        {/* This Is The Title Of Large Device */}
        <span className="capitalize text-4xl text-red-600 rounded-md font-semibold bg-gray-300 p-3 ">
          Disscussion Fourm
        </span>
      </div>
      {/* This Div Use For Map Data */}
      <div className=" mt-8 flex flex-col gap-8">
        {data.map((item, i) => (
          // This Is The Card Component Use For Show Single Data
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default Disscussion;
