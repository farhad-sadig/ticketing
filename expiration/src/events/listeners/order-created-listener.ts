import { Listener, OrderCreatedEvent, Subjects } from "@fsticketz/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queueGroupName";
import { expirationQueue } from "../../queues/expiration-queue";
export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
	subject: Subjects.OrderCreated = Subjects.OrderCreated;
	queueGroupName = queueGroupName;
	async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
		const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
		console.log("Waiting this many milliseconds to process the delay ", delay);
		await expirationQueue.add({ orderId: data.id }, { delay: delay });
		msg.ack();
	}
}
