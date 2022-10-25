import Link from 'next/link'

const MainHeader = () => {
  return (
    <div className="navbar bg-slate-800 text-green-200">
      <div className="flex-1">
        <Link href='/'>
          <button className="btn btn-ghost normal-case text-3xl">NextEvents</button>
        </Link>
      </div>
      <Link href='/events'>
        <button className="btn btn-ghost">
          Browse All Events
        </button>
      </Link>
    </div>
  )
}
export default MainHeader