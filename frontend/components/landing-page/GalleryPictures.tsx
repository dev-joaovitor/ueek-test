import Image from "next/image";

interface GalleryPictureProps {
    alt: string;
    image: number;
}

export function GalleryPictures() {
    const baseClass = "grid auto-cols gap-4";

    return (
        <article className="flex flex-col items-center gap-4">
            <section className={`${baseClass} md:grid-cols-[minmax(0,_840px)_minmax(0,_480px)]`}>
                <GalleryPicture
                    image={1}
                    alt={"abc"}
                />
                <GalleryPicture
                    image={2}
                    alt={"abc"}
                />
            </section>
            <section className={`${baseClass} md:grid-cols-[minmax(0,_480px)_minmax(0,_840px)]`}>
                <GalleryPicture
                    image={3}
                    alt={"abc"}
                />
                <GalleryPicture
                    image={4}
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
            src={`/gallery/${image}.png`}
            alt={alt}
            width={840}
            height={480}
        />
    );
}
