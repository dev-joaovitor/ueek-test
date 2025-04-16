import { useRouter } from "next/router";
import CreateTestimonial from "../../create";

export default function EditTestimonial() {
    const router = useRouter();

    return (
        <CreateTestimonial id={router.query?.id} />
    );
}
