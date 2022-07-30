import Authenticated from '@/Layouts/Authenticated/index'
import CardPricing from '@/Components/CardPricing'

export default function Payments() {
    return (
        <>
            <Authenticated>
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
                            <CardPricing
                                price={20000} name="Basic" durationInMonth={3}
                                features={['feature', 'feature', 'feature', 'feature']}
                            />
                            <CardPricing
                                price={20000} name="Basic" durationInMonth={3}
                                features={['feature', 'feature', 'feature', 'feature']}
                                isPremium
                            />
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    )
}