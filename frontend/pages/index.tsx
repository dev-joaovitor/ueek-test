import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
    const [carouselRef] = useEmblaCarousel({dragFree: true});

    return (
        <>
            <header
                className="flex flex-wrap justify-between items-center py-3 px-[48px] border-b-2 border-[#444]">


                <Link className="block lg:hidden" href="/">
                    <Image
                        src="/logo/logo.svg"
                        alt="Movefit logo"
                        width={101}
                        height={32}
                    />
                </Link>

                <nav className="hidden lg:block">
                    <menu className="flex items-center gap-x-10">    
                        <li>
                            <Link href="/">
                                <Image
                                    src="/logo/logo.svg"
                                    alt="Movefit logo"
                                    width={101}
                                    height={32}
                                />
                            </Link>
                        </li>
                        <li>
                            <a href="#start">Inicio</a>
                        </li>
                        <li>
                            <a href="#benefits">Benefícios</a>
                        </li>
                        <li>
                            <a href="#testimonials">Depoimentos</a>
                        </li>
                        <li>
                            <a href="#gallery">Galeria</a>
                        </li>
                    </menu>
                </nav>

                <div className="flex items-center gap-x-3">
                    <Link href="login">
                        Login
                    </Link>
                    <Button
                        text="Teste grátis"
                        href="teste-gratis"
                        type="primary"
                    />
                </div>
            </header>

            <section id="start" className="flex flex-col items-center bg-radial-[ellipse_farthest-corner_at_top] from-[#080F17] from-50% to-[#A2D260] to-250% pb-[20vw]">
                <h1 className="text-center mb-5">
                    Transforme sua jornada fitness
                </h1>

                <p className="text-center max-w-[75%]">
                    Descubra nossos planos personalizados, elaborados especialmente{" "}
                    para se adequar ao seu estilo de vida. Esses planos são projetados{" "}
                    não apenas para atender às suas necessidades, mas também para te{" "}
                    capacitar em sua jornada rumo à realização de seus objetivos com{" "}
                    facilidade e eficiência.
                </p>

                <article className="flex items-center gap-x-3 my-20">
                    <Button
                        text="Teste grátis"
                        href="free-trial"
                        type="primary"
                    />
                    <Button
                        text="Fale conosco"
                        href="contact-us"
                        type="secondary"
                    />
                </article>
            </section>

            <div className="flex justify-center mt-[-20vw]" >
                <Image
                    src="/ui/chart.svg"
                    alt="Movefit dashboard charts"
                    width={1024}
                    height={670}
                />
            </div>

            <main className="px-[48px] relative">
                <section id="benefits">
                    <h2>Benefícios</h2>

                    <article className="grid md:grid-cols-3 gap-4">
                        <BenefitCard
                            icon="lock"
                            title="Transações rápidas e seguras"
                            text="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                        />
                        <BenefitCard
                            icon="info_circle"
                            title="Interface amigável ao usuário"
                            text="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                        />
                        <BenefitCard
                            icon="info_circle"
                            title="Suporte 24 horas"
                            text="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                        />
                        <BenefitCard
                            icon="info_circle"
                            title="Planos de preços flexíveis"
                            text="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                        />
                        <BenefitCard
                            icon="info_circle"
                            title="Integração sem costura"
                            text="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                        />
                        <BenefitCard
                            icon="bar_chart"
                            title="Análises abrangentes"
                            text="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                        />
                    </article>
                </section>

                <section id="testimonials" className="mt-50">
                    <h2>Depoimentos</h2>

                    <div className="embla overflow-hidden pr-10 relative" ref={carouselRef}>
                        <div className="embla__container flex gap-x-3 select-none cursor-grab active:cursor-grabbing">
                            {Array(10).fill(1).map((_, idx) => (
                                <TestimonialCard
                                    key={"testimonial-"+idx}
                                    person={{
                                        name: "Marcos Antunes",
                                        pictureSource: `https://randomuser.me/api/portraits/${(idx % 2) ? "men" : "women"}/${idx}.jpg`,
                                    }}
                                    starAmount={[3,4,1.5,5,3,5,2,4.5,1,3.5][idx]}
                                    headline="Awesome!!!"
                                    text={(idx % 2) ? "This service has transformed the way I manage my projects." : "This service has transformed the way I manage my projects. blabalbla kalkbalav akldkald akadlkasl"}
                                />
                            ))}
                        </div>

                        <div className="absolute top-0 left-[-10px] h-full w-[30px] bg-[linear-gradient(90deg,_#080F17_0%,_transparent_95%)]">
                        </div>
                        <div className="absolute top-0 right-0 h-full w-[20px] bg-[linear-gradient(-90deg,_#080F17_0%,_transparent_95%)]">
                        </div>

                    </div>
                </section>

                <section id="gallery" className="mt-50">
                    <h2>Galeria</h2>

                    <GalleryPictures />

                    <article className="hidden flex flex-wrap gap-4">
                        {[
                            "Man training",
                            "Woman training",
                            "Sneaker from a man training",
                            "Gym",
                        ].map((alt, position) => (
                                <GalleryPicture
                                    key={"gallery-"+position}
                                    image={position}
                                    alt={alt}
                                />
                            ))}
                    </article>
                </section>

                <footer className="flex justify-between my-20">
                    <Link href="/">
                        <Image
                            src="/logo/logo.svg"
                            alt="Movefit logo"
                            width={101}
                            height={32}
                        />
                    </Link>

                    <Button
                        text="Fale conosco"
                        href="contact-us"
                        type="secondary"
                    />
                </footer>
            </main>
        </>
    );
}

