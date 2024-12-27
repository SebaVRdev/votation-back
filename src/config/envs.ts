import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars{
    PORT: number;
    NATS_SERVERS: string[];
    DATABASE_URL:string;
    DATABASE_NAME:string;
};
// Configurar mi validador de esquema
// Verifica que si el puerto no viene que lance alguna exception

const envSchema = joi.object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    DATABASE_NAME: joi.string().required()
}).unknown(true);


const { error, value } = envSchema.validate({
    ...process.env
});


if (error) {
    // Significa que falta el puerto
    throw new Error(`Config validation error ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    natsServers: envVars.NATS_SERVERS    
} 