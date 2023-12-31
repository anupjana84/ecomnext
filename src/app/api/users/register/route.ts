import {connect} from '@/dbConfig/dbConfig'

import User from '@/models/userModel'
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
connect()
export async function POST(request:NextRequest) {
    try {
        const reqBody=await request.json()
        const {name,email,password}=reqBody
        console.log(reqBody)
        const user =await User.findOne({email:email})
        if(user) {
            return NextResponse.json({error:'user Already register'},{status:400})
            
        }
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashPassword= await bcryptjs.hash(password,salt)
        const newUser= new User({
            name,
            email,
            password:hashPassword
        })
        const saveUser= await newUser.save()
        return NextResponse.json({
            message:'user Save Successfylly',
            success:true
        })
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }

    
}