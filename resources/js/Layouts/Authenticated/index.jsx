import { memo } from "react"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"


function Authenticated({ children, auth }) {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Start : Sidebar */}
                <Sidebar auth={auth} />
                {/* End : Sidebar */}

                {/* START : Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* START : TOPBAR */}
                        <TopBar name={auth.user.name} />
                        {/* END : TOPBAR */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* End : Content */}
            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    )
}

export default memo(Authenticated)
