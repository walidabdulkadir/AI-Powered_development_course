import {
  createConversationService,
  getConversationService,
} from "../service/chat.service.js";

export async function createConversationController(req, res, next) {
  try {
    const { question } = req.body;

    // Call the service function to create a conversation
    const result = await createConversationService(question);
    res.status(201).json({
      success: true,
      message: "Conversation created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in createConversationController:", error.message);
    next(error);
  }
}

export async function getConversationController(req, res, next) {
  try {
    const { question } = req.query;

    // Call the service function to get a conversation
    const result = await getConversationService(question);
    res.status(200).json({
      success: true,
      message: "Conversation retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in getConversationController:", error.message);
    next(error);
  }
}
