import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full ">
      <div className="max-w-screen-2xl mx-auto pb-10 px-5 py-5  flex gap-1">
        <Card width={"basis-1/3"} h1={true} start={false} para={true} />
        <Card width={"basis-2/3"} start={true} para={false} hover="true" />
      </div>
    </div>
  );
};

export default Cards;
