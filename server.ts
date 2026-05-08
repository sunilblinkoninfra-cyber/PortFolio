import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, projectType, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const resendKey = process.env.RESEND_API_KEY;
    
    if (!resendKey) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      // In development, we might want to pretend it worked
      if (process.env.NODE_ENV !== "production") {
        console.log("Form Data:", { name, email, projectType, message });
        return res.json({ success: true, message: "Dev mode: Form data logged to console." });
      }
      return res.status(500).json({ error: "Email service not configured" });
    }

    const resend = new Resend(resendKey);

    try {
      const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["skdpunk@gmail.com"], // User requested email
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      res.json({ success: true, data });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
