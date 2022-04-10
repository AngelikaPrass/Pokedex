import DarkModeToggle from "./darkModeToggle";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h1> Pokédex </h1>
                <DarkModeToggle />
            </div>
        </div>
    )
}
