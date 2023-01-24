import { Subjects, Publisher, OrderCancelledEvent } from '@fsticketz/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
