import Authenticated from '@/Layouts/Authenticated/index'
import { Head } from '@inertiajs/inertia-react'
import Flickity from 'react-flickity-component'
import FeaturedMovie from '@/Components/FeaturedMovie'
import MovieCard from '@/Components/MovieCard'
import { memo } from 'react'

function Dashboard({auth, isFeaturedMovie, movies}) {
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
            <Authenticated auth={auth}>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]"
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                    >

                        {isFeaturedMovie.map((isFeatureMovie, i) => (
                            <FeaturedMovie
                                name={isFeatureMovie.name}
                                category={isFeatureMovie.category}
                                key={i}
                                slug={isFeatureMovie.slug}
                                thumbnail={isFeatureMovie.thumbnail}
                                rating={isFeatureMovie.rating}
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
                        {movies.map((movie, i) => (
                            <MovieCard
                                name={movie.name}
                                key={i}
                                thumbnail={movie.thumbnail}
                                year={2022}
                                slug={movie.slug}
                            />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    )
}
export default memo(Dashboard)
