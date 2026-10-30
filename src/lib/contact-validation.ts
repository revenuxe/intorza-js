export type ContactInput = { name: string; email: string | null; phone: string; subject: string; message: string | null };

export function normalizePhone(value: string): string | null {
  const input = value.trim();
  if (!input || input.length > 32 || !/^\+?[\d\s().-]+$/.test(input)) return null;
  let phone = input.replace(/[\s().-]/g, "");
  if (phone.startsWith("00")) phone = `+${phone.slice(2)}`;
  const digits = phone.startsWith("+") ? phone.slice(1) : phone;
  return /^\d{7,15}$/.test(digits) ? phone : null;
}

export function validateContact(input: ContactInput): string | null {
  if (input.name.length < 2 || input.name.length > 120)
    return "Enter a name between 2 and 120 characters.";
  if (input.email !== null && (input.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)))
    return "Enter a valid email address.";
  if (!normalizePhone(input.phone))
    return "Enter a valid mobile number with 7 to 15 digits, including your country code when needed.";
  if (input.subject.length < 3 || input.subject.length > 200)
    return "Enter a subject between 3 and 200 characters.";
  if (input.message !== null && (input.message.length < 10 || input.message.length > 5000))
    return "Enter a message between 10 and 5,000 characters.";
  return null;
}
