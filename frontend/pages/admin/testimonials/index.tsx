import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Testimonial } from "@/types/globals";

export default function AdminTestimonial() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    async function fetchTestimonials() {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial`);

        const response = await request.json();

        return response?.testimonials ?? [];
    }

    useEffect(() => {
        fetchTestimonials().then(setTestimonials);
    }, []);

    function personImageLoader({src, width, quality}) {
        return src.includes("/icon") ? src 
            : `${process.env.NEXT_PUBLIC_API_URL}/storage/testimonials/${src}?w=${width}&q=${quality || 75}`;
    }

    return (
        <>
            <Head>
                <title>Movefit | Admin | Depoimentos</title>
            </Head>
            <header className="flex flex-wrap justify-center gap-3 sm:justify-between items-center py-3 px-[48px] border-b-2 border-[#444]">
                <Link href="/">
                    <Image
                        src="/logo/logo.svg"
                        alt="Movefit logo"
                        width={101}
                        height={32}
                    />
                </Link>

                <h3 className="hidden sm:block">Depoimentos</h3>

                <Button
                    text="Novo depoimento"
                    href="/admin/testimonial/create"
                    type="primary"
                />
            </header>

            <main className="px-[5vw]">
                <h2 className="text-center block sm:hidden">Depoimentos</h2>

                <section className="max-w-fit mx-auto bg-[#0c1622] sm:mt-4 mb-4 rounded-md overflow-auto">
                    <table className="border-collapse">
                        <thead className="border-b-2 border-[#555]">
                            <tr>
                                <th className="min-w-[50px]"></th>
                                <th>Nome</th>
                                <th className="min-w-[150px]">Titulo</th>
                                <th className="min-w-[250px]">Comentario</th>
                                <th>
                                    <Image
                                        src="/icon/star-filled.svg"
                                        alt="Star icon filled"
                                        width={30}
                                        height={30}
                                    />
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials.map(({id, name, headline, comment, stars, image}, idx) => (
                                <tr key={"testimonial-"+idx}>
                                    <td>
                                        <Image
                                            className="aspect-square object-cover h-[40px] w-[40px] rounded-full"
                                            loader={personImageLoader}
                                            src={image ?? "/icon/user.svg"}
                                            onError={(e) => e.target.src = "/icon/user.svg"}
                                            height={40}
                                            width={40}
                                            alt="Person image"
                                        />
                                    </td>
                                    <td>{name}</td>
                                    <td>{headline}</td>
                                    <td>{comment}</td>
                                    <td>
                                        <div className="flex justify-center">
                                            {stars}
                                            <Image
                                                src="/icon/star-filled.svg"
                                                alt="Star icon filled"
                                                width={16}
                                                height={16}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <Button
                                            href={`/admin/testimonial/edit/${id}`}
                                            text="Editar"
                                            type="primary"
                                        />
                                    </td>
                                </tr>
                            ))}
                            {!testimonials?.length ? (
                               <tr>
                                    <td colSpan="5">
                                        <h3>Não há depoimentos no momento</h3>
                                    </td>
                                </tr>
                            ) : null}
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}

