import { Suspense } from "react"
import TicketList from './components/TicketList'
import Loading from "../loading"

export default function Tickets() {
  return (
    <div>
      <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently Open Tickets</small></p>
          </div>
        </nav>

        <Suspense fallback={<Loading />}>
          <TicketList />
        </Suspense>
      </main>
    </div>
  )
}
