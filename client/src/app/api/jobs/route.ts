import { NextRequest,NextResponse } from "next/server";
import connectDB from "@/db/config";
import jobModel from "@/Models/jobModels";

export async function GET(req:NextRequest,res:NextResponse) {
  const {search}=res;
  console.log(search);
  
  try {
    console.log("connecting MongoDB");
    await connectDB();
    console.log("MongoDB connected");
    const result = await jobModel.find({});
    return NextResponse.json({ result: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "connection failed" }, { status: 400 });
  }
}
