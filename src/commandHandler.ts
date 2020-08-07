export const commands = new Map<string, CommandExecutor>();

export type CommandExecutor = (params: CommandExecuteParams) => any;

export const registerCommand = (
  aliases: string[],
  executor: CommandExecutor
) => {
  aliases.forEach((alias) => {
    commands[alias] = executor;
  });
};

export interface CommandExecuteParams {
  rawText: string;
  command: string;
  args: string;
}
