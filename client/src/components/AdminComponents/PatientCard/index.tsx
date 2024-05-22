import { BmiType } from "@/types"
import FemaleAvatar from '/public/svg/adminPanelSvgs/Group 107.svg'
import MaleAvatar from '/public/svg/adminPanelSvgs/Group 108.svg'
import PhoneIcon from '/public/svg/phone.svg'

const PatientCard = ({name, lastName, gender, phoneNumber }: BmiType) => {

    {
        if(gender ==="male" || gender=="مرد"){
            return(
                <div className="flex m-4 col-span-full bg-[var(--primary)] gap-4 justify-center py-5 rounded-lg shadow-md">
                    <MaleAvatar />
                    <div className="flex flex-col gap-4 pt-10 px-8 w-1/2">
                        <h2 className="text-4xl">{name} {lastName}</h2>
                        <div className="flex gap-2">
                            <PhoneIcon />
                            <p className="text-lg text-[var(--text)]">{phoneNumber}</p>
                        </div>
                    </div>
                </div>
            )
        }

        if(gender ==="female" || gender === "زن"){
            return(
                <div className="flex m-4 col-span-full bg-[var(--primary)] gap-4 justify-center py-5 rounded-lg shadow-md">
                    <FemaleAvatar />
                    <div className="flex flex-col gap-4 pt-10 px-8 w-1/2">
                        <h2 className="text-4xl">{name} {lastName}</h2>
                        <div className="flex gap-2">
                            <PhoneIcon />
                            <p className="text-lg text-[var(--text)]">{phoneNumber}</p>
                        </div>
                    </div>
                </div>
            )
        }
        }
}
export default PatientCard