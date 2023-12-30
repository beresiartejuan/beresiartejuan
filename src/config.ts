import { join } from "path";

const root = process.cwd();


export default {

    folders: {
        root: join(root, "src"),
        blogs: join(root, "src", "content", "blogs")
    }

};