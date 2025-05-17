import Table from "@/components/Table/Table";

export default async function Home() {
    return (
        <div className="p-8 flex justify-start flex-col items-center min-h-screen bg-secondary/20">
            <h1 className="text-6xl font-light text-center mb-4 text-primary-300">
                Collection of Jokes
            </h1>
            <Table />
        </div>
    );
}
