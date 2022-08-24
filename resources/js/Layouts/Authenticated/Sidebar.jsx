import { Link, usePage } from "@inertiajs/inertia-react"
import { memo, useEffect } from "react";
import MenuItem from "./MenuItem";
import { MenuOther, MenuUser } from "./MenuList";
import SubscriptionDetail from "./SubscriptionDetail";

function Sidebar({ auth }) {
    const url = usePage().url.split('/')[2];
    // console.log(url);
    console.log(auth);
    return (
        <>
            <aside className="fixed z-50 w-[300px] h-full">

                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                    <Link href="/">
                        <img src="/images/moonton.svg" alt="" />
                    </Link>
                    <div className="links flex flex-col mt-[60px] h-full gap-[50px]">

                        {/* <!-- Menu --> */}
                        <div>
                            <div className="text-gray-1 text-sm mb-4">Menu</div>
                            {MenuUser.map((menu, index) => (
                                <MenuItem
                                    icon={menu.icon}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                    link={menu.link}
                                    title={menu.title}
                                    key={`${menu.title}-${index}`}
                                />
                            ))}
                        </div>
                        {/* <!-- ./Menu --> */}

                        {/* <!-- Others --> */}
                        <div>
                            <div className="text-gray-1 side-link mb-4">Others</div>
                            {MenuOther.map((menu, index) => (
                                <MenuItem
                                    icon={menu.icon}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                    link={menu.link}
                                    title={menu.title}
                                    key={`${menu.title}-${index}`}
                                    method={menu.method}
                                />
                            ))}
                        </div>
                        {/* <!-- ./Others --> */}

                        {/* <!-- Subscription details --> */}
                        {auth.activePlan && (
                            <SubscriptionDetail
                                name={auth.activePlan.name}
                                isPremium={auth.activePlan.name === 'Premium'}
                                activeDays={auth.activePlan.activeDays}
                                remainingActiveDays={auth.activePlan.remainingActiveDays}
                            />
                        )}
                        {/* <!-- ./Subscription details --> */}

                    </div>
                </div>
            </aside>
        </>
    )
}

export default memo(Sidebar)