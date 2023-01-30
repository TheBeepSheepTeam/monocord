/*
	Fosscord: A FOSS re-implementation and extension of the Discord.com backend.
	Copyright (C) 2023 Fosscord and Fosscord Contributors
	
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published
	by the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.
	
	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import os from "os";
import osu from "node-os-utils";
import { red } from "picocolors";

export function initStats() {
	console.log(
		`Legend: (seperated by ;) [Path]: shows what path you're on; [WARNING] self-explanitory; [CPU] self aware cpu inspector; [CPUERR] cpu error handler; [System] monocord main; [Debug] shows if monocord is in debug; [MonoCommentSYS] the mouse himself, shows snarky comments whenever he feels like it.`,
	);
	console.warn(
		red(
			`[WARNING] You will not get support if you are running Monocord by yourself. - Mouse`,
		),
	);
	console.log(`[Path] running in ${__dirname}`);
	try {
		console.log(`[CPU] ${osu.cpu.model()} Cores x${osu.cpu.count()}`);
	} catch {
		console.log(
			"[CPUERR] Are y'all trippin or y'all actually have no CPU?",
		);
	}

	console.log(`[System] ${os.platform()} ${os.arch()}`);
	console.log(`[MonoCommentSYS] who actually needs the fuckin uid?`);
	console.log(
		`[MonoCommentSYS] like I have not seen a single person use it.`,
	);
	if (process.getuid && process.getuid() === 0) {
		console.warn(
			red(
				`[MonoCommentSYS] i am obligated to tell you that you are running as root. and ur in debug mode`,
			),
		);
	}

	// TODO: node-os-utils might have a memory leak, more investigation needed
	// TODO: doesn't work if spawned with multiple threads
	// setInterval(async () => {
	// 	const [cpuUsed, memory, network] = await Promise.all([
	// 		osu.cpu.usage(),
	// 		osu.mem.info(),
	// 		osu.netstat.inOut(),
	// 	]);
	// 	var networkUsage = "";
	// 	if (typeof network === "object") {
	// 		networkUsage = `| [Network]: in ${network.total.inputMb}mb | out ${network.total.outputMb}mb`;
	// 	}

	// 	console.log(
	// 		`[CPU] ${cpuUsed.toPrecision(3)}% | [Memory] ${Math.round(
	// 			process.memoryUsage().rss / 1024 / 1024
	// 		)}mb/${memory.totalMemMb.toFixed(0)}mb ${networkUsage}`
	// 	);
	// }, 1000 * 60 * 5);
}
