const vscode = require('vscode');

function activate(context) {
    let panel = vscode.window.createWebviewPanel(
        'myWebview', // Identifies the type of the webview. Used internally
        'My Webview', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {} // Webview options. More on these later.
    );

    // Read the `index.html` file and set it as the panel's HTML content
    panel.webview.html = getWebviewContent();
}

function getWebviewContent() {
    // Read the `index.html` file and return its contents as a string
    const indexHtml = vscode.Uri.file(
        vscode.window.activeTextEditor.document.fileName
    ).with({ scheme: 'vscode-resource' });
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src vscode-resource: https: data:; script-src vscode-resource:; style-src vscode-resource: 'unsafe-inline';">
    </head>
    <body>
        <iframe src="${indexHtml}" style="width:100%;height:100%;border:none;"></iframe>
    </body>
    </html>
    `;
}

exports.activate = activate;
