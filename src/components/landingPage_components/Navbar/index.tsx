
const Navbar = () => {
    return(
        <nav className="flex justify-between items-center">
            <Logo />
            <ul>
                <li> <NavElement /> </li>
                <li> <NavElement /> </li>
            </ul>
            <div className="flex flex-row gap-2 justify-center items-center">
                <LoginButton />
                <LoginButton />
            </div>
        </nav>
    )
};
export default Navbar;