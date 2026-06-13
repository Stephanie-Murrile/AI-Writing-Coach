const chat = document.getElementById("chat");

document.getElementById("send").onclick = async () => {
  const input = document.getElementById("message");
  const text = input.value.trim();
  if (!text) return;

  chat.innerHTML += `<p class="user"><b>You:</b> ${text}</p>`;
  input.value = "";

  const res = await fetch("YOUR_SUPABASE_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text }),
  });

  const data = await res.json();

  const clean = data.reply
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/###/g, "")
    .trim();

  chat.innerHTML += `<p class="bot"><b>Bot:</b> ${clean}</p>`;

  chat.scrollTop = chat.scrollHeight;
};