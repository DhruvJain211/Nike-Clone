import React from "react";

const Shoecard = ({ imageUrl, changebigshoeimage, bigShoeimg }) => {
  const Handleclick = () => {
    if (bigShoeimg !== imageUrl.bigShoe) {
      changebigshoeimage(imageUrl.bigShoe);
    }
  };
  return (
    <div
      className={` border-2 rounded-xl ${
        bigShoeimg === imageUrl.bigShoe
          ? "border-coral-red "
          : "border-transparent"
      } cursor-pointer flex-1 `}
      onClick={Handleclick}
    >
      <div className=" flex justify-center items-center  bg-cover bg-card bg-center sm:w-40 h-40  rounded-xl max-sm:p-4">
        <img src={imageUrl.thumbnail} width={127} height={103} />
      </div>
    </div>
  );
};

export default Shoecard;
