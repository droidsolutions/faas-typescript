import { buffer } from "get-stdin";
import * as os from "os";

class Handler {
  constructor() {}

  public initialize(): void {
    buffer().then((content: any) => {
      this.readStdin(content);
    });
  }

  private readStdin(stdin: Buffer): void {
    if (stdin.length === 0) {
      console.log("Platform: " + os.platform());
      console.log("Arch: " + os.arch());
      console.log("CPU count: " + os.cpus().length);
      console.log("Uptime: " + os.uptime());
    } else {
      console.log({ error: true, msg: "Empty input buffer" });
      process.exitCode = 1;
    }
  }
}

const handler = new Handler();
handler.initialize();
