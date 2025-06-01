const LoadingCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl animate-pulse">
      <figure>
        <div className="w-full h-64 bg-gray-300 rounded-xl" />
      </figure>
      <div className="card-body space-y-4">
        <div className="bg-gray-300 h-6 w-44 rounded-full" />
        <div className="bg-gray-300 h-6 w-3/4 rounded" />
        <div className="bg-gray-300 h-4 w-full rounded" />
        <div className="bg-gray-300 h-4 w-5/6 rounded" />
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-300" />
            <div className="bg-gray-300 h-4 w-20 rounded" />
          </div>
          <div className="bg-gray-300 h-4 w-16 rounded" />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
