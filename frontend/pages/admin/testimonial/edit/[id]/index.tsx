import { useRouter } from "next/router";

export default function EditTestimonial() {
    const router = useRouter();

    return (
        <h1>Depoimento {router.query.id}</h1>
    );
}
