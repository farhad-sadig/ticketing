import { Publisher, Subjects, TicketUpdatedEvent } from "@fsticketz/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
	subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
