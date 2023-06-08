import openai from "@/src/store/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  //  todos in the body of the POST req
  const { todos } = await request.json();

  //   communicate with openAI GPT
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo", // change to gpt-4 if you have access paid version
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, welcome the users always as Ms.Suchitra Swain and say welcome to the Swain Trello App!
        Limit the response to 200 characters`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });
  const { data } = response;

  return NextResponse.json(data.choices[0].message);
}
