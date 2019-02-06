import { BrowserWindow, app } from 'electron';
import { createMenus as createMenusMacOS } from './macos';

const getUntitledWindowTitle = (): string => {
    const windows: Map<string, BrowserWindow> = global['windows'];
    console.log(windows);
    const regex = new RegExp("Untitled([0-9]*)\s");
    const untitledWindows: number[] = [];
    for (const title in windows) {
        if (windows.hasOwnProperty(title)) {
            const test = title.match(regex);
            if (test) {
                untitledWindows.push[Number(test[1])];
            }
        }
    }
    let max = 0;
    for (let i = 0 ; i < untitledWindows.length ; i++) {
        const num = untitledWindows[i];
        if (num > max) {
            max = num;
        }
    }
    return `Untitled${++max} — Clavecin`;
}

export const newJob = () => {
    const appWindow = new BrowserWindow({
        title: getUntitledWindowTitle(),
        width: 800,
        height: 600
      });
    //appWindow.loadURL(`file://${__dirname}/index.html`);

    // if (isDevMode) {
    //     await installExtension(REACT_DEVELOPER_TOOLS);
    // }
    // Emitted when the window is closed.

    appWindow.on('closed', () => {
        const windows: Map<string, BrowserWindow> = global['windows'];
        windows.delete(appWindow.getTitle());
      });
};

const quit = () => {
    app.quit();
}

export const createMenus = () => {
    if (process.platform === "darwin") {
        createMenusMacOS(newJob, newJob, quit);
    } else if (process.platform === "win32") {

    } else if (process.platform === "linux") {

    }
}
