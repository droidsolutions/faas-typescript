import { buffer } from "get-stdin";
import * as os from "os";

class Handler {
  constructor() {}

  public initialize(): void {
    buffer().then((content: any) => {
      this.handler(content);
    });
  }

  private handler(stdin: any): void {
    if (this.contentValid(stdin)) {
      console.log("Platform: " + os.platform());
      console.log("Arch: " + os.arch());
      console.log("CPU count: " + os.cpus().length);
      console.log("Uptime: " + os.uptime());
    }
  }

  private contentValid(content: string): boolean {
    return typeof content === "string" && content.length > 0 && content.indexOf("verbose") > -1;
  }
}

const handler = new Handler();
handler.initialize();
