interface Cb {
  (): Promise<number>;
}

interface Jobs {
  (...args: Cb[]): Promise<number[]>;
}

interface Func {
  (i: number): void;
}

class Parallel {
  result: number[];

  stream: number;

  count: number;

  promises: Cb[];

  timers: Array<NodeJS.Timer>;

  constructor(stream: number) {
    this.stream = stream;
    this.count = 0;
    this.result = [];
    this.promises = [];
    this.timers = [];
  }

  func: Func = async (i) => {
    this.count += 1;

    this.promises[i]().then((value: number) => {
      this.result.push(value);

      if (i >= this.promises.length - this.stream) {
        if (i === this.promises.length - 1) {
          this.count = 0;
          return;
        }
        return;
      }

      this.func(this.count);
    });
  };

  jobs: Jobs = async (...args) => {
    this.promises = [...args];

    const array = [...Array(this.stream)];

    await Promise.allSettled(
      array.map((_, i) => {
        return new Promise((res) => {
          this.func(i);
          this.timers[i] = setInterval(() => {
            if (this.result.length === this.promises.length) {
              res(this.stream);
            }
          }, 0);
        });
      })
    );

    this.timers.forEach((timer) => {
      clearInterval(timer);
    });

    return this.result;
  };
}

export default Parallel;
