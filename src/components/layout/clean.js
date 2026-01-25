import { rmSync } from "fs";

rmSync("node_modules", { recursive: true, force: true });
rmSync("package-lock.json", { force: true });

console.log("Cleaned node_modules and package-lock.json");
