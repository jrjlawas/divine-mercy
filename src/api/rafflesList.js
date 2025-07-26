export const getRaffleLists = async () => {
  try {
    const res = await fetch(
      "https://cekqdyqqu7.execute-api.ap-southeast-2.amazonaws.com/dm-Utilities",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "getRaffleHeaders",
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("error:", err);
    throw err; // rethrow if caller needs to handle it
  }
};
