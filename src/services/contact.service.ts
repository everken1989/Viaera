export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactMessage(payload: ContactPayload) {
  // Reemplaza este mock por tu API real.
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { ok: true, payload };
}
