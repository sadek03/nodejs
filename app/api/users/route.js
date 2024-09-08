import { NextResponse } from "next/server";

// export function GET() {
//   return NextResponse.json({
//     name: "sadek",
//   });
// }

// export async function POST(request) {
//   const data = await request.json();

//   if (!data.name || !data.age || !data.phone) {
//     return NextResponse.json({ Announce: "Required Fields Are Empty" });
//   }

//   return NextResponse.json(
//     {
//       Announce:
//         data.age >= 25
//           ? "Ypu Are 25+ "
//           : data.age >= 18
//           ? "you are 18+"
//           : "you are 18 down",
//     },
//     {
//       status: data.age >= 25 ? "200" : data.age >= 18 ? "200" : "400",
//     }
//   );

//   return NextResponse.json(
//     {
//       Announce: data.age >= 18 ? "You Are Good to go" : "You are not allowed ",
//     },
//     { status: data.age >= 18 ? 200 : 400 }
//   );
// }
export async function POST(request) {
  const { name, email, phone, password } = await request.json();

  if (!name || !email || !phone || !password) {
    return NextResponse.json(
      { announce: "required files are empty" },
      { status: 400 }
    );
  }

  // const api_request = async () => {
  try {
    const api_request = await fetch(process.env.API_LINK + "create.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        table: "users",
        validation: [
          {
            name: "required|string",
            email: "required|email|unique",
            phone: "required|numeric|unique|length:10",
            password: "required|min-length:6",
          },
        ],
        data: [{ name, email, phone, password }],
      }),
    });
    const response = await api_request.json();
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 400 }
    );
  }
}

export async function GET() {
  const request = await fetch(process.env.API_LINK + "read.php", {
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
  const response = await request.json();
  console.log(response);
  return NextResponse.json({ response }, { status: 200 });
}

export async function PUT(request) {
  const { id, name, email, phone } = await request.json();

  const updateRequest = await fetch(process.env.API_LINK + "update.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      table: "users",
      validation: [
        {
          name: "required|string",
          email: "required|email",
          phone: "required|numeric",
        },
      ],
      data: [{ id, name, email, phone }],
      validation: [
        {
          on: "id",
          type: "=",
          value: id,
        },
      ],
    }),
  });
  const updateResponse = await updateRequest.json();
  return NextResponse.json({ updateResponse });
}

export async function DELETE(request) {
  const { id } = await request.json();
  const requestt = await fetch(process.env.API_LINK + "delete.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      table: "users",
      conditions: [
        {
          on: "id",
          type: "=",
          value: id,
        },
      ],
    }),
  });
  const response = await requestt.json();
  console.log(response);
  return NextResponse.json({ response }, { status: 200 });
}
