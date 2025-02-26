import crypto from 'crypto';

export const encrypt = (text: string): string => {
  const algorithm = 'aes-256-ctr';
  const secretKey = process.env.ENCRYPTION_KEY || 'default-encryption-key';
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};

export const decrypt = (hash: string): string => {
  const algorithm = 'aes-256-ctr';
  const secretKey = process.env.ENCRYPTION_KEY || 'default-encryption-key';
  const [ivHex, encryptedHex] = hash.split(':');

  const iv = Buffer.from(ivHex, 'hex');
  const encrypted = Buffer.from(encryptedHex, 'hex');

  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);

  return decrypted.toString();
}; 