import express from "express";
import {
  createConversationController,
  getConversationController,
} from "./controller/chat.controller.js";

const chatRouter = express.Router();

chatRouter.get("/conversation", getConversationController);

chatRouter.post("/conversation", createConversationController);

// chatRouter.post("/message")

export default chatRouter;
