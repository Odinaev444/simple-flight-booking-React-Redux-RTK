export type ItemKey = 'LAUNCH' | 'PAST_LAUNCH' | 'MY_LAUNCH';

export const ItemTypes: { [key in ItemKey]: string } = {
  LAUNCH: "launch",
  PAST_LAUNCH: "past_launch",
  MY_LAUNCH: "my_launches",
}