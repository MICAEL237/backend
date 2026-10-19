import prisma from "../../../config/prisma"

export async function ExistingUser(email:string): Promise<boolean> {


   try {
     const User = await prisma.user.findFirst({
        where:{email: email}
    })

    if(!User){
        return false
    }
   } catch (error) {
    console.log('pas trouver', error)
    
   }


    return true
    
}

