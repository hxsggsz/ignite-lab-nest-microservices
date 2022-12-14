export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private ValidateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 255;
  }

  constructor(content: string) {
    if (!this.ValidateContentLength(content)) {
      throw new Error('content length is invalid');
    }

    this.content = content;
  }
}
