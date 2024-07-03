import NewCommentsBox from "@/components/AdminComponents/NewCommentsBox "
import NewPatientsBox from "@/components/AdminComponents/NewPatientsBox"
import QuickLinSection from "@/components/AdminComponents/QuickLinkSection"
import WelcomeBox from "@/components/AdminComponents/WelcomeBox"

const MainPageAdminPanel = () => {
    return(
        <section className="grid xl:grid-cols-8 grid-cols-7 gap-8">
            <div className="col-span-full">
                <WelcomeBox doctorName="admin"/>    
            </div>
            <div className="col-span-full">
                <QuickLinSection />
            </div>
            <div className="xl:col-span-4 min-[1250px]:col-span-3 col-span-full">
                <NewCommentsBox />
            </div>
            <div className="xl:col-span-4 min-[1250px]:col-span-4 col-span-full">
                <NewPatientsBox />
            </div>
        </section>
    )   
}

export default MainPageAdminPanel