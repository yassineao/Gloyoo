import Link from "next/link";
import Image from "next/image";
import type { Infos } from "@/app/types/Infos";

type FormProps = {
  content: Infos;
};

export default function Form({ content }: FormProps) {
  return (
    <section className="flex items-center justify-center px-4 py-12">
      <div className="grid w-full max-w-7xl items-center md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="p-5">
          <h1 className="mb-3 text-center text-3xl font-semibold tracking-tight text-[#A855F7] md:text-start">
            {content.title}
          </h1>
          <p className="mx-auto mb-8 max-w-[400px] text-center text-sm/6 leading-relaxed text-white md:mx-0 md:text-start">
            {content.description}
          </p>

          <form>
            <div className="mb-5 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm text-white">
                  {content.fields.companyName}
                </label>
                <input
                  type="text"
                  placeholder={content.placeholders.companyName}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition-colors focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white">
                  {content.fields.lastName}
                </label>
                <input
                  type="text"
                  placeholder={content.placeholders.lastName}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition-colors focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm text-white">
                {content.fields.email}
              </label>
              <input
                type="email"
                placeholder={content.placeholders.email}
                className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition-colors focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm text-white">
                {content.fields.phoneNumber}
              </label>
              <div className="flex overflow-hidden rounded-lg border border-gray-300 transition-colors focus-within:border-indigo-500">
                <input
                  type="tel"
                  placeholder={content.placeholders.phoneNumber}
                  className="flex-1 px-3 py-3 text-sm outline-none"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm text-white">
                {content.fields.message}
              </label>
              <textarea
                rows={4}
                placeholder={content.placeholders.message}
                className="w-full resize-y rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition-colors focus:border-indigo-500"
              ></textarea>
            </div>

            <div className="mb-6 flex items-center gap-2">
              <input
                type="checkbox"
                className="h-5 w-5 cursor-pointer rounded text-white accent-indigo-500"
              />
              <label className="cursor-pointer text-sm text-white">
                {content.consent.prefix}{" "}
                <Link href="./terms" className="underline">
                  {content.consent.terms}
                </Link>{" "}
                {content.consent.and}{" "}
                <Link href="./privacy" className="underline">
                  {content.consent.privacyPolicy}
                </Link>
                {content.consent.suffix}
              </label>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 py-3.5 text-sm text-white transition-all hover:-translate-y-0.5"
            >
              {content.submitLabel}
            </button>
          </form>
        </div>

        <div className="relative hidden min-h-[662px] w-full max-w-[520px] flex-col justify-between overflow-hidden rounded-3xl p-10 md:flex">
          <Image
            src={content.testimonial.imageUrl}
            alt={content.testimonial.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            width={520}
            height={662}

          />

          <div className="relative z-10 mt-auto">
            <p className="mb-5 max-w-[400px] text-sm/6 text-white">
              {content.testimonial.quote}
            </p>
            <p className="mb-4 text-right text-sm text-white">
              - {content.testimonial.author}
            </p>
            <div className="flex items-center justify-end gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
