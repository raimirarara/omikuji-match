import { useRouter } from "next/router"
import { useState } from "react"

export const useOmikuji = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const getUnsei = async (name: string, mbti: string) => {
    try {
      setLoading(true)
      const response = await fetch("/api/omikuji", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          mbti,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error)
      }

      const data = await response.json()
      await router.push(process.env.NEXT_PUBLIC_BASE_URL + `/omikuji/${data.omikuji_id}`)
    } catch (err: any) {
      setError("エラーが発生しました。もう一度お試しください。")
      throw new Error(err.message || "予期せぬエラーが発生しました")
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    getUnsei,
  }
}
