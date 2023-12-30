import config from "@/config";
import { readdirSync, readFileSync } from "node:fs";
import matter from "gray-matter";

export function getAllSlugs() {

    const files_name = readdirSync(config.folders.blogs, { encoding: "utf-8" });

    return files_name.map(file_name => `${config.folders.blogs}/${file_name}`);

}

export function getAllFiles({ limit }: { limit?: number }): string[] {

    const slugs = getAllSlugs().slice(0, limit);

    return slugs.map(slug => {
        return readFileSync(slug, { encoding: "utf-8" })
    })

}

export function getAllBlogs({ limit }: { limit?: number }) {

    const files = getAllFiles({ limit });

    return files.map(file => {
        return matter(file);
    })

}