// GALLERY PHOTO [START]
interface GalleryPictureProps {
    alt: string;
    image: number;
}

function GalleryPictures() {
    return (
        <article className="flex flex-col items-center gap-4">
            <section className="grid auto-cols md:grid-cols-[minmax(0,_840px)_minmax(0,_480px)] gap-4">
                <GalleryPicture
                    image={0}
                    alt={"abc"}
                />
                <GalleryPicture
                    image={1}
                    alt={"abc"}
                />
            </section>
            <section className="grid auto-cols md:grid-cols-[minmax(0,_480px)_minmax(0,_840px)] gap-4">
                <GalleryPicture
                    image={2}
                    alt={"abc"}
                />
                <GalleryPicture
                    image={3}
                    alt={"abc"}
                />
            </section>
        </article>
    );
}

function GalleryPicture({ alt, image }: GalleryPictureProps) {
    return (
        <Image
            key={"gallery-"+image}
            className="flex-1 grayscale h-[480px] object-cover border-1 border-[#666] rounded-xl"
            src={`/gallery/${image+1}.png`}
            alt={alt}
            width={840}
            height={480}
        />
    );
}
// GALLERY PHOTO [END]

// TESTIOMONIAL CARD [START]
interface TestimonialCardProps {
    person: {
        pictureSource: string;
        name: string;
    };
    starAmount: number;
    headline: string;
    text: string;
}

function TestimonialCard({ person, starAmount, headline, text }: TestimonialCardProps) {
    return (
        <article className={`embla__slide min-w-3/4 sm:min-w-[280px] p-4 bg-[#121820] border-1 border-[#666] rounded-xl`}>
            <header className="flex items-center gap-x-2">
                <Image
                    className="rounded-full"
                    loader={() => person.pictureSource}
                    src={person.pictureSource}
                    alt="Person picture"
                    width={48}
                    height={48}
                />

                <div>
                    <p>{person.name}</p>

                    <div className="flex flex-wrap">
                        {Array(Math.floor(starAmount)).fill(1).map((_, idx) => (
                            <Image
                                key={"star-"+idx}
                                src="/icon/star-filled.svg"
                                alt="Star icon filled"
                                width={16}
                                height={16}
                            />
                        ))}
                        {starAmount > Math.floor(starAmount) ? (
                            <Image
                                src="/icon/star-half-filled.svg"
                                alt={"Star icon half filled"}
                                width={16}
                                height={16}
                            />
                        ) : null}
                    </div>
                </div>
            </header>

            <main>
                <p>{headline}</p>
                <p>{text}</p>
            </main>
        </article>
    );
}
// TESTIOMONIAL CARD [END]

// BENEFIT CARD [START]
interface BenefitCardProps {
    icon: "lock" | "info_circle" | "bar_chart";
    title: string;
    text: string;
}

function BenefitCard({ icon, title, text }: BenefitCardProps) {
    const icons = {
        lock: {
            src: "/icon/lock.svg",
            alt: "Lock icon",
        },
        info_circle: {
            src: "/icon/info-circle.svg",
            alt: "Information icon",
        },
        bar_chart: {
            src: "/icon/bar-chart.svg",
            alt: "Bar chart icon",
        }
    }

    return (
        <article className="p-4 bg-[#121820] border-1 border-[#666] rounded-xl">
            <header>
                <Image
                    className="mb-4"
                    src={icons[icon].src}
                    alt={icons[icon].alt}
                    width={48}
                    height={48}
                />
            </header>

            <main>
                <h3>{title}</h3>
                <p>{text}</p>
            </main>
        </article>
    );
}
// BENEFIT CARD [END]

function HomeNext() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              pages/index.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
