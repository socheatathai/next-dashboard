

const TopCards = () => {
  return (
    <div>
      <div className="grid lg:grid-color-5 gap-4 p-4"></div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$7,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <div className="bg-green-200 flex justify-center items-center p-2 rounded-lg ">
          <span className="text-green-700 text-lg">+18%</span>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$144,533,03</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <div className="bg-green-200 flex justify-center items-center p-2 rounded-lg ">
          <span className="text-green-700 text-lg">+55%</span>
        </div>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$17,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <div className="bg-green-200 flex justify-center items-center p-2 rounded-lg ">
          <span className="text-green-700 text-lg">+12%</span>
        </div>
      </div>
    </div>
  );
}

export default TopCards