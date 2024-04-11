import { NextResponse } from "next/server"

export const GET = async(request) => {

    const response = NextResponse.json({success: true},{status:200})

    response.cookies.set("auth_token","",{
        expires: new Date(),
    })
    
    return response;

}