export default function FlashMessage({message, className}) {
    return(
        <>
        <div className={`flex bg-green-300 rounded-md p-4 mb-4 text-sm text-green-700 ${className}`}>
            {message}
        </div>
        </>
    )
}