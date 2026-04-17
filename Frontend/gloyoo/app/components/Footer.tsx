import Link from "next/link";
import BrandLogo from "./BrandLogo";
import type { Locale, LocaleDictionary } from "../lib/i18n";

export default function Footer({
    locale,
    content,
}: {
    locale: Locale;
    content: LocaleDictionary["footer"];
}) {
    const localizedHref = (href: string) => `/${locale}${href}`;

    return (
        <section className="mx-auto bg-brand-navyDark py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <footer className="mx-auto max-w-7xl text-center">
                    <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-5">
                        <div className="flex max-w-sm flex-col items-center lg:col-span-2">
                            <div className="mb-4">
                                <BrandLogo size="footer" />
                            </div>
                            <p className="font-bold text-white">{content.tagline}</p>
                        </div>

                        <div>
                            <h3 className="mb-4 font-bold text-white">{content.navigationTitle}</h3>
                            <ul className="space-y-4 text-brand-graySoft">
                                {content.navigationLinks.map((link) => (
                                    <li key={link.label} className="font-medium hover:text-white">
                                        <Link href={localizedHref(link.href)}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-bold text-white">{content.servicesTitle}</h3>
                            <ul className="space-y-4 text-brand-graySoft">
                                {content.serviceLinks.map((link) => (
                                    <li key={link.label} className="font-medium hover:text-white">
                                        <Link href={localizedHref(link.href)}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-bold text-white">{content.contactTitle}</h3>
                            <ul className="space-y-4 text-brand-graySoft">
                                {content.contactLinks.map((link) => (
                                    <li key={link.label} className="font-medium hover:text-white">
                                        <Link href={localizedHref(link.href)}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 text-center text-sm font-medium text-brand-graySoft md:flex-row">
                        <p>&copy; 2026 Gloyoo. {content.rights}</p>
                        <ul className="flex flex-wrap justify-center gap-4">
                            {content.legalLinks.map((link) => (
                                <li key={link.label} className="underline hover:text-white">
                                    <Link href={localizedHref(link.href)}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
}
