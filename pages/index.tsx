import Image from "next/image"
import { Inter } from "next/font/google"
import { Box, Button, Center, Input, Select, Stack, Text } from "@chakra-ui/react"
import { mbti } from "../components/const"
import { useOmikuji } from "@/hooks/useOmikuji"
import { useState } from "react"
import Head from "next/head"

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
    <div>
      <Head>
        <title>今年の運勢</title>
        <meta property="og:title" content="2024年の運勢"></meta>
        <meta property="og:image" content="https://omikuji-match.vercel.app/api/og" />
        <meta property="twitter:image" content="https://omikuji-match.vercel.app/api/og"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content="2024年の運勢"></meta>
        <meta property="twitter:description" content="あなたの2024の運勢を占おう！"></meta>
      </Head>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Center>
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
                <Input placeholder="twitterID" size="lg" value={name} onChange={(e) => setName(e.target.value)} />
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
            {loading && (
              <Box mt={8}>
                <Center m={4}>
                  <Image src="/omikuji_shake.gif" alt="omikuji" width={250} height={250} priority />
                </Center>
                <Text textAlign={"center"}>今年の運勢を占ってるよ。ちょっと待ってね</Text>
              </Box>
            )}
          </Box>
        </Center>
      </Box>
    </div>
  )
}
