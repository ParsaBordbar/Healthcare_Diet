import NewPatientsBox from "@/components/AdminComponents/NewPatientsBox"
import WelcomeBox from "@/components/AdminComponents/WelcomeBox"

const MainPageAdminPanel = () => {
    return(
        <section className="grid grid-cols-2">
            <div className="flex col-span-2">
                <WelcomeBox doctorName="جسابی"/>
            </div>
            <div className="col-span-2">
                <NewPatientsBox />
            </div>
        </section>
    )
}

export default MainPageAdminPanel