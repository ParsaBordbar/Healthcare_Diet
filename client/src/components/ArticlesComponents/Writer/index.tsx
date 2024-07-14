import Image from 'next/image';
import DocPhoto from "/public/images/dr.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Writer = () => {
    return(
        <div className="flex sm:flex-row flex-col md:justify-between md:items-center">
            <div className="flex flex-row lg:gap-4 gap-2 items-center justify-start py-4 ">
                <Image
                    src={DocPhoto}
                    alt="Doctor Information"
                    className="rounded-full md:h-12 md:w-12 w-10 h-10 object-top object-cover"
                    width={200}
                    height={200}
                />
                <div>
                    <p className="sm:text-sm text-xs">نویسنده:</p>
                    <h2 className="sm:text-base text-sm">
                    دکتر محمدرضا ربیعی                 
                    </h2>
                </div>
            </div>
            <div className="flex gap-3 lg:mt-8 md:mt-7">
                <a href="#" className="text-black">
                <TelegramIcon className="text-4xl" />
                </a>
                <a
                href="https://www.instagram.com/dr_rabieefitnessteam?igsh=YmhrajRzN3g0YWl4"
                className="text-black"
                >
                <InstagramIcon className="text-4xl" />
                </a>
                <a href="#" className="text-black">
                <LinkedInIcon className="text-4xl" />
                </a>
            </div>
        </div>
    )
}

export default Writer