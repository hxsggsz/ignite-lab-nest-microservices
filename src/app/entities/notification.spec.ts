import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      Content: new Content('essa é uma notificação de teste'),
      Category: 'social',
      RecipientId: 'example recipient id',
    });

    expect(notification).toBeTruthy();
  });
});
