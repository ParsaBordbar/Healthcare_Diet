import ImageGridElement1 from "/public/svg/Rectangle 4.svg"
import ImageGridElement2 from "/public/svg/Rectangle 6.svg"
import ImageGridElement3 from "/public/svg/Rectangle 7.svg"
import Tick from "/public/svg/tttick.svg"

const WhyHealthySection = () => {
    return(
        <div className="grid lg:grid-cols-5 gap-64 my-14 grid-cols2">
            <div className="lg:col-span-2 col-span-full flex justify-start items-center flex-col gap-10">
                <h2 className="font-bold text-4xl mb-28">چرا سالم؟</h2>
                <ul className="flex flex-col gap-12 items-start">
                    <li className="flex flex-row gap-4 items-center justify-center">
                        <Tick />
                        <p>ارتقای سلامت فیزیکی</p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-center">
                        <Tick />
                        <p>سلامت روان بهتر</p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-center">
                        <Tick />
                        <p>طاقت پذیری بیشتر</p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-center">
                        <Tick />
                        <p>کنترل  وزن</p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-center">
                        <Tick />
                        <p>ارتقای اعتماد به نفس</p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-center">
                        <Tick />
                        <p>کاهش استرس</p>
                    </li>
                </ul>
            </div>
            <div className="lg:col-span-3 col-span-full grid grid-cols-2 ">
                <div className="col-span-1 flex justify-end items-end m-2">
                    <ImageGridElement2 />
                </div>
                <div className="col-span-1 flex justify-end items-end m-2">
                    <ImageGridElement1 />
                </div>
                <div className="col-span-2 flex justify-end items-end m-2">
                    <ImageGridElement3 />

                </div>
            </div>
        </div>
    )
};
export default WhyHealthySection;