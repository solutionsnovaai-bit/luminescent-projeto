// WhatsApp do Victor (Nova AI Solutions) — é pra cá que o projeto puxa a conversa.
export const WHATS_NUMBER = '5511951007967';

export function whatsLink(message) {
  return `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(message)}`;
}
