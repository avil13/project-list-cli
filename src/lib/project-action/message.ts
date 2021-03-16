import { MessageCode } from '@/types';

export class Message {
  constructor(
    public readonly message: string,
    public readonly description: string = '',
    public readonly code: MessageCode = MessageCode.OK,
  ) {}
}
