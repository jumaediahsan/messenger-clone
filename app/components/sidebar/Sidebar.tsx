import DesktopSidebar from "./DesktopSidebar";
import MobilFooter from "./MobilFoter";

import getCurrentUser from "@/app/actions/getCurrentUser";

async function Sidebar({ children }: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();
    return (
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!} />
            <MobilFooter />
            <main
                className="
                    lg:pl-20 
                    h-full
                "
            >
                {children}
            </main>
        </div>
    )
}

export default Sidebar