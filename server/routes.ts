import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertApplicationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json({ success: true, contact });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/applications", async (req, res) => {
    try {
      const data = insertApplicationSchema.parse(req.body);
      const application = await storage.createApplication(data);
      res.json({ success: true, application });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/applications", async (_req, res) => {
    try {
      const applications = await storage.getAllApplications();
      res.json(applications);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
