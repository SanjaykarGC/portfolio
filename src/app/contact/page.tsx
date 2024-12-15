import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sanjaykar GC",
  description:
    "Sanjaykar GC is a developer, witer and speaker. He is a SaaS developer with a strong financial mindset, a passion for maintaining physical fitness, and a love for exploring the world, seamlessly balancing his travels with remote work.",
};

export default function ContactPage() {
  return (
    <Container>
      <span className="text-6xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or fill up this contact form. I will get back
        to you ASAP - I promise.
      </Paragraph>
      <Contact />
    </Container>
  );
}
