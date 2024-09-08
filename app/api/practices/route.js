import { NextResponse } from "next/server";

// export async function GET() {
//   const apiRequest = await fetch(process.env.API_URL + "read.php", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       table: "users",
//       select: ["id", "name", "email", "phone", "created_at"],
//       order: { on: "id", type: "DESC" },
//     }),
//   });

//   const response = await apiRequest.json();

//   const dataWithDiscount = [];
//   const userData = response.data;

//   userData.forEach((user, index) => {
//     let discountAmount = 100;
//     if (index <= 2) {
//       discountAmount = 500;
//     }

//     const modifiedData = {
//       ...user,
//       discountAmount: discountAmount,
//     };

//     dataWithDiscount.push(modifiedData);
//   });

//   return NextResponse.json({ response: dataWithDiscount }, { status: 200 });
// }

export async function GET() {
  const apiRequest = await fetch(process.env.API_LINK + "read.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      table: "users",
      select: ["id", "name", "email", "phone", "created_at"],
      order: { on: "id", type: "DESC" },
    }),
  });

  const response = await apiRequest.json();
  const userData = response.data;
  const userLength = userData.length;

  const winners = [];
  const selectedIndex = []; // 1, 3

  for (let i = 0; i < userLength; i++) {
    const winnerIndex = generateWinnerIndex(userLength);
    if (!selectedIndex.includes(winnerIndex) && selectedIndex.length < 2) {
      const winnerData = userData[winnerIndex];
      selectedIndex.push(winnerIndex);
      winners.push(winnerData);
    }
  }

  return NextResponse.json({ response: winners }, { status: 200 });
}

function generateWinnerIndex(maximum) {
  return Math.floor(Math.random() * maximum);
}
