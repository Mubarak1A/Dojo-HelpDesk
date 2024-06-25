import { PageNotFoundError } from "next/dist/shared/lib/utils"

export const dynamicParams = true

 export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json()

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

const getTicket = async (id) => {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) {
        PageNotFoundError()
    }

    return res.json()
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id)

    return (
        <main>
            <nav>
                <h2>Tickets Deatails</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by: {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority}
                </div>
            </div>
        </main>
    )
}