import { Suspense } from "react"
import TicketList from './components/TicketList'
import Loading from "../loading"
import Link from "next/link"

export default function Tickets() {
  return (
    <div>
      <main>
        <nav className="flex justify-between">
          <div>
            <h2>Tickets</h2>
            <p><small>Currently Open Tickets</small></p>
          </div>
          <Link href='/tickets/create-ticket' className="btn bg-primary text-white rounded-md p-3">
            Create New Ticket
          </Link>
        </nav>

        <Suspense fallback={<Loading />}>
          <TicketList />
        </Suspense>
      </main>
    </div>
  )
}
