import { Link } from "@inertiajs/inertia-react"

export default function MenuItem({
    link,
    icon,
    title,
    isActive,
    method = 'get'
}) {
    return (
        <>
            <Link method={method}
                as={'button'}
                href={link ? route(link) : null} className={`side-link ${isActive && 'active'}`}>
                {icon}
                {title}
            </Link>
        </>
    )
}