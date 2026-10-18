export type ContactInput = { name: string; email: string; subject: string; message: string };
export function validateContact(input: ContactInput): string | null {
  if (input.name.length < 2 || input.name.length > 120)
    return "Enter a name between 2 and 120 characters.";
  if (input.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email))
    return "Enter a valid email address.";
  if (input.subject.length < 3 || input.subject.length > 200)
    return "Enter a subject between 3 and 200 characters.";
  if (input.message.length < 10 || input.message.length > 5000)
    return "Enter a message between 10 and 5,000 characters.";
  return null;
}
