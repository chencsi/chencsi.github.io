import { Button } from "@mui/material";
import { X } from "lucide-react";
import React, { useState } from "react";

const GemmaChat = ({toggleShow}) => {
	const [prompt, setPrompt] = useState("");
	const [response, setResponse] = useState("");
	const [loading, setLoading] = useState(false);
	const model = "gemma3:270m";
	const stream = false;
    const sysPrompt = "You are Kevin. Always answer as if you are introducing and describing your portfolio website (yourself). Be concise, friendly, and professional. Respond in the user's language. Here is the user's question: ";

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!prompt.trim()) return;
		setLoading(true);
		setResponse("");
		try {
			const res = await fetch("http://0.0.0.0:11434/api/generate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					prompt: sysPrompt + prompt,
					model,
					stream,
				}),
			});
			const data = await res.json();
			setResponse(data.response ?? "Hiba történt a válasz feldolgozásakor.");
		} catch (err) {
			console.log(err);
			setResponse("Hiba történt a kérés során.");
		}
		setLoading(false);
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-zinc-900 rounded-2xl shadow-md flex flex-col">
			<button type="button" className="ml-auto border-2 border-zinc-900 hover:border-zinc-700 rounded-full p-1 transition duration-1000 cursor-pointer hover:rotate-90" onClick={toggleShow}>
				<X />
			</button>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<label htmlFor="prompt" className="font-semibold text-lg">
					Írd be a kérdésed!
				</label>
				<input
					id="prompt"
					type="text"
					className="border border-emerald-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					placeholder="Pl. Mi az a Gemma AI?"
					disabled={loading}
				/>
				<button
					type="submit"
					className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition"
					disabled={loading}
				>
					{loading ? "Küldés..." : "Küldés"}
				</button>
			</form>
			<div className="mt-6 min-h-[3rem]">
				{loading && (
					<div className="text-emerald-400 font-semibold animate-pulse">
						Válasz érkezik...
					</div>
				)}
				{!loading && response && (
					<div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-gray-800 whitespace-pre-line">
						{response}
					</div>
				)}
			</div>
		</div>
	);
};

export default GemmaChat;
