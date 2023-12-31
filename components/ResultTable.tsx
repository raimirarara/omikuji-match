import { Center, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"

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
            <Th>
              <Center>
                <Text
                  sx={{
                    color: "red",
                    WebkitWritingMode: "vertical-rl",
                    writingMode: "vertical-rl",
                    textAlign: "center",
                  }}
                >
                  恋愛
                </Text>
              </Center>
            </Th>
            <Th>
              <Center>
                <Text
                  sx={{
                    color: "red",
                    WebkitWritingMode: "vertical-rl",
                    writingMode: "vertical-rl",
                    textAlign: "center",
                  }}
                >
                  願事
                </Text>
              </Center>
            </Th>

            <Th>
              <Center>
                <Text
                  sx={{
                    color: "red",
                    WebkitWritingMode: "vertical-rl",
                    writingMode: "vertical-rl",
                    textAlign: "center",
                  }}
                >
                  商売
                </Text>
              </Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td
              sx={{
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              <Text
                sx={{
                  WebkitWritingMode: "vertical-rl",
                  writingMode: "vertical-rl",
                  fontSize: "sm",
                }}
              >
                {unsei.恋愛.アドバイス}
              </Text>
            </Td>
            <Td
              sx={{
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              <Text
                sx={{
                  WebkitWritingMode: "vertical-rl",
                  writingMode: "vertical-rl",
                  fontSize: "sm",
                }}
              >
                {unsei.願い事.アドバイス}
              </Text>
            </Td>
            <Td
              sx={{
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              <Text
                sx={{
                  WebkitWritingMode: "vertical-rl",
                  writingMode: "vertical-rl",
                  fontSize: "sm",
                }}
              >
                {unsei.商売.アドバイス}
              </Text>
            </Td>
          </Tr>
        </Tbody>
        <Thead>
          <Tr>
            <Th>
              <Center>
                <Text
                  sx={{
                    color: "red",
                    WebkitWritingMode: "vertical-rl",
                    writingMode: "vertical-rl",
                    textAlign: "center",
                  }}
                >
                  健康
                </Text>
              </Center>
            </Th>
            <Th>
              <Center>
                <Text
                  sx={{
                    color: "red",
                    WebkitWritingMode: "vertical-rl",
                    writingMode: "vertical-rl",
                    textAlign: "center",
                  }}
                >
                  失物
                </Text>
              </Center>
            </Th>
            <Th>
              <Center>
                <Text
                  sx={{
                    color: "red",
                    WebkitWritingMode: "vertical-rl",
                    writingMode: "vertical-rl",
                    textAlign: "center",
                  }}
                >
                  縁談
                </Text>
              </Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td
              sx={{
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              <Text
                sx={{
                  WebkitWritingMode: "vertical-rl",
                  writingMode: "vertical-rl",
                  fontSize: "sm",
                }}
              >
                {unsei.健康.アドバイス}
              </Text>
            </Td>
            <Td
              sx={{
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              <Text
                sx={{
                  WebkitWritingMode: "vertical-rl",
                  writingMode: "vertical-rl",
                  fontSize: "sm",
                }}
              >
                {unsei.失物.アドバイス}
              </Text>
            </Td>
            <Td
              sx={{
                height: "280px",
                wordBreak: "break-all", // 単語を途中で区切って折り返す
                whiteSpace: "normal",
              }}
            >
              <Text
                sx={{
                  WebkitWritingMode: "vertical-rl",
                  writingMode: "vertical-rl",
                  fontSize: "sm",
                }}
              >
                {unsei.縁談.アドバイス}
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
