import { NextResponse } from "next/server"
import {GetUserData} from '../../../../utils/GetUserData.js'

export const dynamic = 'force-dynamic'

export const GET = async(request) => {
    try {
        const user = await GetUserData()
        if (!user){
            return NextResponse.json(
                { success: false, error: "UnAuthenticated please login 2 !" },
                { status: 400 }
            );
        }

        return NextResponse.json({success:true,user})
}
catch{
    return NextResponse.json(
        { success: false, error: "UnAuthenticated please login  2!" },
        { status: 400 }
    );
}

}
