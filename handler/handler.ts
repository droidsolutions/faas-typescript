import * as fs from "fs";
import {buffer} from "get-stdin";
import * as os from "os";

const contentValid = (content: string) => {
  return content && content.length && content.indexOf("verbose") > -1;
};

buffer().then((content: any) => {
  fs.readFile("/etc/hostname", "utf8", (_, data: any) => {
    console.log("Hostname: " + data);
    console.log("Platform: " + os.platform());
    console.log("Arch: " + os.arch());
    console.log("CPU count: " + os.cpus().length);
    console.log("Uptime: " + os.uptime());
    if (contentValid(content)) {
      console.log(os.cpus());
      console.log(os.networkInterfaces());
    }
  });
});
