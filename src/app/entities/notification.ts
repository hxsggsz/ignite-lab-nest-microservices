import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';
import { Content } from './content';

export interface NotificationProps {
  CreatedAt: Date;
  Content: Content;
  Category: string;
  RecipientId: string;
  ReadAt?: Date | null;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { CreatedAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      CreatedAt: props.CreatedAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get CreatedAt(): Date {
    return this.props.CreatedAt;
  }

  public set Content(content: Content) {
    this.props.Content = content;
  }

  public get Content(): Content {
    return this.props.Content;
  }

  public set Category(Category: string) {
    this.props.Category = Category;
  }

  public get Category(): string {
    return this.props.Category;
  }

  public set RecipientId(RecipientId: string) {
    this.props.RecipientId = RecipientId;
  }

  public get RecipientId(): string {
    return this.props.RecipientId;
  }

  public set ReadAt(ReadAt: Date | null | undefined) {
    this.props.ReadAt = ReadAt;
  }

  public get ReadAt(): Date | null | undefined {
    return this.props.ReadAt;
  }
}
