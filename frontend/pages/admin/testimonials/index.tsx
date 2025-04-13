import Image from "next/image";
import Link from "next/link";
import "./styles/styles.css";
import { Button } from "@/components/Button";

export default function AdminTestimonial() {
    return (
        <>
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

                <section className="bg-[#0c1622] sm:mt-4 mb-4 rounded-md overflow-auto">
                    <table className="border-collapse">
                        <thead className="border-b-2 border-[#555]">
                            <tr>
                                <th className="min-w-[50px]"></th>
                                <th>Nome</th>
                                <th>Titulo</th>
                                <th className="min-w-[250px]">Comentario</th>
                                <th>Estrelas</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(10).fill(1).map((_, idx) => (
                                <tr key={"testimonial-"+idx}>
                                    <td>
                                        <Image
                                            className="h-[40px] w-[40px] rounded-full"
                                            loader={() => `https://randomuser.me/api/portraits/${(idx % 2) ? "men" : "women"}/${idx}.jpg`}
                                            src={`https://randomuser.me/api/portraits/${(idx % 2) ? "men" : "women"}/${idx}.jpg`}
                                            height={40}
                                            width={40}
                                            alt="Person image"
                                        />
                                    </td>
                                    <td>Marcos Antunes</td>
                                    <td>Awesome!!!</td>
                                    <td>{(idx % 2) ? "This service has transformed the way I manage my projects." : "This service has transformed the way I manage my projects. blabalbla kalkbalav akldkald akadlkasl"}</td>
                                    <td>
                                        <div className="flex justify-center">
                                            {[3,4,1.5,5,3,5,2,4.5,1,3.5][idx]}
                                            <Image
                                                key={"star-"+idx}
                                                src="/icon/star-filled.svg"
                                                alt="Star icon filled"
                                                width={16}
                                                height={16}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <Button
                                            href={`/admin/testimonial/edit/${idx+1}`}
                                            text="Editar"
                                            type="primary"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}

