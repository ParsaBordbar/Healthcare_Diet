import NewPatientsBox from "@/components/AdminComponents/NewPatientsBox"
import WelcomeBox from "@/components/AdminComponents/WelcomeBox"
import Link from "next/link"

const MainPageAdminPanel = () => {
    return(
        <section className="grid grid-cols-7 gap-4">
            <div className="col-span-7">
                <WelcomeBox doctorName="X"/>    
            </div>
            <div className="col-span-7">
                <NewPatientsBox />
            </div>
        </section>
    )   
}

export default MainPageAdminPanel