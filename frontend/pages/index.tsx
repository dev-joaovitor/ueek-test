import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Testimonial } from "@/types/globals";
import { Button } from "@/components/Button";
import { BenefitCard } from "@/components/landing-page/BenefitCard";
import { TestimonialCard } from "@/components/landing-page/TestimonialCard";
import { GalleryPictures } from "@/components/landing-page/GalleryPictures";

export default function Home() {
    const [carouselRef] = useEmblaCarousel({dragFree: true});
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    async function fetchTestimonials() {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial`);

        const response = await request.json();

        return response?.testimonials ?? [];
    }

    useEffect(() => {
        fetchTestimonials().then(setTestimonials);
    }, []);

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
                            {testimonials.map(({name, image, headline, comment, stars}, idx) => (
                                <TestimonialCard
                                    key={"testimonial-"+idx}
                                    person={{
                                        name,
                                        pictureSource: image,
                                    }}
                                    stars={stars}
                                    headline={headline}
                                    comment={comment}
                                />
                            ))}
                        </div>

                        {/* left shadow */}
                        <div className="absolute top-0 left-[-10px] h-full w-[30px] bg-[linear-gradient(90deg,_#080F17_0%,_transparent_95%)]">
                        </div>

                        {/* right shadow */}
                        <div className="absolute top-0 right-0 h-full w-[20px] bg-[linear-gradient(-90deg,_#080F17_0%,_transparent_95%)]">
                        </div>

                    </div>
                </section>

                <section id="gallery" className="mt-50">
                    <h2>Galeria</h2>

                    <GalleryPictures />
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

