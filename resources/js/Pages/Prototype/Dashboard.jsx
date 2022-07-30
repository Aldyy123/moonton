import Authenticated from '@/Layouts/Authenticated/index'
import { Head } from '@inertiajs/inertia-react'
import Flickity from 'react-flickity-component'
import FeaturedMovie from '@/Components/FeaturedMovie'
import MovieCard from '@/Components/MovieCard'
import { memo } from 'react'

function Dashboard() {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <Authenticated>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]"
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                    >

                        {[1, 2, 3, 4].map(i => (
                            <FeaturedMovie
                                name={"Batman " + i}
                                category="Action"
                                key={i}
                                slug="batman"
                                thumbnail={"/images/featured-1.png"}
                                rating={i + 1}
                            />
                        ))}

                    </Flickity>
                </div>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                    >
                        {[1, 2, 3, 4, 5].map(i => (
                            <MovieCard
                                name={`Meong ${i}`}
                                key={i}
                                thumbnail={`/images/browse-1.png`}
                                year={2022}
                                slug={"batman"}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    )
}
export default memo(Dashboard)
