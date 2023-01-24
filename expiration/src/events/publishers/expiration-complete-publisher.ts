import {
	ExpirationCompleteEvent,
	Publisher,
	Subjects
} from "@fsticketz/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
	subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
