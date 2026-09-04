export async function createConversationService(question) {
  try {
    return `Conversation created successfully to db with question: ${question}`;
  } catch (error) {
    console.error("Error in createConversationService:", error.message);
    throw error;
  }
}

export async function getConversationService(question) {
  try {
    return `Conversation retrieved successfully with question: ${question}`;
  } catch (error) {
    console.error("Error in getConversationService:", error.message);
    throw error;
  }
}
