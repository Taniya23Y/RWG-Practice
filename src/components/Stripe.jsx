/* eslint-disable react/prop-types */
const Stripe = ({ value }) => {
  return (
    <div className="min-w-[20em] px-8 py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between">
      <img className="h-6" src={value.url} alt="" />
      <span className="font-semibold text-lg">{value.number}</span>
    </div>
  );
};

export default Stripe;
