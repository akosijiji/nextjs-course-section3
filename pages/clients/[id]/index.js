import { useRouter } from 'next/router';

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        // load data...
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'projecta' },
        });
    }

    return (
        <div>
            <h1>The Projects of a Given Project</h1>
            {/* How imperative navigation works */}
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectsPage;
