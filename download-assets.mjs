import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://resetnft.art";

const ASSET_PATHS = [
    "/_assets/media/775932f5295cff396670d6b7c8dcb755.png",
    "/_assets/media/aaa3912052ec93c11f115f0888f9cff7.jpg",
    "/_assets/media/4fdef16efc1c0afdba0b165715998086.jpg",
    "/_assets/media/32fbab0cb9e8d32556b283c7de426bd3.jpg",
    "/_assets/media/e4d44ee0da51b979d0587ab6092a683b.jpg",
    "/_assets/media/5a34d348634345933fb3bd9c191601c4.jpg",
    "/_assets/media/cbafa193422b431b7312388efba6b1a6.jpg",

    "/_assets/video/f69225dd106196c459faf3434455c122.mp4",
    "/_assets/video/6f8c9aaeb48e19b55ac6a3441969785c.mp4",
    "/_assets/video/5aed04c6747be5339bbdb41bf44b2751.mp4",
    "/_assets/video/08d5ce08469aca9195f352b24b57a185.mp4",
    "/_assets/video/4c38b7dd31506497634855dca1727869.mp4",
    "/_assets/video/1ff230c52c04d1deccb3468e900bb1d6.mp4",
    "/_assets/video/3f6f29c071a34b2bb847ca01b95b8a0c.mp4",
    "/_assets/video/5a4f80e9aa794a2f0b45e79be68d3552.mp4",
    "/_assets/video/d7c46ef73d9dae8c16962b62a41cd08c.mp4",
    "/_assets/video/053edf327a35c6aedf2b8b6bb60a90c6.mp4",
    "/_assets/video/33bbd07a00e419341befdd57733e87ab.mp4",
    "/_assets/video/6319519c5c0ddf84ba6731c8c2affc88.mp4",
    "/_assets/video/d08b6f4f40ce779cb25cdb4a6c197149.mp4"
];

async function downloadAsset(assetPath) {
    const url = `${BASE_URL}${assetPath}`;
    const outPath = path.join(process.cwd(), "public", assetPath);

    await fs.mkdir(path.dirname(outPath), { recursive: true });

    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error(`Failed to download ${url}: ${res.statusText}`);
            return;
        }
        const buffer = await res.arrayBuffer();
        await fs.writeFile(outPath, new Uint8Array(buffer));
        console.log(`Downloaded: ${assetPath}`);
    } catch (err) {
        console.error(`Error downloading ${url}:`, err);
    }
}

async function main() {
    console.log("Starting asset download...");
    const promises = ASSET_PATHS.map(p => downloadAsset(p));
    await Promise.all(promises);
    console.log("Finished asset download.");
}

main();
