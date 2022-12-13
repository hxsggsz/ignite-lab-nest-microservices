import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  GetNotification() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async PostNotification(@Body() body: CreateNotificationBody) {
    const { RecipientId, Category, Content } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        Content,
        Category,
        RecipientId,
      },
    });
  }
}
