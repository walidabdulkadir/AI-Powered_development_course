import db from "../../../../db/db.config";

import { GoogleGenAI } from "@google/genai";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash-lite";
const geminiClient = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// async function main() {
//   const response = await geminiClient.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: "Explain how AI works in few words ",
//   });
//   console.log();
// }
// main();

const getConversationRows = async (limit = 5) => {
  const normalizedLimit = Number.parseInt(limit, 10);
  const safeLimit =
    Number.isNaN(normalizedLimit) || normalizedLimit <= 0
      ? 20
      : normalizedLimit;
  const [rows] = await db.execute(
    `SELECT id,role,content,created_at 
     FROM conversation
     ORDER BY id DESC 
     LIMIT ${safeLimit}`,
  );
  return rows.reverse();
};

export async function createConversationService(question) {
  try {
    //Validation
    if (!question.trim()) {
      const error = new Error("Question is required");
      error.status = 400;
      throw Error;
    }
    //get recent conversation
    const historyRows = await getConversationRows(5);

    //Save to db
    const [result] = await db.execute(
      'INSERT INTO conversation (content) VALUES (? "users") ',
      [question],
    );

    return {
      historyRows,
    };
  } catch (error) {
    console.error("Error in chat:", error.message);
    throw error;
  }
}

// export async function getConversationService(question) {
//   try {
//     return `Chat retrieved successfully with question: ${question}`;
//   } catch (error) {
//     console.error("Error in chat:", error.message);
//     throw error;
//   }
// }
