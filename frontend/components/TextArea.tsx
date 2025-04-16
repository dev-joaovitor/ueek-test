import {
    DetailedHTMLProps,
    TextareaHTMLAttributes,
} from "react";
import { Label } from "./Label";

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>  {
    labelText: string;
}

export function TextArea({labelText, ...textAreaProps}: TextAreaProps) {
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


