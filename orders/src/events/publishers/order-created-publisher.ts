import { Publisher, OrderCreatedEvent, Subjects } from '@iacstickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
