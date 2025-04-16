import {
    useState,
    useEffect,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from "react";
import Image from "next/image";
import { Label } from "./Label";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText: string;
    imageSource?: string;
}

export function Input({labelText, imageSource, ...inputProps}: InputProps) {
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
