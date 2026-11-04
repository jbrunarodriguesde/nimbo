import {cookies} from 'next/headers';
import {SignJWT,jwtVerify} from 'jose';
export async function secret(){if(!process.env.SESSION_SECRET)throw Error('Configure SESSION_SECRET');return new TextEncoder().encode(process.env.SESSION_SECRET)}
export async function session(id:string){const token=await new SignJWT({id}).setProtectedHeader({alg:'HS256'}).setExpirationTime('7d').sign(await secret());(await cookies()).set('nimbo',token,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:604800})}
export async function user(){try{return (await jwtVerify((await cookies()).get('nimbo')?.value||'',await secret())).payload.id as string}catch{return null}}
