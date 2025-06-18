// app/api/get-video-script/route.js
import ai from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log("🟡 Received prompt:", prompt);

    const result = await ai.models.generateContent({
      model: "gemini-1.5-flash", // ✅ Free model
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      console.error("❌ Gemini returned no text.");
      return NextResponse.json({ error: "No response from Gemini" }, { status: 500 });
    }

    console.log("🔵 Gemini Response:", responseText);

    const match = responseText.match(/```(?:json)?([\s\S]*?)```/);

    if (!match) {
      console.warn("⚠️ No JSON block found, returning plain text.");
      return NextResponse.json({ raw: responseText }, { status: 200 });
    }

    const jsonText = match[1].trim();

    let parsed;
    try {
      parsed = JSON.parse(jsonText);
    } catch (e) {
      console.error("❌ JSON parse failed:", e.message);
      return NextResponse.json({ error: "Failed to parse JSON", raw: jsonText }, { status: 500 });
    }

    return NextResponse.json({ result: parsed });
  } catch (e) {
    console.error("🔥 Unexpected Error:", e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
