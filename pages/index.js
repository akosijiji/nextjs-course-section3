import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    {/* Disadvantage of using URL anchor <a></a> e.g. <a href="/portfolio">Portfolio</a>
                    with a standard link, we just send a brand new HTTP request to load this new page
                    which means that any application state we might have on our running React app would be lost.
                    If we have some app-wide state stored with React Context or Redux it would be lost since we send a brand new request */}
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/clients">Clients</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
