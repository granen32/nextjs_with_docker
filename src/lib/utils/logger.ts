import winston from 'winston';
import { format } from 'date-fns';

const { combine, timestamp, printf, colorize } = winston.format;

interface LogInfo {
  level: string;
  message: string;
  timestamp: string;
}

const logFormat = printf((info: winston.Logform.TransformableInfo) => {
  const formattedTimestamp = format(new Date(info.timestamp as string), 'yyyy-MM-dd HH:mm:ss');
  return `${formattedTimestamp} ${info.level}: ${info.message}`;
});

export const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  format: combine(timestamp(), logFormat),
  transports: [
    new winston.transports.Console({
      format: combine(colorize(), logFormat),
    }),
    new winston.transports.File({ 
      filename: 'logs/error.log', 
      level: 'error',
      format: logFormat,
    }),
    new winston.transports.File({ 
      filename: 'logs/combined.log',
      format: logFormat,
    }),
  ],
});

export const logError = (error: Error, context?: string) => {
  logger.error(`[${context || 'ERROR'}] ${error.message}`, {
    stack: error.stack,
    context,
  });
};

export const logInfo = (message: string, context?: string) => {
  logger.info(`[${context || 'INFO'}] ${message}`);
};

export const logDebug = (message: string, context?: string) => {
  logger.debug(`[${context || 'DEBUG'}] ${message}`);
}; 