import Card from "./Card";

const Disscussion = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
  return (
    <div className="mt-5">
      <div className=" hidden lg:block">
        <span className="capitalize text-4xl text-red-600 rounded-md font-semibold bg-gray-300 p-3 ">
          Disscussion Fourm
        </span>
      </div>
      <div className=" mt-8 flex flex-col gap-8">
        {data.map((item, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default Disscussion;
