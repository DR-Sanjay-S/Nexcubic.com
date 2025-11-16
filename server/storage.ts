import { type Contact, type InsertContact, type Application, type InsertApplication } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  createApplication(application: InsertApplication): Promise<Application>;
  getAllApplications(): Promise<Application[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private applications: Map<string, Application>;

  constructor() {
    this.contacts = new Map();
    this.applications = new Map();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      company: insertContact.company ?? null,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createApplication(insertApplication: InsertApplication): Promise<Application> {
    const id = randomUUID();
    const application: Application = {
      ...insertApplication,
      phone: insertApplication.phone ?? null,
      resume: insertApplication.resume ?? null,
      coverLetter: insertApplication.coverLetter ?? null,
      id,
      createdAt: new Date(),
    };
    this.applications.set(id, application);
    return application;
  }

  async getAllApplications(): Promise<Application[]> {
    return Array.from(this.applications.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
