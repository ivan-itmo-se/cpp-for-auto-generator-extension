import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "cpp-for-auto-generator-extension" activated');

    const disposable = vscode.commands.registerCommand(
        'cpp-for-auto-generator-extension.forGenerator',
        () => {
            vscode.window.showInformationMessage( 'Hello from for generator!');
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('Extension "cpp-for-auto-generator-extension" deactivated');
}