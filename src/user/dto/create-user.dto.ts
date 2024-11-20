import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsBoolean()
    @IsOptional() // Opcional para diferenciar el tipo de autenticación
    isGoogleAccount?: boolean;
}
