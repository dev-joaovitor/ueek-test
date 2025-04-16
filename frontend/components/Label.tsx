import {
    DetailedHTMLProps,
    LabelHTMLAttributes,
    PropsWithChildren,
} from "react";

interface LabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    horizontal?: boolean;
    center?: boolean;
}

export function Label({horizontal, center, children}: PropsWithChildren<LabelProps>) {
    return (
        <label className={`flex ${horizontal ? "gap-3" : "flex-col"} ${center ? "justify-center items-center" : ""} w-3/4 md:w-1/3`}>
            {children}
        </label>
    );
}

