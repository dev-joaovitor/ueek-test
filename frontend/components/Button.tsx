import Link from "next/link";

interface ButtonProps {
    text: string;
    type: "primary" | "secondary";
    submit?: boolean;
    href?: string;
    onClick?: (...args: any) => any;
}

const classes = {
    base: "cursor-pointer text-center py-2 px-4 rounded-lg",
    primary: "text-[#000] bg-[#A7EE43]",
    secondary: "text-[#FFF] bg-[#080F17] border-1 border-[#666]",
}

export function Button({ text, submit, type, href, onClick }: ButtonProps) {
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
                type={submit ? "submit" : "button"}
                className={`${classes.base} ${classes[type]}`}
                onClick={onClick}
            >
                {text}
            </button>
        )
    );
}

