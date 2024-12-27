import { Controller, Get } from "@nestjs/common";

@Controller('auth')
export class AuthController{
    
    @Get('google/login')
    handleLogin(){
        return { msg: 'GOOGLE LOGIN' }
    }

    @Get('google/redirect')
    handleRedirect(){
        return { msg: 'OK' }        
    }
}