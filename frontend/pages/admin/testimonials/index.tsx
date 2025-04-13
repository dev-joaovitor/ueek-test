import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function AdminTestimonial() {
    return (
        <>
            <header className="flex flex-wrap justify-between items-center py-3 px-[48px] border-b-2 border-[#444]">
                <Link href="/">
                    <Image
                        src="/logo/logo.svg"
                        alt="Movefit logo"
                        width={101}
                        height={32}
                    />
                </Link>

                <div className="flex items-center gap-x-3">
                    <Button
                        text="Novo depoimento"
                        href="/admin/testimonial/new"
                        type="primary"
                    />
                </div>
            </header>

            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Titulo</th>
                            <th>Comentario</th>
                            <th>Estrelas</th>
                            <th>Botao</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(10).fill(1).map((_, idx) => (
                            <tr key={"testimonial-"+idx}>
                                <td>
                                    <Image
                                        className="rounded-full"
                                        loader={() => `https://randomuser.me/api/portraits/${(idx % 2) ? "men" : "women"}/${idx}.jpg`}
                                        src={`https://randomuser.me/api/portraits/${(idx % 2) ? "men" : "women"}/${idx}.jpg`}
                                        height={40}
                                        width={40}
                                        alt="a"
                                    />
                                </td>
                                <td>Marcos Antunes</td>
                                <td>Awesome!!!</td>
                                <td className="h-[10px] text-ellipsis">{(idx % 2) ? "This service has transformed the way I manage my projects." : "This service has transformed the way I manage my projects. blabalbla kalkbalav akldkald akadlkasl"}</td>
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
                        {/*<TestimonialCard
                            key={"testimonial-"+idx}
                            person={{
                                name: "Marcos Antunes",
                                pictureSource: `https://randomuser.me/api/portraits/${(idx % 2) ? "men" : "women"}/${idx}.jpg`,
                            }}
                            starAmount={[3,4,1.5,5,3,5,2,4.5,1,3.5][idx]}
                            headline="Awesome!!!"
                            text={(idx % 2) ? "This service has transformed the way I manage my projects." : "This service has transformed the way I manage my projects. blabalbla kalkbalav akldkald akadlkasl"}
                        />*/}
                    </tbody>
                </table>
            </main>
        </>
    );
}

