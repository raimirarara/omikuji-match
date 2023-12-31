import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"

export default function ResultTable({ unsei, name, mbti }: { unsei: any; name: string; mbti: string }) {
  return (
    <TableContainer mt={2}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Td
              colSpan={3}
              sx={{
                fontSize: "md",
                textAlign: "center",
              }}
            >
              {mbti}の{name}さんの今年の運勢は
            </Td>
          </Tr>
        </Thead>
        <Thead>
          <Tr>
            <Th
              sx={{
                color: "red",
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                textAlign: "center",
              }}
            >
              恋愛
            </Th>
            <Th
              sx={{
                color: "red",
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                textAlign: "center",
              }}
            >
              願事
            </Th>

            <Th
              sx={{
                color: "red",
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                textAlign: "center",
              }}
            >
              商売
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td
              sx={{
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                fontSize: "sm",
                overflowX: "scroll",
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              {unsei.恋愛.アドバイス}
            </Td>
            <Td
              sx={{
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                fontSize: "sm",
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              {unsei.願い事.アドバイス}
            </Td>
            <Td
              sx={{
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                fontSize: "sm",
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              {unsei.商売.アドバイス}
            </Td>
          </Tr>
        </Tbody>
        <Thead>
          <Tr>
            <Th
              sx={{
                color: "red",
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                textAlign: "center",
              }}
            >
              健康
            </Th>
            <Th
              sx={{
                color: "red",
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                textAlign: "center",
              }}
            >
              失物
            </Th>
            <Th
              sx={{
                color: "red",
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                textAlign: "center",
              }}
            >
              縁談
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td
              sx={{
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                fontSize: "sm",
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              {unsei.健康.アドバイス}
            </Td>
            <Td
              sx={{
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                fontSize: "sm",
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              {unsei.失物.アドバイス}
            </Td>
            <Td
              sx={{
                WebkitWritingMode: "vertical-rl",
                writingMode: "vertical-rl",
                fontSize: "sm",
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              {unsei.縁談.アドバイス}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
