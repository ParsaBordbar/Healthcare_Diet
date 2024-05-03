import SocialBox from "@/components/socialBox";
import Google from "/public/svg/Google.svg";
import Facebook from "/public/svg/Facebook.svg";
import Whatsapp from "/public/svg/Whatsapp.svg";
import Insta from "/public/svg/Insta.svg";

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
