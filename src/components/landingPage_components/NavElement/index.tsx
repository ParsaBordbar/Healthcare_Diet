import { NavElementType } from "@/types";

const NavElement = ({text}:NavElementType) => {
    return(
        <p className="text-sm text-[var(--text)]">
            {text}
        </p>
    )
};
export default NavElement;