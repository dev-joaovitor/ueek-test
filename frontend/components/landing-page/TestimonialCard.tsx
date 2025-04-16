import Image from "next/image";

interface TestimonialCardProps {
    person: {
        pictureSource: string;
        name: string;
    };
    stars: number;
    headline: string;
    comment: string;
}

export function TestimonialCard({ person, stars, headline, comment }: TestimonialCardProps) {
    function personImageLoader({ src, width, quality }) {
        return src.includes("/icon") ? src
            : `${process.env.NEXT_PUBLIC_API_URL}/storage/testimonials/${src}?w=${width}&q=${quality || 75}`;
    }

    return (
        <article className={`embla__slide min-w-3/4 sm:min-w-[280px] p-4 bg-[#121820] border-1 border-[#666] rounded-xl`}>
            <header className="flex items-center gap-x-2">
                <Image
                    className="aspect-square object-cover h-[48px] w-[48px] rounded-full"
                    loader={personImageLoader}
                    src={person.pictureSource}
                    alt="Person picture"
                    width={48}
                    height={48}
                />

                <div>
                    <p>{person.name}</p>

                    <div className="flex flex-wrap">
                        {Array(Math.floor(stars)).fill(1).map((_, idx) => (
                            <Image
                                key={"star-" + idx}
                                src="/icon/star-filled.svg"
                                alt="Star icon filled"
                                width={16}
                                height={16}
                            />
                        ))}
                        {stars > Math.floor(stars) ? (
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
                <p>{comment}</p>
            </main>
        </article>
    );
}
