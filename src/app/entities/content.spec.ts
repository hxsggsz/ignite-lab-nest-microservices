import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification', () => {
    const content = new Content('essa é uma notificação de teste');

    expect(content).toBeTruthy();
  });

  it('shouldnt be able to create a notification less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('shouldnt be able to create a notification more than 255 characters', () => {
    expect(() => new Content('a'.repeat(256))).toThrow();
  });
});
