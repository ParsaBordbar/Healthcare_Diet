import { NavElementType } from "@/types";
import Link from "next/link";

const NavElement = ({text, link}:NavElementType) => {
    return(
        <Link href={`${link}`}>
            <p className="text-sm text-[var(--text)]">
                {text}
            </p>
        </Link>
    )
};
export default NavElement;