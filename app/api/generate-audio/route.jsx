import axios from "axios";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import util from "util";

const writeFile = util.promisify(fs.writeFile);

export async function POST(req) {
  try {
    const { text, id } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    const apiKey = process.env.ELEVEN_API_KEY;
    const voiceId = "EXAVITQu4vr4xnSDxMaL"; // Rachel

    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      },
      {
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        responseType: "arraybuffer",
      }
    );

    // Save the audio to a file locally (only works in Node.js server context)
    const fileName = `${id || "output"}.mp3`;
    const filePath = path.join(process.cwd(), "public", fileName);
    await writeFile(filePath, response.data);

    console.log("🎧 Audio file written to:", filePath);

    return NextResponse.json({ message: "Audio saved", file: `/public/${fileName}` });
  } catch (error) {
    console.error("🎤 TTS Error:", error?.response?.data || error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
