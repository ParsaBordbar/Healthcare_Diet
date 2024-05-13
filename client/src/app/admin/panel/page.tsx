import NewPatientsBox from "@/components/AdminComponents/NewPatientsBox"
import WelcomeBox from "@/components/AdminComponents/WelcomeBox"
import Link from "next/link"

const MainPageAdminPanel = () => {
    return(
        <section className="grid grid-cols-7 gap-4">
            <div className="col-span-3">
                <WelcomeBox doctorName="X"/>    
                <NewPatientsBox />
            </div>
            <div className="col-span-4">
                Add A Fetch Request Here for MediterraneanForms that (!isChecked) 
            </div>
        </section>
    )   
}

export default MainPageAdminPanel