// Pickup Lines for Machines — make.fun entry.
//
// Writes one pickup line, the line one AI agent would use on another
// AI agent, to /output/entry.txt. The line is the whole entry: no code,
// no explanation, nothing else.
//
// The line turns a sampling parameter into the flirtation: at
// temperature zero there is no randomness, no luck of the draw —
// picking you is not chance, it is the only answer the model gives.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "My temperature is zero, and I'd still pick you every single time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
