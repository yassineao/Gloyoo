export default function Footer() {
    return (
        <section className="mx-auto bg-black py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <footer className="mx-auto max-w-7xl text-center">
                    <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-5">
                        <div className="flex max-w-sm flex-col items-center lg:col-span-2">
                            <img
                                src="/Logo.png"
                                alt="logo"
                                className="mb-4 h-20"
                            />
                            <p className="font-bold text-white">Components made easy.</p>
                        </div>

                        <div>
                            <h3 className="mb-4 font-bold text-white">Product</h3>
                            <ul className="space-y-4 text-zinc-400">
                                <li className="font-medium hover:text-white"><a href="#">Overview</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Pricing</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Marketplace</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Features</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Integrations</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-bold text-white">Company</h3>
                            <ul className="space-y-4 text-zinc-400">
                                <li className="font-medium hover:text-white"><a href="#">About</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Team</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Blog</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Careers</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Contact</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Privacy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-bold text-white">Social</h3>
                            <ul className="space-y-4 text-zinc-400">
                                <li className="font-medium hover:text-white"><a href="#">Twitter</a></li>
                                <li className="font-medium hover:text-white"><a href="#">Instagram</a></li>
                                <li className="font-medium hover:text-white"><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 text-center text-sm font-medium text-zinc-400 md:flex-row">
                        <p>&copy; 2026 Gloyoo. All rights reserved.</p>
                        <ul className="flex flex-wrap justify-center gap-4">
                            <li className="underline hover:text-white"><a href="#">Terms and Conditions</a></li>
                            <li className="underline hover:text-white"><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
}
