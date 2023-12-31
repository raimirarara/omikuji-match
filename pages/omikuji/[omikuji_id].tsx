import ResultTable from "@/components/ResultTable"
import { TwitterIntentTweet } from "@/components/TwitterIntentTweet"
import { supabaseServer } from "@/lib/supabaseServer"
import { Json } from "@/supabase/database.types"
import { Box, Button, Center } from "@chakra-ui/react"
import Head from "next/head"

type Props = {
  data: {
    mbti: string
    name: string
    omikuji: Json
    omikuji_id: string
  }
  error: string | null
}

export default function OmikujiId(props: Props) {
  const { data, error } = props
  const thisUrl = process.env.NEXT_PUBLIC_BASE_URL + "/omikuji/" + data.omikuji_id
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
      <Box>
        <ResultTable unsei={data.omikuji} name={data.name} mbti={data.mbti} />
        <Center m={8}>
          <Button
            as={TwitterIntentTweet}
            text={`${data.mbti}の${data.name}の2024年の運勢`}
            url={thisUrl}
            hashtags={["おみくじ2024", "2024年の運勢", `${data.mbti}`]}
          >
            <svg
              viewBox="0 0 1200 1227"
              xmlns="http://www.w3.org/2000/svg"
              role="none"
              className="twtr-color-fill--black"
              width={15}
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
            </svg>
            &nbsp;&nbsp;ポスト
          </Button>
        </Center>
      </Box>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const { omikuji_id } = context.query
  const { data, error } = await supabaseServer.from("omikuji").select("*").eq("omikuji_id", omikuji_id).single()
  if (error) return { props: { error: error.message } }
  if (!data) return { props: { error: "not found" } }

  return {
    props: {
      data,
      error: null,
    },
  }
}
