import Link from "next/link";

interface ButtonProps {
    text: string;
    type: "primary" | "secondary";
    href?: string;
    onClick?: () => void;
}

const classes = {
    base: "py-2 px-4 rounded-lg",
    primary: "text-[#000] bg-[#A7EE43]",
    secondary: "text-[#FFF] bg-[#080F17] border-1 border-[#666]",
}

export function Button({ text, type, href, onClick }: ButtonProps) {

    return (
        href ? (
            <Link
                className={`${classes.base} ${classes[type]}`}
                href={href}
                onClick={onClick}
            >
                {text}
            </Link>
        ) : (
            <button
                type="button"
                className={`${classes.base} ${classes[type]}`}
                onClick={onClick}
            >
                {text}
            </button>
        )
    );
}

