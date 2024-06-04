import NewCommentsBox from "@/components/AdminComponents/NewCommentsBox "
import NewPatientsBox from "@/components/AdminComponents/NewPatientsBox"
import QuickLinSection from "@/components/AdminComponents/QuickLinkSection"
import WelcomeBox from "@/components/AdminComponents/WelcomeBox"

const MainPageAdminPanel = () => {
    return(
        <section className="grid min-[1320px]:grid-cols-8 grid-cols-7 gap-8">
            <div className="col-span-7">
                <WelcomeBox doctorName="نام "/>    
            </div>
            <div className="col-span-full">
                <QuickLinSection />
            </div>
            <div className="min-[1320px]:col-span-4 lg:col-span-3 col-span-full">
                <NewCommentsBox />
            </div>
            <div className="min-[1320px]:col-span-4 lg:col-span-4 col-span-full">
                <NewPatientsBox />
            </div>
        </section>
    )   
}

export default MainPageAdminPanel