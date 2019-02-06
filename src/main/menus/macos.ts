import { Menu } from 'electron';

export const createMenus = (
    newJob: () => void,
    open: () => void,
    quit: () => void,

): void => {
    Menu.setApplicationMenu(Menu.buildFromTemplate(
        [
            {
                label: "File",
                submenu: [
                    {
                        label: "New job",
                        accelerator: "Command+N",
                        click: newJob
                    },
                    {
                        label: "Open...",
                        accelerator: "Command+O",
                        click: open
                    },
                    {
                        label: "Quit",
                        accelerator: "Command+Q",
                        click: quit
                    },
                ]
            },
            {
                label: "View",
                submenu: [
                    {
                        label: "Reload",
                        accelerator: "Command+R",
                        click: function () {
                            mainWindow.reload();
                        }
                    },
                    {
                        label: "Toggle Full Screen",
                        accelerator: "Ctrl+Command+F",
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    },
                    {
                        label: "Toggle Developer Tools",
                        accelerator: "Alt+Command+I",
                        click: function () {
                            mainWindow.webContents.toggleDevTools();
                        }
                    },
                ]
            }
        ])
    );
}
