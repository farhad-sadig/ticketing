import { Publisher, OrderCreatedEvent, Subjects } from '@fsticketz/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
