class apiQueue {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  async enqueue(apiData) {
    const response = await fetch(apiData);
    if (!response.ok) {
      throw new Error(`Error occur while fetching in ${apiData}`);
    }
    const data = await response.json();
    this.queue.push(data);
    console.log("push", this.queue);
    console.log('data', data);
    await this.dequeue();
  }

  async dequeue() {
    if (this.queue.length > 0) {
      this.isProcessing = true;
      const currentShift = this.queue[0];
      try {
        console.log("Data1", currentShift);
      }
      catch (error) {
        console.error("FAILED.", error);
      }
      finally {
        this.queue.shift();
        this.isProcessing = false;
        console.log("dequeue", this.queue);
        this.dequeue();
      }
    }
    else {
      console.log("Queue is empty.");
      return false;
    }
  }
}

const apiList = new apiQueue();
apiList.enqueue('https://jsonplaceholder.typicode.com/todos/2');
apiList.enqueue('https://jsonplaceholder.typicode.com/todos/1');
apiList.enqueue('https://jsonplaceholder.typicode.com/todos/3');
console.log(apiList.queue, "kkkkkkk");