import { Notification } from '../entities/notification';
import { Content } from '../entities/content';
import { NotificationRepository } from '../repositories/notification-repositories';
import { Injectable } from '@nestjs/common';

interface SendNotificationRequest {
  RecipientId: string;
  content: string;
  Category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    Request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { RecipientId, Category, content } = Request;

    const notification = new Notification({
      RecipientId,
      Content: new Content(content),
      Category,
    });

    await this.notificationRepository.Create(notification);

    return {
      notification,
    };
  }
}
