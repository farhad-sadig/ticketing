import { PaymentCreatedEvent, Publisher, Subjects } from "@fsticketz/common";
export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
	subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
