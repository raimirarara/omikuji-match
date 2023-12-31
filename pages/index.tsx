import Image from "next/image"
import { Inter } from "next/font/google"
import { Box, Button, Input, Select, Stack } from "@chakra-ui/react"
import { mbti } from "../components/const"
import { useOmikuji } from "@/hooks/useOmikuji"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const { loading, error, getUnsei } = useOmikuji()

  const [name, setName] = useState("")
  const [myMbti, setMyMbti] = useState("")
  const [unsei, setUnsei] = useState<{} | null>(null)
  const handleClick = async () => {
    if (!name || !myMbti) return alert("名前と性格タイプをどちらも入力してください。")
    getUnsei(name, myMbti)
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
        }}
      >
        <Image className="" src="/omikuji.webp" alt="omikuji" width={400} height={400} priority />
        <Box
          sx={{
            mt: "2rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack spacing={3}>
            <Input placeholder="名前" size="lg" value={name} onChange={(e) => setName(e.target.value)} />
            <Select placeholder="性格タイプ" size="lg" value={myMbti} onChange={(e) => setMyMbti(e.target.value)}>
              {mbti.map((mbti) => (
                <option key={mbti.type} value={mbti.type}>
                  {mbti.type + " " + mbti.name}
                </option>
              ))}
            </Select>
            <Button onClick={handleClick}>おみくじをひく</Button>
          </Stack>
        </Box>
        {loading && <p>loading...</p>}
      </Box>
    </Box>
  )
}
