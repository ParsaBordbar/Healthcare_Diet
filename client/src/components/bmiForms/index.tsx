import MainButton from "../MainButton";
import MainInput from "../MainInput";

const BmiFormDiet = () => {
  return (
    <form action="" className="flex w-full gap-10 flex-col justify-center">
      <h1 className="text-center font-bold text-2xl">
        اطلاعات خود را وارد کنید
      </h1>
      <section className="grid w-full grid-cols-2 gap-8">
        <MainInput
          parentClassName="col-span-2 md:col-span-1 lg:col-span-2"
          label="نام"
          placeholder="نام خود را وارد کنید"
        />
        <MainInput
          parentClassName="col-span-2 md:col-span-1 lg:col-span-2"
          label="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد کنید"
        />
        <MainInput
          parentClassName="lg:col-span-2"
          label="شماره تماس"
          placeholder="شماره تماس خود را وارد کنید"
        />
        <MainInput
          parentClassName="lg:col-span-2"
          label="جنسیت"
          placeholder="جنسیت خود را وارد کنید"
        />
        <MainInput label="وزن" placeholder="وزن خود را وارد کنید" />
        <MainInput label="قد" placeholder="قد خود را وارد کنید" />
      </section>
      <MainButton gradient className="w-full py-3 !text-white" value={"ورود"} />
    </form>
  );
};


export default BmiFormDiet