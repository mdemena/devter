import Link from 'next/link'

export default function TimeLine({userName}){
    return (
        <>
            <h1>This is the timeline of {userName}</h1>
            <Link href="/">Go home</Link>
        </>
    )
}
