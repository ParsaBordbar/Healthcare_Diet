import TextBox from "@/components/landingPage_components/TextBox";
import TextBoxArt1 from "/public/svg/TextboxArt1.svg";
import TextBoxArt2 from "/public/svg/TextBoxArt2.svg";
import TextBoxArt3 from "/public/svg/TextBoxArt3.svg";
import TextBoxArt4 from "/public/svg/TextBoxArt4.svg";

const TextBoxSection = () => {
  return (
    <section className="flex flex-col items-center md:my-0 my-7">
      <h1 className="text-base">
        یک
        <mark className="bg-transparent md:text-7xl sm:text-5xl text-4xl text-[var(--text-important)] font-bold">
          {" "}
          گاز سلامتی{" "}
        </mark>
        برای
      </h1>
      <ul className="grid lg:grid-cols-2 gap-24 m-24 grid-col-1">
        <li className="col-span-1">
          <TextBox
            title="رژیمی رو که دوست دارید پیدا کنید"
            bodyText="متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن"
            img={<TextBoxArt1 />} id={undefined} />
        </li>
        <li className="col-span-1">
          <TextBox
            title="رژیمی رو که دوست دارید پیدا کنید"
            bodyText="متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن"
            img={<TextBoxArt2 />} id={undefined}          />
        </li>
        <li className="col-span-1">
          <TextBox
            title="رژیمی رو که دوست دارید پیدا کنید"
            bodyText="متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن"
            img={<TextBoxArt3 />} id={undefined}          />
        </li>
        <li className="col-span-1">
          <TextBox
            title="رژیمی رو که دوست دارید پیدا کنید"
            bodyText="متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن"
            img={<TextBoxArt4 />} id={undefined}          />
        </li>
      </ul>
    </section>
  );
};
export default TextBoxSection;
