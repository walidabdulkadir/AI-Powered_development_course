import { createConversationService } from "../service/chat.service.js";

export async function createConversationController(req, res) {
  try {
    const { question } = req.body;
    const result = await createConversationService(question);

    res.status(201).json({
      success: true,
      message: "Conversation posted successfully",
      data: result,
    });
  } catch {
    throw new Error();
  }
}

// export async function getConversationController(req, res) {
//   try {
//     res.send("Conversation fetched");
//   } catch {
//     console.error("Error while fetching");
//   }
// }
