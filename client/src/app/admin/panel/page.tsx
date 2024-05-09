import NewPatientsBox from "@/components/AdminComponents/NewPatientsBox"
import WelcomeBox from "@/components/AdminComponents/WelcomeBox"
import Link from "next/link"

const MainPageAdminPanel = () => {
    return(
        <section className="grid grid-cols-2 gap-4">
            <div className="flex col-span-1">
                <WelcomeBox doctorName="X"/>    
            </div>
            <div className="col-span-2">
                <NewPatientsBox />
            </div>
        </section>
    )   
}

export default MainPageAdminPanel