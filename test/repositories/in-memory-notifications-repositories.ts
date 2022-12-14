import { Notification } from 'src/app/entities/notification';
import { NotificationRepository } from 'src/app/repositories/notification-repositories';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async Create(notification: Notification) {
    this.notifications.push(notification);
  }
}
