export type ItemKeyT = 'LUNCH'|'PAST_LUNCH'|'MY_LUNCH';

export const ItemTypes:{[key in ItemKeyT]:string } = {
  LUNCH: "lunch",
  PAST_LUNCH: "past_lunch",
  MY_LUNCH: "my_lunches",
}