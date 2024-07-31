type TPriceCard = {
  title: string;
  desc: string;
  price: string;
  disPrice: string;
  className:string
};

const PriceCard = ({ title, desc, price, disPrice , className }: TPriceCard) => {
  return (
    <section className={`lg:hidden flex ${className} w-fit flex-col gap-4`}>
      <div className="flex flex-col gap-2">
        <h1 className="sm:text-xl text-base text-[var(--black-blue)]">
          {title}
        </h1>
        <p className="sm:text-base text-sm">{desc}</p>
      </div>
      <section className="flex items-center gap-4">
        <p className="font-semibold sm:text-base text-sm">{disPrice}</p>
        <p className="line-through sm:text-base text-sm">{price}</p>
      </section>
    </section>
  );
};

export default PriceCard;
