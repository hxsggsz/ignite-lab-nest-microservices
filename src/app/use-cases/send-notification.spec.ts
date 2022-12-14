import { SendNotification } from './send-notifications';
import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repositories';

describe.only('send notification', () => {
  it('should be able to send notification', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(NotificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      Category: 'social',
      RecipientId: 'recipient id test',
    });

    expect(NotificationRepository.notifications).toBeTruthy();
    expect(NotificationRepository.notifications[0]).toEqual(notification);
  });
});
