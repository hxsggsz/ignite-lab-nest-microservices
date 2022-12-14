import { Notification } from "../entities/notification";

export abstract class NotificationRepository {
  abstract Create(notification: Notification): Promise<void>;
}