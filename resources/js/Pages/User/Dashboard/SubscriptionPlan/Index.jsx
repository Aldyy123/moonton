import Authenticated from '@/Layouts/Authenticated/index'
import CardPricing from '@/Components/CardPricing'
import { Inertia } from '@inertiajs/inertia'

export default function Index({ auth, subscriptionPlans }) {
    const onSelectedSubcription = id => {

        Inertia.post(
            route('user.dashboard.subscriptionPlan.userSubscribe', {
                subscriptionPlan: id
            }),
        )
    }
    return (
        <>
            <Authenticated auth={auth}>
                <div className="ml-[300px] px-[50px]">
                    <div className="py-20 flex flex-col items-center">
                        <div className="text-black font-semibold text-[26px] mb-3">
                            Pricing for Everyone
                        </div>
                        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                            Invest your little money to get a whole new experiences from movies.
                        </p>

                        {/* <!-- Pricing Card --> */}
                        <div className="flex justify-center gap-10 mt-[70px]">
                            {subscriptionPlans.map((subscriptionPlan, i) => (
                                <CardPricing
                                    price={subscriptionPlan.price}
                                    name={subscriptionPlan.name}
                                    durationInMonth={subscriptionPlan.active_period_in_months}
                                    features={JSON.parse(subscriptionPlan.featured)}
                                    key={i}
                                    isPremium={subscriptionPlan.name === 'Premium'}
                                    onSelectedSubcription={() => onSelectedSubcription(subscriptionPlan.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    )
}