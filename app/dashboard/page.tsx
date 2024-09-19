import QuizTable from "../ui/QuizTable";


export default function page() {
    return (
    <main className="w-full h-screen flex flex-col gap-10 items-center justify-center">
        <div className="w-[80%] sm:w-[50%] p-5 border-[0.5px] border-[#2c4e67] rounded-md shadow-lg shadow-[#2c4e67]">
            <QuizTable />
        </div>
    </main>
    )
}
