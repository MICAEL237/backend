import prisma from "../../../config/prisma";

export async function ExistingUser(email: string): Promise<any> {
  const User = await prisma.user.findFirst({
    where: { email: email },
    omit:{password: true}
    
  });

  if(!User){
    console.log("cette utilisateur n'existe pas ")
    return
  }

  return User;
}



