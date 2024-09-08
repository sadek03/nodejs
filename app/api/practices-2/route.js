import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, dob, dob2, marks } = await request.json();

  // const year = +dob.substring(0, 4);

  // const currentYear = new Date().getFullYear();

  // const age = currentYear - year;

  // const percent = marks / 6;

  // return NextResponse.json({
  //   message: `Your age is ${age} and you have obtained ${percent.toFixed(
  //     2
  //   )}% in HSLC`,
  // });

  const dobRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

  if (dobRegex.test(dob2)) {
    return NextResponse.json({ message: "Validated" });
  } else {
    return NextResponse.json({ message: "Invalid format" });
  }

  //   const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  //   if (emailRegex.test(email)) {
  //     return NextResponse.json({ message: "Validated" });
  //   } else {
  //     return NextResponse.json({ message: "Invalid format" });
  //   }

  //   const regex = /^[6-9]\d{9}$/;

  //   if (regex.test(phone)) {
  //     return NextResponse.json({ message: "Validated" });
  //   } else {
  //     return NextResponse.json({ message: "Invalid format" });
  //   }

  //   const array = String(phone).split("");
  //   const firstChar = array[0];

  //   const validate = [6, 7, 8, 9];
  //   if (validate.includes(Number(firstChar))) {
  //     if (array.length != 10) {
  //       return NextResponse.json({
  //         message: "Invalid length",
  //         length: firstChar.length,
  //       });
  //     } else {
  //       return NextResponse.json({
  //         message: "Validated",
  //         length: firstChar.length,
  //       });
  //     }
  //   } else {
  //     return NextResponse.json({ message: "Invalid format" });
  //   }
}
