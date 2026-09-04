import { createConversationService } from "../service/chat.service";

export async function createConversationController(req, res) {
  try {
    const { question } = req.body;
    const result = await createConversationService(question);

    res.status(201).json({
      success: true,
      message: "Conversation posted successfully",
      data: result,
    });
  } catch (error) {
    throw Error;
  }
}

// export async function getConversationController(req, res) {
//   try {
//     res.send("Conversation fetched");
//   } catch {
//     console.error("Error while fetching");
//   }
// }
