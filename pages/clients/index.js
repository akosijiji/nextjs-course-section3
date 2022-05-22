import Link from 'next/link';

function ClientsPage() {
    const clients = [
        { id: 'max', name: 'Maximillian' },
        { id: 'manu', name: 'Manuel' },
    ];
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {/* Loop through clients array */}
                {clients.map((client) => (
                    <li key={client.id}>
                        {/* <Link href={`/clients/${client.id}`}>
                            {client.name}
                        </Link> */}
                        {/* Dynamic segment identifier */}
                        <Link
                            href={{
                                pathname: '/clients/[id]',
                                query: { id: client.id },
                            }}
                        >
                            {client.name}
                        </Link>
                    </li>
                ))}
                {/* <li>
                    <Link href="/clients/max">Maximillian</Link>
                </li>
                <li>
                    <Link href="/clients/manu">Manuel</Link>
                </li> */}
            </ul>
        </div>
    );
}

export default ClientsPage;
