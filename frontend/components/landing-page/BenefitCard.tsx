import Image from "next/image";

interface BenefitCardProps {
    icon: "lock" | "info_circle" | "bar_chart";
    title: string;
    text: string;
}

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

export function BenefitCard({ icon, title, text }: BenefitCardProps) {
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
