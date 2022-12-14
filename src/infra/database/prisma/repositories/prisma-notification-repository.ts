import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification';
import { NotificationRepository } from '../../../../app/repositories/notification-repositories';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async Create(notification: Notification) {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        Category: notification.Category,
        Content: notification.Content.value,
        RecipientId: notification.RecipientId,
        ReadAt: notification.ReadAt,
        CreatedAt: notification.CreatedAt,
      },
    });
  }
}
