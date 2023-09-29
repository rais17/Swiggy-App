import { AiOutlineSearch } from "react-icons/ai";

export const Shimmer = () => {
  return (
    <div className="mx-auto min-h-screen w-11/12 max-w-[1150px] animate-pulse space-y-8 py-8">
      <div className="flex gap-5 ">
        {Array.from({ length: 3 }).map((el, index) => {
          return (
            <div
              key={index}
              className="max-w-xs bg-gray-200 h-52 w-80 rounded-2xl"
            ></div>
          );
        })}
      </div>

      <div className="h-5 bg-gray-200 rounded-lg w-72"></div>

      <div className="flex flex-wrap gap-6 mt-4">
        {Array.from({ length: 8 }).map((el, index) => {
          return (
            <div key={index} className="flex flex-col items-center space-y-5">
              <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
              <div className="h-1.5 w-16 rounded-md bg-gray-200"></div>
            </div>
          );
        })}
      </div>

      <div className=" h-[1px] w-full bg-gray-200"></div>

      <div className="w-40 h-5 bg-gray-200 rounded-lg"></div>
    </div>
  );
}

export const ShimmerOffer = () => {
  return (
    <div className="mx-auto mt-20 flex min-h-screen w-11/12 max-w-[1100px] flex-col space-y-7">
      <div className="h-5 w-[500px] animate-pulse rounded bg-gray-200"></div>

      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 16 }).map((el, index) => {
          return (
            <div key={index} className="w-64 space-y-4 animate-pulse">
              <div className="w-full h-40 max-w-xs bg-gray-200 rounded-2xl"></div>
              <div className="flex flex-col gap-1">
                <div className="w-32 h-3 bg-gray-200 rounded-md"></div>
                <div className="h-2.5 w-24 rounded-md bg-gray-200"></div>
                <div className="w-56 h-3 bg-gray-200 rounded-md"></div>
                <div className="h-2.5 w-32 rounded-md bg-gray-200"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const ShimmerSearch = () => {
  return (
    <div className="mx-auto min-h-screen w-11/12 max-w-[1150px] py-8 animate-pulse flex justify-center-center">

        <div className="flex flex-col w-2/3 space-y-3">
          <div className="flex flex-col h-4 space-y-2 bg-gray-200 rounded w-52 animate-pulse"></div>
          {Array.from({ length: 3 }).map((el) => {
            return (
              <div className="flex items-center gap-x-3">
                <AiOutlineSearch />
                <div className="h-4 bg-gray-200 rounded-md w-96"></div>
              </div>
            );
          })}
        </div>

    </div>
  );
}

export const ShimmerRestaurantMenu = () => {
  return (
    <div className="w-full min-h-screen my-6">

      <div className="max-w-[800px] mx-auto w-11/12">
        {
          Array.from({ length: 6 }).map(item => {
            return (
              <div className="flex items-center justify-between w-full py-6 border-b-2 animate-pulse">
                {/* left */}
                <div className="flex flex-col w-full space-y-4">
                  <div className="space-y-1">
                    <div className="w-64 h-3.5 bg-gray-200 rounded-md"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded-md"></div>
                  </div>
                  <div>
                    <div className="w-2/3 h-3 bg-gray-200 rounded-md"></div>
                    <div className="w-32 h-3 mt-1 bg-gray-200 rounded-md"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-32 bg-gray-200 rounded-md aspect-square"></div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}