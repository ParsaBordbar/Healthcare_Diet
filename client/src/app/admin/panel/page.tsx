import NewCommentsBox from "@/components/AdminComponents/NewCommentsBox "
import NewPatientsBox from "@/components/AdminComponents/NewPatientsBox"
import WelcomeBox from "@/components/AdminComponents/WelcomeBox"
import Link from "next/link"

const MainPageAdminPanel = () => {
    return(
        <section className="grid grid-cols-7 gap-4">
            <div className="col-span-7">
                <WelcomeBox doctorName="نام "/>    
            </div>
            <div className="min-[1320px]:col-span-3 lg:col-span-4 col-span-full">
                <NewPatientsBox />
            </div>
            <div className="min-[1320px]:col-span-4 lg:col-span-3 col-span-full">
                <NewCommentsBox />
            </div>
        </section>
    )   
}

export default MainPageAdminPanel