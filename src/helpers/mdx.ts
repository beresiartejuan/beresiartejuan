import config from "@/config";
import { readdirSync, readFileSync } from "node:fs";
import matter from "gray-matter";

export function getAllSlugs() {

    const files_name = readdirSync(config.folders.blogs, { encoding: "utf-8" });

    return files_name.map(file_name => `${config.folders.blogs}/${file_name}`);

}

export function getAllFiles(): string[] {

    const slugs = getAllSlugs();

    return slugs.map(slug => {
        return readFileSync(slug, { encoding: "utf-8" })
    })

}

export type FiltersBlogSearch = {
    limit: number | undefined,
    filter: {
        byDate: boolean
    }
};

export function getAllBlogs({
    limit, filter
}: FiltersBlogSearch) {

    const files = getAllFiles();

    const parsed_files = files.map(file => matter(file));

    if(filter.byDate){
        parsed_files.sort((blogA, blogB) => {
            return new Date(blogA.data.date).getTime() - new Date(blogB.data.date).getTime();
        });
    }

    return parsed_files.slice(0, limit);

}