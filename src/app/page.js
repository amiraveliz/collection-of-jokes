export default async function Home() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/jokes`
    );
    const { items: jokes } = await response.json();

    return (
        <div className="flex justify-center items-center">
            <ul>
                {jokes.map(({ setup, punchline }, index) => (
                    <li key={index}>
                        {setup} : {punchline}
                    </li>
                ))}
            </ul>
        </div>
    );
}
