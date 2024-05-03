import SocialBox from "@/components/socialBox";
import Google from "/public/svgs/Google.svg";
import Facebook from "/public/svgs/Facebook.svg";
import Whatsapp from "/public/svgs/Whatsapp.svg";
import Insta from "/public/svgs/Insta.svg";

const Social = () => {
  return (
    <div className="flex w-full items-center justify-evenly">
      <SocialBox iconSocial={Insta} />
      <SocialBox iconSocial={Whatsapp} />
      <SocialBox iconSocial={Facebook} />
      <SocialBox iconSocial={Google} />
    </div>
  );
};

export default Social;
