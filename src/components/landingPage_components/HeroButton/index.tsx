import { HeroButtonType } from "@/types";

const HeroButton = ({text}:HeroButtonType) => {
    return(
        <button className="text-2xl bg-[var(--hero-btn)] rounded-lg px-20 py-3 bg-gradient-to-t to-[var(--hero-btn)] from-[var(--logo-bg)] shadow-lg">{text}</button>
    )
};
export default HeroButton;