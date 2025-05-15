// services/chat/queue.js
const tasks = new Map();
const retryIntervals = [1000, 5000, 15000]; // Задержки для повторов

class LocalQueue {
  constructor(worker) {
    this.worker = worker;
    setInterval(this.process.bind(this), 1000);
  }

  add(taskName, data) {
    const taskId = Date.now().toString();
    tasks.set(taskId, { 
      ...data,
      attempts: 0,
      taskId
    });
    return { id: taskId };
  }

  async process() {
    for (const [taskId, task] of tasks) {
      if (task.attempts >= 3) {
        tasks.delete(taskId);
        continue;
      }

      try {
        await this.worker(task);
        tasks.delete(taskId);
      } catch (error) {
        task.attempts++;
        task.nextAttempt = Date.now() + retryIntervals[task.attempts];
      }
    }
  }
}

module.exports = LocalQueue;