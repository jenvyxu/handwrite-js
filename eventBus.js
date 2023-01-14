// events: {'click': [{type: 'on', handlers: []}]}

class EventBus {
  constructor() {
    this.events = new Map();
  }

  on(eventType, handler) {
    if (!this.events.has(eventType)) {
      this.events.set(eventType, new Set());
    }
    this.events.get(eventType).add({
      type: "on",
      handler,
    });
  }

  once(eventType, handler) {
    if (!this.events.has(eventType)) {
      this.events.set(eventType, new Set());
    }
    this.events.get(eventType).add({
      type: "once",
      handler,
    });
  }

  emit(eventType, data) {
    const targetEvents = this.events.get(eventType);
    if (targetEvents) {
      targetEvents.forEach((item) => {
        const { type, handler } = item;
        handler(data);
        if (type === "once") {
          targetEvents.delete(item);
        }
      });
    }
  }

  off(eventType, handler) {
    if (this.events.has(eventType)) {
      if (handler) {
        this.events.get(eventType).forEach((item) => {
          if (handler === item.handler) {
            this.events.get(eventType).delete(item);
          }
        });
      } else {
        this.events.delete(eventType);
      }
    }
  }
}

const bus = new EventBus();

bus.on("click", (str) => {
  console.log("click: " + str);
});
bus.emit("click");
bus.emit("click", "hello world");

bus.once("hello", () => {
  console.log("hello");
});
bus.emit("hello");
