import Logo from "./Logo";
import NavItem from "./NavItem";
import Search from "./Search";

export default function Nav({ direction, scheme } : { direction: any, scheme: any }) {
    const dirs = {
        horizontal: "flex justify-center space-x-11 items-center",
        vertical: "flex-col space-y-4"
    }

    const picekdDir = dirs[direction as keyof typeof dirs] || dirs["horizontal"];

    return(
        <nav className="pb-10">
            <div className="container mx-auto items-center">
                <NavItem
                    direction={direction}
                    scheme={scheme}
                />
            </div>
        </nav>
    );
}