// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import OpenAI from "openai"
import { systemPrompt } from "../../components/const"
import { supabaseServer } from "@/lib/supabaseServer"
import { randomUUID } from "crypto"

const openai_key = process.env.OPENAI_API_KEY as string
const openai = new OpenAI({ apiKey: openai_key })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, mbti } = req.body

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: `名前:${name}, MBTI:${mbti}` },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  })

  const data = completion.choices[0].message.content as string
  try {
    JSON.parse(data)
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: "Parse error" })
  }
  const omikujiId = randomUUID()
  const { error } = await supabaseServer.from("omikuji").insert({
    omikuji_id: omikujiId,
    name,
    mbti,
    omikuji: JSON.parse(data),
  })

  if (error) {
    res.status(500).json({ error: error.message })
  }

  res.status(200).json({ omikuji_id: omikujiId })
}
