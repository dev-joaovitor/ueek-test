import {
    useState,
    useEffect,
    DetailedHTMLProps,
    FormEvent,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    PropsWithChildren,
    TextareaHTMLAttributes,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import { Testimonial } from "@/types/globals";

interface TestimonialProps {
    id?: string;
}

export default function CreateTestimonial({ id }: TestimonialProps) {
    const router = useRouter();
    const [testimonial, setTestimonial] = useState<Testimonial>(null);
    const [stars, setStars] = useState<number>(1);

    useEffect(() => {
        if (!id) return;

        fetchTestimonial().then((testimonial) => {
            setStars(testimonial?.stars ? +testimonial?.stars : 1);
            setTestimonial(testimonial);
        });
    }, [id]);

    async function fetchTestimonial() {
        try {
            const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial/${id}`);
            const response = await request.json();

            if (response?.status_code !== 200)
                return router.push("/admin/testimonials");

            return response?.testimonial ?? null;
        } catch(e) {
            console.error(e);
        }
    }

    async function handleRemove() {
        try {
            const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial/${id}`, {
                method: "DELETE",
            });

            const response = await request?.json();

            if (response?.status_code === 200)
                return router.push("/admin/testimonials");

            console.log(response);
        } catch(e) {
            console.error(e);
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const request = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonial/${id ? `${id}?_method=PATCH` : ""}`,
                {
                    method: "POST",
                    body: new FormData(event.currentTarget),
                });

            const response = await request?.json();

            switch(response?.status_code) {
                case 200:
                    return setTestimonial(response?.testimonial);
                case 201:
                    return router.push(`/admin/testimonial/edit/${response?.testimonial?.id ?? ""}`);
            }

        } catch(e) {
            console.error(e);
        }
    }

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

                <h3 className="hidden sm:block">{id ? (testimonial?.headline ?? "...Carregando") : "Novo Depoimento"}</h3>

                <Button
                    text="Voltar"
                    href="/admin/testimonials"
                    type="primary"
                />
            </header>

            <main className="px-[5vw]">
                <h2 className="text-center block sm:hidden">Novo depoimento</h2>

                <section className="bg-[#0c1622] p-5 sm:mt-4 mb-4 rounded-md overflow-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
                        <Input
                            name="photo"
                            type="file"
                            accept="image/*"
                            imageSource={testimonial?.image}
                            labelText="Foto"
                        />
                        <Input
                            name="name"
                            type="text"
                            labelText="Nome"
                            defaultValue={testimonial?.name ?? ""}
                        />
                        <Input
                            name="headline"
                            type="text"
                            labelText="Titulo"
                            defaultValue={testimonial?.headline ?? ""}
                        />
                        <TextArea
                            name="comment"
                            labelText="Comentario"
                            maxLength={255}
                            defaultValue={testimonial?.comment ?? ""}
                        />

                        <Label>
                            <span className="flex justify-center">
                                {Array(Math.floor(stars)).fill(1).map((_, idx) => (
                                    <Image
                                        key={"star-"+idx}
                                        src="/icon/star-filled.svg"
                                        alt="Star icon filled"
                                        width={20}
                                        height={20}
                                    />
                                ))}
                                {stars > Math.floor(stars) ? (
                                    <Image
                                        src="/icon/star-half-filled.svg"
                                        alt={"Star icon half filled"}
                                        width={20}
                                        height={20}
                                    />
                                ) : null}
                            </span>
                            <input
                                className="accent-[#A7EE43]"
                                value={stars}
                                min={1}
                                step={0.5}
                                max={5}
                                name="stars"
                                type="range"
                                onChange={(event) => setStars(+(event.target.value))}
                            />
                        </Label>

                        <div className="flex flex-col gap-2">
                            <Button
                                submit
                                type="primary"
                                text={id ? "Editar" : "Salvar"}
                            />
                            {id ? (
                                <Button
                                    onClick={handleRemove}
                                    type="secondary"
                                    text={"Remover"}
                                />
                            ) : null}
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

interface LabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    horizontal?: boolean;
    center?: boolean;
}

function Label({horizontal, center, children}: PropsWithChildren<LabelProps>) {
    return (
        <label className={`flex ${horizontal ? "gap-3" : "flex-col"} ${center ? "justify-center items-center" : ""} w-3/4 md:w-1/3`}>
            {children}
        </label>
    );
}

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>  {
    labelText: string;
}

function TextArea({labelText, ...textAreaProps}: TextAreaProps) {
    return (
        <Label>
            <span className="mb-2">{labelText}</span>
            <textarea
                className="bg-(--background) w-full min-h-[50px] max-h-[250px] p-3 rounded-md"
                {...textAreaProps}
            ></textarea>
        </Label>
    );
}

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText: string;
    imageSource?: string;
}

function Input({labelText, imageSource, ...inputProps}: InputProps) {
    const [imageSrc, setImageSrc] = useState<string|null>(imageSource ?? null);

    useEffect(() => {
        if (!imageSource) return;

        setImageSrc(imageSource);
    }, [imageSource]);

    function personImageLoader({src, width, quality}) {
        return src.includes("/icon") ? src 
            : `${process.env.NEXT_PUBLIC_API_URL}/storage/testimonials/${src}?w=${width}&q=${quality || 75}`;
    }

    switch(inputProps.type) {
        case "file":
            return (
                <Label center>
                    <span className="mb-2">{labelText}</span>

                    <Image
                        loader={personImageLoader}
                        src={imageSrc ?? "/icon/user.svg"}
                        className="bg-(--background) aspect-square object-cover cursor-pointer rounded-full w-1/2"
                        objectFit="cover"
                        height={50}
                        width={50}
                        alt={imageSrc ? "Person photo" : "Photo placeholder"}
                    />
                    <input
                        onChange={(ev) => {
                            const [file] = ev?.target?.files ?? [];

                            if (file) {
                                setImageSrc(URL.createObjectURL(file));
                            }
                        }}
                        hidden
                        {...inputProps}
                    />
                </Label>
            );
        case "text":
        default:
            return (
                <Label>
                    <span className="mb-2">{labelText}</span>
                    <input
                        className="bg-(--background) w-full p-3 rounded-md"
                        {...inputProps}
                    />
                </Label>
            );
    }
}
