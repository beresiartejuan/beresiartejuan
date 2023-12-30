import Center from "@/components/Center";
import { getAllBlogs } from "@/helpers/mdx";

export default function () {

    const blogs = getAllBlogs({ limit: 1 });

    return (
        <Center className="max-w-lg mt-[20vh] mb-[15vh] flex flex-col gap-[7vh]">

            {/* Ultimos articulos */}

            <section>
                <h2>Ultimos articulos</h2>
                {blogs.map((blog, index) => {
                    return (
                        <div key={index}>
                            {blog.data.title}
                            {blog.content}
                        </div>
                    )
                })}
            </section>
        </Center>
    );
}