export default function (...args: (string | false | undefined)[]) {
  return args.filter(String).join(" ");
}
