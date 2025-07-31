export const registerRaffle = async (raffleData) => {
    try {
        // console.log(...raffleData);
      const res = await fetch(
        "https://cekqdyqqu7.execute-api.ap-southeast-2.amazonaws.com/dm-Utilities",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "registerRaffle",
            ...raffleData,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error("errors:", err);
      throw err;
    }
  };