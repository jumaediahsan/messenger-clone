import getusers from "../actions/getUsers"
import Sidebar from "../components/sidebar/Sidebar"
import UserList from "./components/UserList";


export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}) {
    const users = await getusers();
    return (
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    )
};