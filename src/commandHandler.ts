export const commands = new Map<string, CommandExecutor>();

export type CommandExecutor = (params: CommandExecuteParams) => string;

export const registerCommand = (command: string, executor: CommandExecutor) => {
  commands[command] = executor;
};

export interface CommandExecuteParams {
  rawText: string;
  command: string;
  args: string;
}
