export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col height-full min-h-screen">
            <header className="p-4 bg-slate-100 border-b-stone-300 ">
                <div>
                    Swapi App Logo
                </div>
            </header>
            <main className="p-4 grow">
                {children}
            </main>
            <footer className="p-4 bg-slate-100 border-t-stone-300 ">
                <div>2023</div>
            </footer>
        </div>
    )
};
