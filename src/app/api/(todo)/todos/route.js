import { DbConnection } from '@/DbConnection/DbConnection';
import { Todo } from "@/models/TodoModel";
import { GetUserData } from "@/utils/GetUserData";
import { NextResponse } from "next/server";

// export const dynamic='force-dynamic';

export const GET = async(request) => {

    try {
        

    await DbConnection()
    const user = await GetUserData()

    if (!user){
        return NextResponse.json(
            { success: false, error: "UnAuthenticated please login !" },
            { status: 400 }
        );
    }

    const todos = await Todo.find({addedby: user._id}).sort({createdAt:-1})

    if (!todos) {
        return NextResponse.json(
            { success: false, error: "No todos found" },
            { status: 400 }
        );
    }

    return NextResponse.json({
        success: true,
        todos
    })


    
    } catch (error) {

        return NextResponse.json(
            { success: false, error: error.message },
            { status: 400 }
        );
        
    }

    

}

export const POST = async(request) => {
    try {
        await DbConnection()    
        const user = await GetUserData()

        if (!user){
            return NextResponse.json(
                { success: false, error: "UnAuthenticated please login !" },
                { status: 400 }
            );
            }
            
        const {todo} = await request.json();

        if (!todo){ 
            return NextResponse.json(
                { success: false, error: "All fields are required" },
                { status: 400 }
            );
        }


        const newtodo = await Todo.create({todo, addedby: user._id})

        console.log(newtodo);


        if (!newtodo) {
            return NextResponse.json(
                { success: false, error: "Todo not added" },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            todo: newtodo
        })
}   
catch(error){
    return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
    );
}

}