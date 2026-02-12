import { execSync } from "node:child_process";

const remote = execSync("git remote get-url origin", { encoding: "utf8" }).trim();

const username = remote.split("github.com")[1].split(/[/:]/).filter(Boolean)[0];

console.log(`Hello, ${username}`);
