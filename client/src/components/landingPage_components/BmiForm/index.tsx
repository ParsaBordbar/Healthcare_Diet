import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";

const BmiForm = () => {
    return(
        <div className="flex justify-center items-center flex-col bg-[var(--primary)] rounded-2xl w-4/5">
            <h3 className="text-3xl my-7">همین حالا شروع کنید!</h3>
            <form action="submit" className="flex justify-center items-center flex-col">
                <div className="flex justify-center items-center flex-row gap-14 w-full">
                    <ul className="flex flex-col gap-2 md:w-96">
                        <li>
                            <MainInput
                            label="نام"
                            placeholder="نام خود را وارد کنید"
                            />
                        </li>
                        <li>
                        <MainInput
                        parentClassName="col-span-2 md:col-span-1 lg:col-span-2"
                        label="نام خانوادگی"
                        placeholder="نام خانوادگی خود را وارد کنید"
                        />
                        </li>
                        <li>
                        <MainInput
                        parentClassName="lg:col-span-2"
                        label="شماره تماس"
                        placeholder="شماره تماس خود را وارد کنید"
                        />
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 md:w-96">
                        <li>
                            <MainInput
                            parentClassName="lg:col-span-2"
                            label="جنسیت"
                            placeholder="جنسیت خود را وارد کنید"
                            />
                        </li>
                        <li>
                        <MainInput label="وزن" placeholder="وزن خود را وارد کنید" />
                        </li>
                        <li>
                            <MainInput label="قد" placeholder="قد خود را وارد کنید" />
                        </li>
                    </ul>
                </div>
                <MainButton className="w-3/5 my-10 py-3 !text-white bg-[var(--rating-color)] font-bold text-2xl" value={"امروز شروع کنید"} />
            </form>
        </div>
    )
};

export default BmiForm;