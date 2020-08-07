import { Message } from "discord.js";

export const commands = new Map<string, CommandExecutor>();

export const registerCommand = (
  aliases: string[],
  executor: CommandExecutor
) => {
  aliases.forEach((alias) => {
    commands[alias] = executor;
  });
};

export interface CommandExecuteParams {
  msg: Message;
  command: string;
  args: string;
}

export type CommandExecutor = (params: CommandExecuteParams) => any;

export interface Command {
  aliases: string[];
  executor: CommandExecutor;
}
