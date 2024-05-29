import { BmiType } from "@/types"
import FemaleAvatar from '/public/svg/adminPanelSvgs/Group 107.svg'
import MaleAvatar from '/public/svg/adminPanelSvgs/Group 108.svg'
import PhoneIcon from '/public/svg/phone.svg'
import Link from "next/link"

const PatientCard = ({name, lastName, gender, phoneNumber, linkTo }: BmiType) => {

    {
        if(gender ==="male" || gender=="مرد"){
            return(
                <div className="flex m-3 col-span-full bg-[var(--new-green)] gap-10 justify-center py-4 rounded-lg shadow-md ">
                    <MaleAvatar />
                    <div className="flex flex-col gap-4 w-1/2">
                        <div className="flex  items-center pt-2.5 gap-5">
                            <h2 className="text-3xl text-[var(--milky-white)]">{name} {lastName}</h2>
                            {linkTo?<Link className="pt-2 text-blue-100 text-xs" href={`${linkTo}`}>اطلاعات بیشتر</Link> : null}
                        </div>
                        <div className="flex gap-2">
                            <PhoneIcon />
                            <p className="text-base text-[var(--milky-white)]">{phoneNumber}</p>
                        </div>
                    </div>
                </div>
            )
        }

        if(gender ==="female" || gender === "زن"){
            return(
                <div className="flex m-3 col-span-full bg-[var(--new-green)] gap-10 justify-center py-4 rounded-lg shadow-md ">
                    <FemaleAvatar />
                    <div className="flex flex-col gap-4 px-8 w-1/2">
                    <div className="flex  items-center pt-2.5 gap-5">
                            <h2 className="text-3xl text-[var(--milky-white)]">{name} {lastName}</h2>
                            {linkTo?<Link className="pt-2 text-blue-100 text-xs" href={`${linkTo}`}>اطلاعات بیشتر</Link> : null}
                        </div>
                        <div className="flex gap-2">
                            <PhoneIcon />
                            <p className="text-lg text-[var(--milky-white)]">{phoneNumber}</p>
                        </div>
                    </div>
                </div>
            )
        }
        }
}
export default PatientCard